const express = require('express');
const router = express.Router();

const userRoutes = require('./users.router.js');
const friendsRoutes = require('./friends.router.js');
const messagesRoutes = require('./messages.router.js');


router.use('/users', userRoutes);
router.use('/friends', friendsRoutes);
router.use('/messages', messagesRoutes);


module.exports = router;