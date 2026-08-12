import User  from "../models/user.model.js";
import Password from "../utils/password.js"
import ganerateTokens from "../utils/jwt.js";


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
    }
}

export default new UserService();