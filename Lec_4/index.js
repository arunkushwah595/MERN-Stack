const express = require('express'); // it returns a function
const path = require('path');
const app = express();  // instance of your entire application

let arr = [10,20,30,40,50];

app.set("view engine", "ejs");
app.set('views', path.join(__dirname,'views'));

app.get('/', (req, res) => {
    res.send('Hello World!!!!    Welcome to root route.');
});

app.get("/home", (req, res) => {
    res.send('This is the home. <h1>HEADING</h1> <h2>BYE!</h2>')
})

app.get("/views",(req,res)=>{
    res.render('index', {arr:arr});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


