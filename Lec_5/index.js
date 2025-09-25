const express = require('express');
const path = require('path');

const app = express();


const blogs = [{
    id: 1,
    author: "Samarth",
    comment: "haan meri jaan!!!"
},
{
    id: 2,
    author: "Arun",
    comment: "Chalaa jaa bsdke!!!"
},
{
    id: 3,
    author: "Aman",
    comment: "Level sabke niklenge!!!"
}];


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));
let password = 800;
app.use((req, res, next) => {
    if (password === 800) {
        next();
    }
    else {
        res.send("Sorry nahi ho payega! Password ko 800 set kro...")
    }
})


app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello From route route..')
})


//CREATE
app.get('/blogs/new', (req, res) => {
    res.render('blogs/new')
});
app.post('/blogs', (req, res) => {
    let { author, comment } = req.body;
    blogs.push({ id: blogs.length + 1, author, comment })
    // res.send("blog created successfully")
    res.redirect('/blogs')
});


//READ
app.get('/blogs', (req, res) => {
    res.render('blogs/index', { blogs })
})


app.listen(8080, () => {
    console.log(`Server connected successfully at port: 8080`);

})