const messagesService = require("./message.service");

exports.addMessage = async message => {
  try {
    return await messagesService.addMessage(message)
  } catch (error) {
    throw error(error)
  }
}
