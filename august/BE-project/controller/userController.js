const UserData = require("../model/userModel");

const userController = {};

// GET all users
// URL  http://localhost:5000/users
userController.getAllUsers = async (req, res) => {
  try {
    const users = await UserData.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Add new user
userController.addNewUser = async (req, res) => {
  const user = new UserData({
    userName: req.body.userName.toLowerCase(),
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    res.status(201).json({
      message: "New user being added ✅",
      newUser,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update all user data
userController.updateUserData = async (req, res) => {
  try {
    await UserData.updateOne(
      { userName: req.params.userName },
      {
        $set: {
          userName: req.body.userName,
          userPass: req.body.userPass,
          fbw: req.body.fbw,
          age: req.body.age,
          toolStack: req.body.toolStack,
          email: req.body.email,
        },
      }
    );
    res.status(200).json({ message: "User being updated ✅" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update some user data
userController.patchUserData = async (req, res) => {
  try {
    const userByName = await UserData.findOneAndUpdate(
      { userName: req.params.name },
      {
        userName: req.body.userName || res.user.userName,
        userPass: req.body.userPass || res.user.userPass,
        age: req.body.age || res.user.age,
        fbw: req.body.fbw || res.user.fbw,
        toolStack: req.body.toolStack || res.user.toolStack,
        email: req.body.email || res.user.email,
      },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ message: "Some user data got changes ✅", userByName });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

// Display one user
userController.displayUser = async (err, req, res, next) => {
  try {
    res.status(200).send(res.user);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = userController;
