const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter a username"],
  },
  userPass: {
    type: String,
    required: [true, "Please enter a password"],
  },
  age: {
    type: String,
    trim: true,
    required: [true, "Please enter your age"],
  },
  fbw: {
    type: String,
    trim: true,
    required: [true, "Please enter your FbW number"],
  },
  toolStack: {
    type: Array,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter your email"],
  },
});

module.exports = mongoose.model("userDataCollection", userDataSchema);
