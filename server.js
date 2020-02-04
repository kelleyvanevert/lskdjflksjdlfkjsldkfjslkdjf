// npm init
// npm install express body-parser cors

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  console.log("hi there");
  response.send("hello world");
})

app.listen(3789, () => {
  console.log("server started!");
});

// node server.js
// browsed to localhost:3789
