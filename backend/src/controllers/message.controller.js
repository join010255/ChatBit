import messageService from "../services/message.service.js";


class MessageController {
    async createMessages(req, res){
        try{
            const message = await messageService.createMessage(req);
            res.status(201).json({message : message.message})
        }catch(error){
            res.status(500).json({error : error.message});
        }
    }
    async getMessages(req, res){
        try{
            const messages = await messageService.getMessage(req);
            res.status(200).json({messages : messages});
        }catch(error){
            res.status(500).json({error : error.message});
        }
    }
}

export default new MessageController();