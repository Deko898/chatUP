const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

// get all users
exports.getAllusers = async () => {
  try {
    const users = await User.find({})
    return users;
  } catch (e) {
    throw error(e)
  }
}

// get user by id
exports.getUserById = async id => {

  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    throw error(e)
  }
}

// register user
exports.addUser = async user => {

  try {
    let newUser = new User({ ...user
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    newUser.password = hash;
    const savedUser = await newUser.save();

    return savedUser;

  } catch (e) {

    throw error(e)
  }
}

// login user by Email
exports.getUserByEmail = async email => {
  let query = {
    email
  };
  try {
    const user = await User.findOne(query);
    return user;
  } catch (e) {
    throw error(e)
  }
}

//compare user password with hashed user password
exports.comparePassword = async (password, hash) => {

  const match = await bcrypt.compare(password, hash);

  return match;

}

// generate JSON WEB TOKEN
exports.generateAuthToken = user =>
  jwt.sign(user.toJSON(), config.secret, {
    expiresIn: 604800
  });
