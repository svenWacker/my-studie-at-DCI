const UserModel = require("../model/userModel");
const userMdd = {};

// Get user by name
userMdd.getUser = async (req, res, next) => {
  const userByName = await UserModel.findOne({ userName: req.params.name });
  //console.log(typeof userByName);
  try {
    if (!userByName) {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  res.user = userByName;
  next();
};

// Check entries
userMdd.checkUserData = async (req, res, next) => {
  const { userName, userPass, age, fbw, email } = req.body;

  if (
    userName == null ||
    userPass == null ||
    age == null ||
    fbw == null ||
    email == null
  ) {
    return res
      .status(400)
      .json({ message: "We need your (userName, userPass, age, fbw, email )" });
  }
  next();
};

// Check Age
userMdd.checkAge = async (req, res, next) => {
  const { age } = req.body;
  if (parseInt(age, 10) < 18) {
    return res.status(400).json({
      message:
        "We can not validate your user. we don't accept pp that are below 18 years of age",
    });
  }
  next();
};

// Check FbW
userMdd.checkFbW = async (req, res, next) => {
  const { fbw } = req.body;
  if (parseInt(fbw, 10) != 48) {
    return res.status(400).json({
      message:
        "We can not validate your user. They are not a member of FBW48-1",
    });
  }
  next();
};

// Display username
userMdd.userNameCapitalized = async (req, res, next) => {
  const { userName } = res.user;
  let userNameArr = userName.split(" ");
  // nancy so long
  // console.log("userName", userName);
  // console.log("userName array", userNameArr);
  let userNameFinally = [];
  for (let i = 0; i < userNameArr.length; i++) {
    userNameFinally.push(
      userNameArr[i].charAt(0).toUpperCase() +
        userNameArr[i].slice(1).toLowerCase()
    );
  }
  res.user.userName = userNameFinally.join(" ");
  next();
};

// Sort toolStack arr alphabetically
userMdd.toolStackArrSort = async (req, res, next) => {
  const { toolStack } = res.user;
  res.user.toolStack = toolStack.sort();
  next();
};

// Turn age and fbw into numbers
userMdd.strToNum = async (req, res, next) => {
  const { age, fbw } = res.user;

  res.user.age = parseInt(age, 10);
  res.user.fbw = parseInt(fbw, 10);
  next();
};

module.exports = userMdd;
