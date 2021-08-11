const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (request, response) => response.send("Hey, I am home page"));
app.get("/about", (request, response) => response.send("about page"));

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
