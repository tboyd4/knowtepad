const express = require("express");
const path = require("path");
const fs = require("fs");

let dbArray = require('./db/db.json');



const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


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
  newJson = req.body;
  newJson.id = Math.floor(Math.random() * 10000000000000000);
  dbArray.push(newJson);
  res.json(newJson);
  fs.writeFileSync('./db/db.json', JSON.stringify(dbArray), (err) => {
    if (err) throw err;
    console.log("Write Status: Success")
  })
  res.end();
});

app.delete('/api/notes/:id', function (req, res) {
  res.send('Got a DELETE request for id ' + req.params.id);
  
  let tempArray = [];

  dbArray.map(e => {
    if (e.id != req.params.id) {
      tempArray.push(e)
    }
  })

  dbArray = tempArray;

  fs.writeFileSync('./db/db.json', JSON.stringify(dbArray), (err) => {
    if (err) throw err;
    console.log("Write Status: Success")
  })
  res.end();
})

app.listen(PORT, () => {
  console.log("Successfully listening on port : " + PORT);
});
