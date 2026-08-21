import jwt  from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config({path : "../.env"});

class MiddlewareUser{
     authenticateToken = async (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        console.log(token)
        console.log(process.env.ACCESS_TOKEN_SECRET)
        await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token.' });
            }
            req.user = user;
            next();
        });
    }

    authorization = (...role) => {
        return async (req, res, next) => {
            try{
                const userData = await User.findByPk(req.user.id);
                if(!userData){
                    return res.status(404).json({
                        message: "User Not Found"
                    });
                }
                if(!role.includes(userData.role)){
                    return res.status(401).json({
                        message : "You Dont Have Role"
                    })
                }
                next();
            }catch(error){
                console.log(error)
                return res.status(500).json({
                    message : "server Error"
                })
            }
        }
    }
}

export default new MiddlewareUser();