const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// to process the json data
app.use(express.json());
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

const userControllers = require("./controller/userController");

// GET all users
// app.get("/", userControllers.getAllUsers).post("/", userControllers.addNewUser);
app
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.addNewUser);
// POST new user

// POST login
app.route("/login").post(userControllers.login);
module.exports = app;
