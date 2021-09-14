const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = Schema({
  _id: mongoose.Types.ObjectId,
  username: {
    type: String,
    required: "You have to provide a username.",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "You have to provide a password.",
  },
  // odlPass
});

const User = mongoose.model("User", userSchema);
module.exports = User;
