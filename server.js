const express = require('express');
const path = require('path');

const app = express();


const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(PORT, () => {
    console.log("Successfully listening on port : " + PORT);
})