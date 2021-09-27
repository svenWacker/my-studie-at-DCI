const express = require("express");
const router = express.Router();
const allowAccess = require("../controllers/authController");
const userControllers = require("../controllers/userController");

// localhost:5000/users

router.route("/").get(allowAccess.roleCheck, userControllers.getAllUsers);

module.exports = router;
