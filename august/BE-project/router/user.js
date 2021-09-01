const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const userMdd = require("../middleware/");

// URL http://localhost:5000/user
router
  .route("/")
  .get(userController.getAllUsers)
  .post(
    userMdd.checkUserData,
    userMdd.checkAge,
    userMdd.checkFbW,
    userController.addNewUser
  );
// URL http://localhost:5000/user/:name
router
  .route("/:name")
  .put(userMdd.getUser, userController.updateUserData)
  .patch(userMdd.getUser, userController.patchUserData);

module.exports = router;
