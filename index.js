//using expressjs framework as a webserver
var express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));

//This will require sudo permissions
app.listen(80);
