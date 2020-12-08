const express = require('express');
const app = express();
const path = require('path');

// Finding  the view folder directory
const viewsPath = path.join(__dirname, "/views");

// setting node.js view engine to use handlebars(hbs)files
app.set('view engine', 'hbs');

//Setting the Views from HBS to come from our views path variable
app.set('views', viewsPath);

//Finding the public folder directory
const publicDirectory = path.join(__dirname, '/public');

//Setting express to use the static files from public Directory, files like CSS or JS
app.use(express.static(publicDirectory));

// this is the path on the browser
app.get("/", (req, res) => {
// this is the name of the file in the views folder
    res.render("index");
});

// this is the path on the browser
app.get("/about", (req, res) => {
    // this is the name of the file in the views folder
    res.render("about");
});

app.get("*", (req, res) => {
    res.send("<h1> Sorry that page does not exist </h1>");
});

app.listen(5000, () => {
    console.log("Server is listening on port 3000")
})