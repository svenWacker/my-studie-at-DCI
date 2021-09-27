const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// cookie, session
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

// to process the data
app.use(express.json());
// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data

app.use(
  express.urlencoded({
    extended: true,
  })
);

// cookies
app.use(cookieParser());
// Session
app.use(
  expressSession({
    secret: "somethingSecret",
    saveUninitialized: false,
    resave: false,
  })
);
// mongoDB
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
// Alow uploads
app.use("/uploads", express.static("uploads"));

app.get("/users", async (req, res) => {
  const users = ["Zain", "Nancy", "Olga", "Jack"];
  res.status(200).json(users);
});

module.exports = app;
