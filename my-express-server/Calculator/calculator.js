const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello World");
});

app.get("/about", function(req, res){
    res.send("My name is Auhsoj Semog");
});

app.get("/resume", function(req, res){
    res.send("Find my resume below:");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
