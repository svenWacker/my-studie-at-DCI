const express = require("express");
const app = express();
const morgan = require("morgan");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());

module.exports = app;
