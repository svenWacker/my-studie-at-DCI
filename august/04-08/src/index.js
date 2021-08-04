#!/usr/bin/env node
const weather = require("./lib/weather");
const args = process.argv.slice(2);

// console.log(args);
const [city, country] = args;
weather(city, country).then(console.log).catch(console.error);
