/* 
To start new express project
 npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i morgan
 npm i mongoose
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir router model
 touch router/employees.js
 touch model/employeesModel.js
 json script
 "start": "nodemon server.js"
 */
// MongoDB with Express

// Your DB is able to CRUD aka Creat Retrieve Update Delete

// Your server is able to REST API (REpresentational State Transfer) aka server can do (create, delete, update, read)requests
require("dotenv").config();
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
