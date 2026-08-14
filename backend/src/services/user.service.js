import User  from "../models/user.model.js";
import Password from "../utils/password.js"
import ganerateTokens from "../utils/jwt.js";
import { ca } from "zod/v4/locales";


class UserService{
    async login(httpBody){
        try{
            const userData = await User.findOne({
                where : {email : httpBody.email}
            });

            if(!userData){
                throw new Error("User Not found");
            }else if(!Password.comparePassword(httpBody.password, userData.password)){
                throw new Error("Email or Password Is not true")
            }
            return await ganerateTokens();

        }catch(error){
            console.log(error)
        }
    };
    
    async register(httpBody){
        try{
            const userData = await User.findOne({
                where : {email : httpBody.email}
            });
            if(userData){
                throw new Error("Emeil is Redy Exisit")
            }
            const passwordHashed = await Password.hashPassword(httpBody.password);
            await User.create({
                ...httpBody,
                password : passwordHashed
            });
        }catch(error){
            throw new Error("Server Error")
        }
    };

    async me(httpBody){
        try{
            const dataUser = await User.findByPk(httpBody.user.id);
            if(!dataUser){
                throw new Error("User Not Found")
            }
            return dataUser;
        }catch(error){
            throw new Error("Server Error")
        }
    }
}

export default new UserService();