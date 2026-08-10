import User from "./user.model.js";
import Conversation from "./conversation.model.js";
import Message from "./message.model.js";

// kola client lihowa user i 9dar i kono ando bzaf Dial conversation 1 to 0..
User.hasMany(Conversation, {
    foreignKey : "client_id", 
    as : "clientConversation"
});
// kola user i 9dar i kon howa agent or client
// kola agen lihowa user i 9dar i kono ando bzaf Dial conversation 1 to 0..
User.hasMany(Conversation, {
    foreignKey : "agent_id",
    as : "agentConversation"
});

Conversation.belongsTo(User, {
    foreignKey : "client_id",
    as : "client"
})


Conversation.belongsTo(User, {
    foreignKey : "agent_id",
    as : "agent"
})

Conversation.hasMany(Message, {
    foreignKey : "conversation_id",
    as : "massage"
})

Message.belongsTo(Conversation, {
    foreignKey : "conversation"
})

User.hasMany(Message, {
    foreignKey : "sender_id",
    as : "sentMessages"
})

Message.belongsTo(User, {
  foreignKey: "sender_id",
  as: "sender",
});