var express = require("express")
var exphbs = require("express-handlebars")
var routes = require("./controllers/burgers_controller");

var methodOverride = require("method-override")

var path = require("path");


var app = express()

var PORT = process.env.PORT || 3000;

// Serve static content 
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});