// mongodb subDocs
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  _id: false,
  title: String,
  issueYear: Number,
});

const authorSchema = new mongoose.Schema({
  authorName: String,
  books: [bookSchema],
});

module.exports = mongoose.model("author", authorSchema);
