var express = require("express"); 
var app = express(); 

app.use(express.static("public"));
app.set("view engine", "ejs"); 

app.get("/", function(req, res){
    res.render("home"); 
}); 


app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("home", {thingVar: thing}); 
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "post1", author: "Susi"}, 
        {title: "hello there", author: "Nads"}, 
        {title: "one more", author: "Peter"}, 
        {title: "so much more of that", author: "Hugo"}, 
    ];
    res.render("posts", {posts:posts}); 
}); 





app.listen(3000, function(){
    console.log("our beautiful app is running"); 
}); 