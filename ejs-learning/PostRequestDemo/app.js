var express = require("express"); 
var app = express(); 
var parse = require("body-parser");

app.use(parse.urlencoded({extended: true})); 
app.set("view engine", "ejs"); 

var friends = ["Tony", "Mirenda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
    res.render("home"); 
});

app.get("/friends", function(req,res){
    res.render("friends", {friends:friends});

});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend; 
    friends.push(newFriend); 
    res.redirect("/friends");
});




app.listen(3000, function(){
    console.log("here it runs..."); 
});