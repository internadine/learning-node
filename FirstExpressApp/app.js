var express = require("express"); 
var app = express(); 

app.get("/", function(req, res){
    res.send("Hi there!"); 
} ); 

app.get("/dog", function(req, res){
    res.send("Whohooo!"); 
}); 

app.get("/cat", function(req, res){
    res.send("MEOW!"); 
}); 

app.get("*", function(req, res){
    res.send("hier gibt es nichts zu kaufen"); 
});

app.listen(3000, function(){
    console.log("Serving dog demo on port 3000");
});