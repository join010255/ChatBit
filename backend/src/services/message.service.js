import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

class MessageService{
    
    // roles client agent
    async createMessage(httpReq){
        try{
            const {id} = httpReq.params;
            const conversationData = await Conversation.findOne({
                where : {
                    id : id
                }
            });

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
    } 
}