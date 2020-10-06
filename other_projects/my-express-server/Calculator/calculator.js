const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = Number(num1 + num2);
    res.send("Result is : " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = ((weight/(height*height))*703);
    res.send("Your BMI is : " + result);
});

app.get("/about", function(req, res){
    res.send("My name is Auhsoj Semog");
});

app.get("/resume", function(req, res){
    res.send("Find my resume here:");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
