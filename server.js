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

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

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

app.get("/api", (req, res) => {
    res.json({
        actor: "Chuck Norris",
        born: "1920",
        joke: "One plus one is three"
    });
});

app.get("/formResults", (req, res) => {
    res.send("trying to get form values");
});

app.post("/formResults", (req, res) => {
    console.log(req.body);
    // res.send("inside formResults via POST method");
    res.render("formResults", {
        email: req.body.userEmail,
        password: req.body.userPassword
    });

});

app.get("/allUsers", (req, res) => {
    const dbUsers = [
        {
            id: 324342234,
            name: "Gary",
            city: "Oslo"
        },
        {
            id: 1234555,
            name: "Mary",
            city: "Paris"
        },
        {
            id: 987563,
            name: "John",
            city: "Madrid"
        }
    ]

    res.render("allUsers", {
        users: dbUsers
    })
});

app.get("/allMovies", (req, res) => {
    const dbMovies  = [
        {
            title: "Enola Holmes",
            actor: "Milly Bobby Brown",
            year: 2020
        },
        {
            title: "Groundhog Day",
            actor: "Bill Murray & Andie MacDowell",
            year: 1993
        },
        {
            title: "RBG",
            actor: "Ruth Bader Ginsberg",
            year: 2018
        }
    ];

    res.render("allMovies", {
        movies: dbMovies
    })
})

app.get("*", (req, res) => {
    res.send("<h1> Sorry that page does not exist </h1>");
});

app.listen(5000, () => {
    console.log("Server is listening on port 3000")
});