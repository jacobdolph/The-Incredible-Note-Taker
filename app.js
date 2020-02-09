const http = require("http")
const express = require("express");
const util = require("util");
const fs = require("util");
const path = require("path");
//assign the express library to the variable "app"
var app = express();
//port to 8080
var PORT = process.env.PORT || 8080;
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routes to api an html paths
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);




app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
