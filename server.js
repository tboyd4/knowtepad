const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser');


const app = express();


const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });

  app.post("/api/notes", (req, res) => {
    res.write(req.body);
    res.end();
  });

app.listen(PORT, () => {
  console.log("Successfully listening on port : " + PORT);
});
