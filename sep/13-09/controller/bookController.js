const { Author, Book } = require("../model/authorModel");
const mongoose = require("mongoose");
const booksControllers = {};
// https://mongoosejs.com/docs/populate.html
// Check author
booksControllers.checkAuthor = async (req, res, next) => {
  //  const author = await Author.findOne({_id:req.params.id})
  const author = await Author.findById(req.params.id);
  try {
    if (!author) {
      return res.status(404).json({ message: "Author NOT Found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  req.author = author;
  next();
};
// GET all authors
booksControllers.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};
// GET all books
booksControllers.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};
// POST new author
/*
{
	"name":"Hadi"
}
*/
booksControllers.addAuthor = async (req, res) => {
  const author = new Author({
    _id: new mongoose.Types.ObjectId(),
    authorName: req.body.name,
  });
  try {
    await author.save();
    res.status(201).json({ message: "New author being added ✅", author });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// POST new book
// localhost:5000/book/:id
/*
{
	"title":"Day"
}
*/
booksControllers.addNewBook = async (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      if (author) {
        const book = new Book({
          _id: new mongoose.Types.ObjectId(),
          author: req.params.id, // get the _id from that author which is in my params
          title: req.body.title,
        });
        book.save();
        author.books.push(book);
        author.save();
        res.status(201).json({ message: "New book being added ✅" }, book);
      } else {
        return res.status(404).json({ message: "Author NOT Found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
// GET one author by id
booksControllers.getOneByID = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate("books");
    // res.status(200).json(author);
    res.status(200).json({
      message: `${author.authorName} has ${author.books.length} books`,
      books: author.books.map((book) => book.title).join(", "),
    });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
// DELETE one author by id
booksControllers.deleteById = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "This author has been removed", author });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
module.exports = booksControllers;
