const mongoose = require('mongoose');

// conversation schema
const ConversationSchema = mongoose.Schema({
  participants: {
    type: []
  },
  name: {
    type: String,
    required: true
  }
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;