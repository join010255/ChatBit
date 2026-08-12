import { includes } from "zod";
import Message from "../models/message.model.js";

class MessageService{
    async getAllMessage(httpBody){
        try{
            const {id} = httpBody.params
            await Message.findByPk(id, {
                include : [
                    {
                        model : "Conversation",
                        attributes : ["client_id", "agent_id"]
                    }
                ]
            });

        }catch(error){
            throw new Error("server Error")
        }
    }
}