const express = require('express');
const router = express.Router();
const passport = require('passport');
const messagesController = require("../controllers/messages.controller");

// get conversation
router.get('/:senderId/:reciverId', passport.authenticate("jwt", {session: false}),messagesController.getConversationById)

  
module.exports = router;