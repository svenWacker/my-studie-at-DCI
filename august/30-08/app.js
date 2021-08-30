const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const mongoose = require("mongoose");
const faker = require("faker");
const path = require("path");
//const fakeModel = require("./model/user");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

module.exports = app;
