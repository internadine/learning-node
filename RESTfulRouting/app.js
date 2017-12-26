var express = require("express"); 
var app = express(); 
var bodyParser = require("body-parser"); 
//var mongoose = require("mongoose"); 

//mongoose.connect("mongodb://localhost/restful_blog_app"); 
app.set("view engine", "ejs"); 
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("blog"); 
});


app.listen(3000, function() {
    console.log("Blog is running like hell"); 
});