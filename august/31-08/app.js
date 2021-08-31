const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

//const UserModel = require("./model/user");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

// Middleware get user by ID
const getUserById = async (req, res, next) => {
  // const userById = await UserData.findOne({ _id: req.params.id });
  const userById = await UserData.findById({ _id: req.params.id });
  try {
    if (!userById) {
      return res.status(404).json({ message: "Sorry, user NOT FOUND." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.user = getUserById;
  next();
};

// Get all
app.get("/", async (req, res) => {
  try {
    const newUser = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// Add new one
app.post("/", async (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    city: req.body.city,
  });
  try {
    // save
    const user = await newUser.save();
    // 201 for Successful Created
    res.status(201).json(user);
  } catch (err) {
    // 400 for Bad request
    res.status(400).json({
      message: err.message,
    });
  }
});
// Get one
app.get("/:id", getUserById, async (req, res) => {
  try {
    res.status(201).json(res, user);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
});
// https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
// patch one
app.patch("/:id", getUserById, async (req, res) => {
  try {
    const UserById = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        city: req.body.city,
      },
      { new: true }
    );
  } catch (err) {}
});

// delete one
app.delete("/:id", getUserById, async (req, res) => {
  try {
    const deletedUserById = await UserModel.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "This user been deleted", deletedUserById });
  } catch (err) {}
});

module.exports = app;
