const socketIo = require('socket.io');
const Message = require('../models/messages');
const chatService = require("../services/chat.service");

const users = [];
const connections = [];

const onSocketInit = server => {
  const io = socketIo(server, {
    path: '/chat'
  });

  io.on("connection", (socket) => {

    connections.push(socket);

    socket.on("user", (data) => {

      socket.userId = data.id;
      let user = {
        userId: socket.userId,
        id: socket.id
      };
      let existing = searchUser(user.userId);
      if (!existing)
        users.push(user);

      io.emit("active", users);

    });

    socket.on("message", (data) => {

      let user = searchUser(data.to);

      if (user) {
        let connections = searchConnections(data.to);
        if (connections.length) {
          for (let con of connections) {
            socket.to(con.id).emit("message", data.message);
          }
        }

      }

      // save the message to the database
      let message = new Message(data.message);
      chatService.addMessage(message);
    });


    socket.on("disconnect", () => {

      let connections = searchConnections(socket.userId);
      if (connections.length === 1) {
        let user = searchUser(socket.userId);
        if (user) {
          users.splice(users.indexOf(user), 1);
        }
      }

      io.emit("active", users);

      let connIndex = connections.indexOf(socket);
      if (connIndex > -1) {
        connections.splice(connIndex, 1);
      }
    });
  });
};

const searchUser = id => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === id) {
      return users[i];
    }
  }

  return false;
};


const searchConnections = id => {
  let found = [];
  for (let conn of connections) {
    if (conn.userId === id) {
      found.push(conn);
    }
  }

  if (found.length > 0) {
    return found;
  } else {
    return false;
  }
}

module.exports = onSocketInit;