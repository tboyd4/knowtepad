const express = require('express');

const app = express();

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send('HELLO');
})

app.listen(PORT, () => {
    console.log("Successfully listening on port : " + PORT);
})