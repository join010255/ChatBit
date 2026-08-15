import { Router} from "express";
import UserControles from "../controllers/user.controller.js";
import {authenticateToken, authorization} from "../middleware/auth.middleware.js";
import {loginValidation, registerValidation} from "../middleware/validation.middleware.js"

const userRouter = Router();

userRouter.post("/login", loginValidation, UserControles.login);
userRouter.post("/register", registerValidation, UserControles.register);
userRouter.get("/me", authenticateToken, authorization("agent", "client"), UserControles.me);

export default userRouter;