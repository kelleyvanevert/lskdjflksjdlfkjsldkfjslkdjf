// npm init
// npm install express body-parser cors

const express = require("express");
const port = process.env.PORT || 3789;

const app = express();

app.get("/", (request, response) => {
  console.log("hi there");
  response.send("hello world");
})

app.listen(port, () => {
  console.log("server started, listening:", port);
});

// node server.js
// browsed to localhost:3789
