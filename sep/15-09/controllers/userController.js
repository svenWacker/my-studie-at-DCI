const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Session = require("../models/sessionModel");
const uuid = require("uuid").v4;
const userControllers = {};

userControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
userControllers.addUser = async (req, res) => {
  const userCheck = await User.findOne({ username: req.body.username });
  if (userCheck) {
    return res
      .status(400)
      .send("This name is already been used <br> <a href='/'>Try again</a>");
  }
  // to validate later :)
  // if any errors
  // req.session.done = false;
  // it was cool and no errors
  req.session.done = true;
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    // there will be a  for file
    console.log(req.file);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      username: req.body.username,
      password: hashedPassword,
      // role: "ADMIN",
      role: "USER",
      avatar: req.file.path,
    });
    console.log(newUser);
    newUser.save();
    res.status(200).send("New user been added <a href='/login'>login</a>");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

userControllers.login = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const user = await User.findOne({ username });
  if (user == null) {
    res.status(404).send("Cannot find user <br> <a href='/'>try again</a>");
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      let sessionId = uuid();
      res.cookie("session_id", sessionId, {
        expires: new Date(Date.now() + 900000), //cookie will expires in 15 min
      });
      res.cookie("role", user.role, {
        expires: new Date(Date.now() + 900000), //cookie will expires in 15 min
      });
      res.cookie("user_id", user._id, {
        expires: new Date(Date.now() + 900000), //cookie will expires in 15 min
      });
      let session = await new Session({
        uuid: sessionId,
        user_id: user,
      });
      session.save();
      res.status(200).render("login", {
        title: `Welcome ${username}`,
        done: true,
        errors: req.session.errors,
      });
      req.session.errors = null;
    } else {
      res.send("Not Allowed <br> <a href='/login'>try again</a>");
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
userControllers.getOne = async (req, res) => {
  const username = req.params.name;
  try {
    //const user =  await User.findOne({username:username})
    const user = await User.findOne({ username });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
userControllers.deleteOneById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = userControllers;
