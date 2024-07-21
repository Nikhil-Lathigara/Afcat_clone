const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// the name of the folder which contains .hbs file should be named as "views" only.

// hbs : Handlebars
// to set the view engine
app.set("view engine", "hbs");
app.use(express.static(staticPath));


// partials are used so that we dont have to repeat same code everywhere
// register partials

hbs.registerPartials(partialsPath);

//if we want to change the name of "views" folder we can change it using app.set

app.set("views", templatePath);

// template engine route
// we have to use "render" in place of "send" when we use template engines
app.get("/", (req, res) => {
    res.render("index");
});



//this should be at the bottom always
app.get('*', (req, res) => {
    res.render("404", {
        errorcomment: "OOPS!!! Page NOT FOUND"
    })
})

// Start the server
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});