const express = require("express");
const router = express.Router();
const allowAccess = require("../controllers/authController");
const userController = require("../controllers/userController");

// localhost:500/user/view/Hadi
router
  .route("/view/:name")
  .get(allowAccess.allowedToView, userController.getOne);

router
  .route("/del/:id")
  .get(allowAccess.allowedToDelete, userController.deleteOneById);

module.exports = router;
