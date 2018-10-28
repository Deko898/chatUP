const userService = require("../services/user.service");

//Register
exports.addUser = async (req, res) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email
  }

  try {
    const registeredUser = await userService.addUser(user);
    return res.status(200).send({
      success: true,
      user: registeredUser
    });
  } catch (e) {
    res.status(400).send({
      message: "Failed registration"
    });
  }
}

//Login
exports.getUserByEmail = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  try {

    const user = await userService.getUserByEmail(email);
    const match = await userService.comparePassword(password, user.password);
    if (match) {
      const token = userService.generateAuthToken(user);

      return res.status(200).send({
        success: true,
        token: "JWT " + token,
        user: {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email
        }
      });
    }
    //send message if password dont match
    res.status(400).send({
      success: false,
      msg: "Wrong Password"
    })
  } catch (e) {
    res.status(400).send({
      message: "Failed registration"
    });
  }
}

// Fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllusers();
    return res.status(200).send(users);
  } catch (e) {
    throw error(e);
  }
}

//get profile
exports.getProfile = async (req, res) => {
  try {
    res.status(200).send(req.user);

  } catch (e) {
    throw error(e)
  }
}
