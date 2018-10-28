const conversationService = require("../services/conversation.service");

//get conversation one on one
exports.getConversationById = async (req, res) => {

  try {
    const conversationData = await conversationService.getConversationByIds(req.params.senderId, req.params.reciverId);
    const conversation = {
      participants: conversationData._doc.participants,
      conversationId: conversationData._doc._id,
      name: conversationData._doc.name,
      messages: conversationData.messages
    }
    return res.status(200).send(conversation);
  } catch (e) {
    res.status(400).send({
      message: "error"
    });
  }
}
