const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

const url = "mongodb://localhost:27017/chatUP";

connect = () => {
  mongoose.connect(url, {
    useNewUrlParser: true
    })
    .then(() => {
      console.log(`Succesfully Connected to DB : ${url}`)
    })
    .catch(() => {
      console.log(`Error Connecting to DB :${url}`)
    })
}


module.exports = {
  connectDB: connect(),
  secret: "secret"
}
