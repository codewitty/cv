const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    console.log(firstName, lastName, email);

    const data = {
        members: [
        {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
        ]
    }

    const jsonData = JSON.stringify(data);
    const url = "https://us2.api.mailchimp.com/3.0/lists/9e4908dfc6?" 
    const options = { method: "POST", auth: "joshua:6c2627bc9853af41e1946978e0ae26a7-us2" } 
    
    const request = https.request(url, options, function(response){
        response.on("data"), function(data){
            console.log(JSON.parse(data));
        }

        request.write(statusCode);

        request.write(jsonData);

        req.end();

    })
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});


//6c2627bc9853af41e1946978e0ae26a7-us2
//list id
//
