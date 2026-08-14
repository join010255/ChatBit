import UserService from "../services/user.service.js";

class UserControles{
    async login(req, res){
        try{
            const result = await UserService.login(req.body);
            return res.status(201).json(result)
        }catch(error){
            return res.status(401).json({
                message : error.message
            })
        }
    };

    async register(req, res){
        try{
            await UserService.register(req.body);
            return res.status(201).json({
                message : "ok"
            })
        }catch(error){
            res.status(500).json({
                error : error.message
            })
        }
    }

    async me(req, res){
        try{
            const result = await UserService.me(req);
            return res.status(200).json(result)
        }catch(error){
            return res.status(500).json({
                message : error.message
            })
        }
    };
}

export default new UserControles();