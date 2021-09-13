const AuthorModel = require("../model/authorModel");
const booksController = {};
// Check Author middleware
booksController.authorCheck = async (req, res, next) => {
  const author = await AuthorModel.findById(req.params.id);
  try {
    if (!author) {
      return res.status(404).json({ message: "Author Not Found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  req.author = author;
  next();
};
// GET all
booksController.getAll = async (req, res) => {
  try {
    const authors = await AuthorModel.find();
    res.status(200).json(authors);
  } catch (err) {
    // res.status(500).json({
    res.status(err.status).json({
      message: err.message,
    });
  }
};
// POST one
booksController.addNewAuthor = async (req, res) => {
  //console.log(req.body);
  // your psst req will look
  /*
{
	"name":"Steel",
	"books":[
		{"title":"Summer","issueYear":2001},{"title":"Java","issueYear":1999},{"title":"Me & You","issueYear":2004}
		]
}
*/
  const author = new AuthorModel({
    authorName: req.body.name,
  });
  req.body.books.map((book) => {
    author.books.push({ title: book.title, issueYear: book.issueYear });
  });
  try {
    await author.save();
    res.status(201).json({
      message: "This author been added",
      author,
    });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
// GET one by id
booksController.getOneByID = async (req, res) => {
  try {
    const author = await AuthorModel.findById(req.params.id);
    //   const author = await AuthorModel.findOne({_id:req.params.id})
    res.status(200).json(author);
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
// DELETE one by id
booksController.deleteOneByID = async (req, res) => {
  try {
    const author = await AuthorModel.findByIdAndDelete(req.params.id);
    //  const author = await AuthorModel.findOneAndDelete({_id:req.params.id})
    res.status(200).json({ message: "This author been deleted", author });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
// PUT one by id
booksController.updateOneByID = async (req, res) => {
  try {
    const updatedAuthor = await AuthorModel.findByIdAndUpdate(req.params.id, {
      $set: {
        authorName: req.body.name,
        books: req.body.books.map((book) => book),
      },
    });
    res
      .status(200)
      .json({ message: "This author been updated", updatedAuthor });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
// PATCH one by id
// Need some DB changes 😎
// Add more books to an Author
booksController.addMoreBooksToAuthor = async (req, res) => {
  try {
    const authorNewBook = await AuthorModel.findByIdAndUpdate(req.params.id, {
      $push: { books: req.body.books.map((book) => book) },
    });
    res
      .status(200)
      .json({ message: "This author got some new books", authorNewBook });
  } catch (err) {
    res.status(err.status).json({
      message: err.message,
    });
  }
};
module.exports = booksController;
