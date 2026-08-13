import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";
class ConversationService {
    async createConversation(httpBody) {
        try {
            userData = await User.findOne({
                where: {
                    id: httpBody.user,
                }
            });
            if (!userData) {
                throw new Error("User Not Found");
            }
            const conversation = await Conversation.create(httpBody);
        }catch (error) {
            throw new Error("Server Error");
        }
    }
}