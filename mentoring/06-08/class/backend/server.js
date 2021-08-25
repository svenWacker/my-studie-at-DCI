const express = require("express"); // importing using old js server
const ourServer = express(); // creating an instance
const PORT = 8000;
ourServer.listen(PORT, () =>
  console.log(`server up and running on port=${PORT}`)
);
ourServer.get("/", (request, response) => response.send(`hello world!!!`)); // controller
ourServer.get("/test", (request, response) => response.send(`testing...`));
/* a request (route) consists of following parts: 
    - the method: GET
    - the path:`/`
    - the controller function: (req, res) => {}
*/
ourServer.get("/idea", (req, res) => response.send(`idea...`));

ourServer.get("/about", function (req, res) {
  res.send(`this is an introduction about expressJS...`);
});
// building the test route
ourServer.get("/user/:id", function (req, res) {
  const usersArr = ["Sven", "Alina", "Vivi", "Igal"];
  if (req.params.id) res.send(`logged in user : ` + req.params.id); // params ==> :
});
