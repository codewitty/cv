const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=9e45703d4ebce98a50d6970fda54c452"
    https.get(url, function(response){
        console.log(response);
    })

    res.send("Server works. Hallelujah!!")
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
});
