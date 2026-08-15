import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";


class ConversationService {
    // roles client get
    async createConversation(httpBody) {
        try {
            const userData = await User.findOne({
                where: {
                    id: httpBody.user,
                }
            });
            if(!userData) {
                throw new Error("User Not Found");
            }
            const conversation = await Conversation.create(httpBody);
            return {
                message : "Conversation Created",
                data : conversation
            }
        }catch (error) {
            throw new Error("Server Error");
        }
    } 
    // roles agent client
   async getConversation(httpRequest) {
    try {
        const userData = await User.findOne({
            where: {
                id: httpRequest.user.id,
            }
        });

        if (!userData) {
            throw new Error("User Not Found");
        }

        if(userData.role == "client"){
            const conversationData = await Conversation.findAll({
                where: {
                    client_id: httpRequest.user.id,
                },
                attributes : ["id", "status", "subject", "created_at", "updated_at", "client_id", "agent_id", "closed_at"],
                include : {
                    model : User,
                    as : "client",
                    attributes : ["id", "first_name", "last_name", "email"],
                } 
            });
            return conversationData;
        }else{
            const conversationData = await Conversation.findAll({
                attributes : ["id", "status", "subject", "created_at", "updated_at", "client_id", "agent_id", "closed_at"],
                include : {
                    model : User,
                    as : "agent",
                    attributes : ["id", "first_name", "last_name", "email"],
                } 
            });
            return conversationData;
        }
    } catch (error) {
        throw new Error("Server Error");
    }
}
    // role agent 
    async deleteConversation(httpBody) {
        try {
            const conversationData = await Conversation.findOne({
                where: {
                    id: httpBody.user.id,
                }
            });
            if (!conversationData) {
                throw new Error("Conversation Not Found");
            }
            await conversationData.destroy();
            return {
                message : "Conversation Deleted",
            }
        } catch (error) {
            throw new Error("Server Error");
        }
    }
    
}

export default new ConversationService();
