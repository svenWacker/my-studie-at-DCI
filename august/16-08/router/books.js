// localhost:5000/books/ (GET PUT POST,...)
const express = require("express");
const router = express.Router();
// root route
// url localhost:5000/books/
router.get("/", (req, res) => {
  res.send("Hey This is books page");
});
// url localhost:5000/books/about
router.get("/about", (req, res) => {
  res.send("This is book about");
});

module.exports = router;
