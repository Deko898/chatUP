const Conversation = require("../models/conversation");
const messagesService = require("../services/message.service");
const userService = require("../services/user.service");
const extend = require('util')._extend;

addConversation = async conversation => {

  try {
    const newConversation = new Conversation({
      participants: conversation.participants,
      name: conversation.name
    });

    const savedConversation = await newConversation.save();

    return savedConversation;

  } catch (e) {

    throw error(e)
  }
};

getConversations = async () => {
  try {
    const conversations = await Conversation.find({})
    return conversations;
  } catch (e) {
    throw error(e)
  }
};

getConversation = async name => {
  let query = {
    name
  };
  try {
    const conversation = await Conversation.findOne(query);
    return conversation;
  } catch (e) {
    throw error(e)
  }
}

initMessages = async conversation => {
  const messages = await messagesService.getMessagesByConv(conversation._id);
  let conversationObj = extend({}, conversation);
  conversationObj.messages = messages;
  return conversationObj;
}

initConversation = async (participantOne, participantTwo) => {
  const userOne = await userService.getUserById(participantOne);
  const userTwo = await userService.getUserById(participantTwo);

  const participants = [userOne, userTwo];

  const newConv = new Conversation({
    participants,
    name: "" + userOne.id + "-" + userTwo.id
  });

  const addedConversation = await addConversation(newConv);
  return addedConversation;
}

exports.getConversationByIds = async (participantOne, participantTwo) => {
  let combinationOne = participantOne + "-" + participantTwo;
  let combinationTwo = participantTwo + "-" + participantOne;
  try {
    const convOne = await getConversation(combinationOne);
    if (!convOne || convOne === null) {
      const convTwo = await getConversation(combinationTwo);
      if (!convTwo || convTwo === null) {
        return await initConversation(participantOne, participantTwo);
      } else {
        return await initMessages(convTwo)
      }
    } else {
      return await initMessages(convOne)
    }

  } catch (error) {
    throw error(error)
  }
};
