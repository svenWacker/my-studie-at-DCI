const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Session = require("../models/sessionModel");
const uuid = require("uuid").v4;

const userControllers = {};

userControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).render("data", {
      data: users.map((user) => {
        return {
          _id: user._id,
          username: user.username,
          password: user.password,
          role: user.role,
          avatar: user.avatar,
        };
      }),
    });
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
  //
  req.session.done = true;
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    // Multer middleware will create req.file
    console.log(req.file);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      username: req.body.username,
      password: hashedPassword,
      //role: "ADMIN",
      role: "USER",
      avatar: req.file.path,
    });
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
    return res
      .status(404)
      .send("Cannot find user <br> <a href='/'>try again</a>");
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
        title: `Welcome`,
        done: true,
        username: user.username,
        avatar: user.avatar,
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
userControllers.logout = async (req, res) => {
  if (req.cookies && req.cookies.session_id) {
    res.clearCookie("session_id");
    res.clearCookie("role");
    res.clearCookie("user_id");
  }
  res.redirect("/");
};
userControllers.getOne = async (req, res) => {
  const username = req.params.name;
  try {
    //const user =  await User.findOne({username:username})
    const user = await User.find({ username });
    res.status(200).render("data", {
      data: user.map((user) => {
        return {
          _id: user._id,
          username: user.username,
          password: user.password,
          role: user.role,
          avatar: user.avatar,
        };
      }),
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
userControllers.deleteOneById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    // logout
    res.clearCookie("session_id");
    res.clearCookie("role");
    res.clearCookie("user_id");
    res.status(200).json({
      message: "This user is deleted and soon you will be logged out",
      user,
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = userControllers;
