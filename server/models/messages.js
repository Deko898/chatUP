const mongoose = require('mongoose');

// message schema
const MessageSchema = mongoose.Schema({
  created: {
    type: Date,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  conversationId: {
    type: String,
    required: true
  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
