const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const userMdd = require("../middleware/");

// GET one user
// URL  http://localhost:5000/display/:name

router
  .route("/:name")
  .get(
    userMdd.getUser,
    userMdd.userNameCapitalized,
    userMdd.toolStackArrSort,
    userMdd.strToNum,
    userController.displayUser
  );

module.exports = router;
