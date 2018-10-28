const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 1
  },
  lastname: {
    type: String,
    required: true,
    minlength: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
      dropDups: true
    },
    validate: {
      validator: validator.isEmail,
      message: `Value is not a valid email`
    }
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
