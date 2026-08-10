import User from "./user.model.js";
import Conversation from "./conversation.model.js";
import Message from "./message.model.js";

User.hasMany(Conversation, {
  foreignKey: "client_id",
  as: "clientConversations",
});

User.hasMany(Conversation, {
  foreignKey: "agent_id",
  as: "agentConversations",
});

Conversation.belongsTo(User, {
  foreignKey: "client_id",
  as: "client",
});

Conversation.belongsTo(User, {
  foreignKey: "agent_id",
  as: "agent",
});

Conversation.hasMany(Message, {
  foreignKey: "conversation_id",
  as: "messages",
});

Message.belongsTo(Conversation, {
  foreignKey: "conversation_id",
  as: "conversation",
});

User.hasMany(Message, {
  foreignKey: "sender_id",
  as: "sentMessages",
});

Message.belongsTo(User, {
  foreignKey: "sender_id",
  as: "sender",
});

export {
  User,
  Conversation,
  Message,
};