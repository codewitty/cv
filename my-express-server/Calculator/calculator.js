const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    res.send("Thanks for sending that");
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
