const express = require('express'); // it returns a function
const app = express();  // instance of your entire application

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to root route.');
});

app.get("/home", (req, res) => {
    res.send('This is the home. <h1>HEADING</h1> <h2>BYE!</h2>')
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
