import {Router} from "express";
import messageController from "../controllers/message.controller.js";
import {authenticateToken, authorization} from "../middleware/auth.middleware.js";

const messageRouter = Router();

//, authorization('client', 'agent')
messageRouter.get("/conversations/:id/messages", authenticateToken, messageController.getMessages);

export default messageRouter;