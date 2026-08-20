import conversationService from "../services/conversation.service.js";



class ConversationController {
    async getConversations(req, res) {
        try {
            const conversations = await conversationService.getConversation(req.user.id);
            return res.status(201).json({
                success: true,
                message: "Conversations fetched successfully",
                data: conversations
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    }

    async createConversations(req, res) {
        try {
            await conversationService.createConversation(req);
            return res.status(201).json({
                success: true,
                message: "Conversation created successfully",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    }

    async closedConversation(req, res) {
        try {
            await conversationService.deleteConversation(req);
            return res.status(201).json({
                success: true,
                message: "Conversation closed successfully",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    };
}

export default new ConversationController();