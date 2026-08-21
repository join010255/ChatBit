import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config({path : "../.env"})

    
const ganerateTokens = async(userId) => {
    try{
        if(!userId){
            throw new Error("User Not Found");
        }
        const payload = {id : userId.id}
        const [acessToken, reafreshToken] = await Promise.all([
            Promise.resolve(
                jwt.sign(
                    payload,
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn : "1h"
                    }
                )
            ),
            Promise.resolve(
                jwt.sign(
                    payload,
                    process.env.REFRESH_TOKEN_SECRET,
                    {
                        expiresIn : "7d"
                    }
                )
            )
        ])
        
        return {
            acess_token : acessToken,
            reafresh_token : reafreshToken
        };
    }catch(error){
        console.log(error);
    };
};

export default ganerateTokens;