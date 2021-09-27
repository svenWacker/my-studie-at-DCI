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
 npm i cookie-parser
 npm i express-session
 npm i express-handlebars
 npm i express-validator
 npm i uuid
 npm i multer
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir models controllers views routes uploads
 mkdir views/layouts
 touch models/userModel.js
 touch models/sessionModel.js
 touch controllers/userController.js
 touch controllers/authController.js
 touch views/index.hbs views/login.hbs
 touch views/layouts/layout.hbs
 touch routes/auth.js routes/user.js routes/users.js 
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
