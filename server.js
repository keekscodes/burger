var express = require("express")
var methodOverride = require("method-override")

var app = express()

var PORT = process.env.PORT || 3000;

// Serve static content 
app.use(express.static(process.cwd() + "/public"));

app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use("/", routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});