/* 
To start new express project
 npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express 
 npm i dotenv
 npm i morgan
 npm i express-validator
 npm i express-handlebars
 npm i nodemon --save-dev
 touch server.js app.js
 mkdir views
 mkdir views/layouts
 touch views/index.hbs
touch views/layouts/layout.hbs
 json script
 "start": "nodemon server.js"
 */

require("dotenv").config();
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
