/* 
To start new express project
 npm init -y
 echo "PORT=5000\nDB_URL=mongodb://localhost:27017/users" > .env
 echo "node_modules/" > .gitignore
 npm i express 
 npm i dotenv
 npm i morgan
 npm i mongoose
 npm i bcrypt
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir model controller
 touch model/userModel.js
 touch controller/userController.js
 - json script
 "start": "nodemon server.js"
 - create new DB in mongo shell
 use users
 */

require("dotenv").config();
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
