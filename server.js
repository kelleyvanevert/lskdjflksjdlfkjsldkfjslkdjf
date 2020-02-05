// npm init

// npm install express
// npm install body-parser
// npm install cors
const express = require("express");
const port = process.env.PORT || 3789;

// npm install sequelize
// npm install pg
const Sequelize = require("sequelize");
const connection = new Sequelize(
  process.env.DATABASE_URL ||
  "postgres://postgres:password@localhost:5432/postgres"
);

// TODO:
// define model
// connection.sync()

const app = express();

app.get("/", (request, response) => {
  console.log("hi there");
  response.send("hello world");
});

// for example:
app.get("/joblistings", (request, response) => {
  // (1) fetch data with e.g. JobListings.findAll()
  // (2) then, return it with
  //   - response.json(data);
});

app.listen(port, () => {
  console.log("server started, listening:", port);
});

// node server.js
// browsed to localhost:3789
