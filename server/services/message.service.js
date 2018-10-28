const Message = require("../models/messages");

//create message
exports.addMessage = async message => {
  try {
    
    const newMessage = new Message({
      created: message.created,
      from: message.from,
      text: message.text,
      conversationId: message.conversationId
    })
    const savedMessage = await newMessage.save();

    return savedMessage;

  } catch (e) {

    throw error(e)
  }

};

//get message
exports.getMessages = async () => {
  try {
    const messages = await Message.find({})
    return messages;
  } catch (e) {
    throw error(e)
  }
};

//get message by conversation
exports.getMessagesByConv = async id => {
  let query = {
    conversationId: id
  };
  try {
    const messages = await Message.find(query);
    return messages;
  } catch (e) {
    throw error(e)
  }
};
