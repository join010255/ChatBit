import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

class MessageService{
    
    // roles client agent jwt token
    async createMessage(httpReq){
        try{
            const id = httpReq.params.id;
            const conversationData = await Conversation.findByPk(id);

            if(!conversationData){
                throw new Error("Conversation Not Found");
            }
            const message = await Message.create({
                conversation_id : id,
                sender_id : httpReq.user.id,
                content : httpReq.body.content
            });
            return {
                message : "Message Created",
                data : message
            }
        
        }catch(error){
            throw new Error("Server Error");
        }
    } ;

    async getMessage(httpReq){
        try{
            const idConversation = httpReq.params.id;
            const conversationData = await Conversation.findByPk(idConversation);
            if(!conversationData){
                throw new Error("Conversation Not Found");
            }
            const messageData = await Message.findAll({
                where : {
                    conversation_id : idConversation
                },
                attributes : ["id", "content", "created_at", "updated_at", "conversation_id", "sender_id"],
                include : {
                    model : User,
                    as : "sender",
                    attributes : ["id", "first_name", "last_name", "email"],
                } 
            });
            if(messageData){
                return messageData
            }    
        }catch(error){
            throw new Error("Server Error");
        }
    }
}

export default new MessageService();