const FakeModel = require("../model/user");
const faker = require("faker");

const userController = {};
// console.log(faker.animal.dog());
// GET all users
userController.getAllUsers = async (req, res) => {
  try {
    const data = await FakeModel.find();
    if (data) {
      // res.render("home",{data:data})
      res.render("home", { data });
    } else {
      res.render("home", { data: {} });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
// ADD 10 new users
userController.addTenNewUsers = async (req, res) => {
  for (let i = 0; i < 10; i++) {
    const fakeData = new FakeModel({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      city: faker.address.city(),
      avatar: faker.image.avatar(),
      // imageURL : faker.image.imageUrl(300, 300, "avatar", true, true)
    });
    try {
      await fakeData.save();
    } catch (err) {
      console.log(err);
    }
  }
  res.redirect("/");
};
//                              width, height, type, random, https
//console.log(faker.image.imageUrl(300, 300, "avatar", true, true));
module.exports = userController;
