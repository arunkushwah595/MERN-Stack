const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arunkushwah595:Arun595@cluster0.gz0i9pr.mongodb.net/')
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.log("ERROR:", err);
    })
app.get('/', (req, res) => {
    res.send("Welcome")
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`SERVER CONNECTED SUCCESSFULLY AT PORT: ${PORT}`);

})