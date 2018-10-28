const express = require('express');
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/user.controller");

// get all users
router.get('/', userController.getAllUsers);

//Register
router.post("/register", userController.addUser);

//Login
router.post("/login", userController.getUserByEmail)

//Profile
router.get("/profile", passport.authenticate("jwt", {
  session: false
}), userController.getProfile);

module.exports = router;
