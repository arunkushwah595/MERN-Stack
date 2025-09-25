const express = require('express');
const path = require('path');
var methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid');

const app = express();


let blogs = [{
    id: uuidv4(),
    author: "Samarth",
    comment: "haan meri jaan!!!"
},
{
    id: uuidv4(),
    author: "Arun",
    comment: "Chalaa jaa bsdke!!!"
},
{
    id: uuidv4(),
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
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
    res.send('Hello From route route..')
})


//CREATE
app.get('/blogs/new', (req, res) => {
    res.render('blogs/new')
});
app.post('/blogs', (req, res) => {
    let { author, comment } = req.body;
    blogs.push({ id: uuidv4(), author, comment })
    // res.send("blog created successfully")
    res.redirect('/blogs')
});


//READ
app.get('/blogs', (req, res) => {
    res.render('blogs/index', { blogs })
})


// Particular Blog
app.get('/blogs/:idd', (req, res) => {
    let { idd } = req.params;
    let foundBlog = blogs.find((blog) => blog.id == idd); // idd is in string that's why we use '=='
    res.render('blogs/show', { foundBlog });
})

// Update
app.get('/blogs/:idd/edit', (req, res) => {
    let { idd } = req.params;
    let foundBlog = blogs.find((blog) => blog.id == idd);
    res.render('blogs/edit', { foundBlog });
})
app.patch('/blogs/:idd', (req, res) => {
    let { idd } = req.params;
    let foundBlog = blogs.find((blog) => blog.id == idd);
    let { author, comment } = req.body;
    foundBlog.author=author;
    foundBlog.comment=comment;
    res.redirect('/blogs')
})



// DELETE
app.delete("/blogs/:idd", (req, res) => {
    let { idd } = req.params;
    let newArray = blogs.filter((blog) => blog.id != idd);
    blogs = newArray;
    res.redirect("/blogs");
});



app.listen(8080, () => {
    console.log(`Server connected successfully at port: 8080`);

})