import {Router} from "express";
import conversationController from "../controllers/conversation.controller.js";
import {authenticateToken, authorization} from "../middleware/auth.middleware.js";

const conversationRouter = Router();

conversationRouter.get("/conversations", authenticateToken, authorization('client', 'agent'), conversationController.getConversation);