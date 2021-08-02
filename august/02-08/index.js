// What is NodeJs?
// it's an asynchronous runtime open Source scripting language to write js outside the browser
// we used it to build backend services or APIs
// Why NodeJs?
// has the biggest open source library that allows you can add many cool features to your app
// Motivation examples:
// PayPal switch their Java application to Node and they found they needed less people to write the code, 33% less code and 40% less files and even they had double request served per sec.
// process object
//console.log(process);
//console.log(process.argv);
//console.log(`Hey ${process.argv[2]}`);
//
// process.argv.forEach((item, i) => {
//   console.log(`${i} : ${item}`);
// });

// this is the real deal
const args = process.argv.slice(2);
//console.log(args);
// fs (File System) built-in module in NodeJs
const fs = require("fs");

// read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
// write file
fs.writeFile("new.txt", "This is file created in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done ✅ ");
});
