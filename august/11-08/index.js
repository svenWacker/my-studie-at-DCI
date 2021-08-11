// npm init -y
// echo "PORT=5000" > .env
// echo "node_modules/" > .gitignore
// npm i express dontenv
// npm i nodemon --save-dev
// json script
// "start": "nodemon index.js"
require("dotenv").config();
// express
const express = require("express");
const app = express();
// to help express read json :)
app.use(express.json());

// http://localhost:5000/
app.get("/", (req, res) => {
  console.log(req);
  res.send("<h2>Welcome to our App</h2>");
});
// http://localhost:5000/about
app.get("/about", (req, res) => {
  res.send("<h2>We are the coolest pp</h2>");
});

// http://localhost:5000/user
app.get("/user", (req, res) => {
  // url /user?name=Hadi
  console.log(req.query);
  const username = req.query.name;
  res.send(`<h2>Hey ${username} </h2>`);
});
// POST method  http://localhost:5000/login
app.post("/login", (req, res) => {
  console.log(req.body);
  /*
  {
	"userName":"Sven",
	"pass":"000callme000"
}
in Body from postman
  */
  const userName = req.body.userName;
  const pass = req.body.pass;
  if (userName === "Sven" && pass === "000callme000") {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(401).send("invalid username or pass");
  }
});
// GET method  http://localhost:5000/api
app.get("/api", (req, res) => {
  res.status(200).json({ id: 1, cityName: "Berlin", country: "DE" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
