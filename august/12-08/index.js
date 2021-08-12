/* 
To start new express project
npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i lowdb
 npm i nodemon --save-dev
 touch index.js
 json script
 "start": "nodemon index.js"
 */

// express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// lowdb
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = lowdb(jsonFile);

// json setup old school
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());

// json cool method
app.use(express.json());

//root route
app.get("/", (req, res) => {
  //console.log(req);
  res.send("<h2>Welcome to our lowdb app</h2>");
});
// db init
app.get("/new", async (req, res) => {
  await db.defaults({ articles: [], user: {}, num: 1 }).write();
  res.send("New db is being init");
});

// add
app.get("/add", async (req, res) => {
  //url /add?id=1&title=cool
  const id = req.query.id;
  const title = req.query.title;
  db.get("articles").push({ id: id, title: title }).write();
  res.send(`New data being entered id:${id} title${title}:`);
});

// find

app.get("/find", async (req, res) => {
  //url  /find?id=1
  const idToFind = req.query.id;
  const result = await db.get("articles").find({ id: idToFind }).value();
  let text = "";
  if (result) {
    text = result;
  } else {
    text = "sorry, not found";
  }
  res.send(text);
});
// update

// delete

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
