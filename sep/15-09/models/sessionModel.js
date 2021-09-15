const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SessionSchema = Schema({
  uuid: {
    type: String,
    unique: true,
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});
const Session = mongoose.model("Session", SessionSchema);
module.exports = Session;
