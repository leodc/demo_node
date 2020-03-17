var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path");

app.set("view engine", "ejs");

// get server ips
var os = require('os');
var ifaces = os.networkInterfaces();


app.get("/", function(req, res){
    res.render("index", {networkJson: JSON.stringify(ifaces)} );
});

app.listen(8080, function(){
    console.log("Example app listening on port 8080!")
});
