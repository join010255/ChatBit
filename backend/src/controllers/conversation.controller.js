import conversationService from "../services/conversation.service.js";



class ConversationController{
    async getConversation(req,res){
        try{
            await conversationService.getConversations(req.user.id);
            return res.status(201).json({
                success: true,
                message: "Conversations fetched successfully",
                data: conversations
            })
        }catch(error){
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    }

    async createConversation(req, res){
        try{
            await conversationService.createConversation();
            return res.status(201).json({
                success: true,
                message: "Conversation created successfully",
            })
        }catch(error){
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    }
}

export default new ConversationController();