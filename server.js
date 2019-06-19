let express = require("express");
let logger = require("morgan");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let exphbs = require("express-handlebars");

// initialize Express
let app = express();

// set up handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// morgan logger for logging requests
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

// serve the public folder as a static directory
app.use(express.static("public"));

//let url = "";

//connect to MongoDB
mongoose.connect("mongodb://localhost/newsroll", { useNewUrlParser: true });
let db = mongoose.connection;


let routes = require("./controller/controller.js");
app.use("/", routes);


// localhost port
let port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
