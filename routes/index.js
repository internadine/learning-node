var express = require("express"); 
var app = express(); 

app.get("/", function(req, res){
    res.send("HI there, welcome to my assignment!"); 
}); 
app.get("/speak/:pet", function(req, res){
    var animal = req.params.pet; 
    var sounds = {
        cow: "mooh", 
        cat: "I hate you human", 
        dog: "woof woof", 
        goldfish:"...."
    }
    var sound = sounds[animal]; 
    res.send("The " + animal + " says " +sound); 
}); 

app.get("/repeat/:greating/:number", function(req, res){
    var greating = req.params.greating; 
    var times = Number(req.params.number); 
    var result = ""; 
    for (var i=0; i<=times; i++){
        result +=greating + " "; 
    }; 
    res.send(result); 
}); 

app.get("*", function(req, res){
    res.send("There is nothing here, what are you doing with your life?"); 
}); 

app.listen(3000, function(){
    console.log("The pet app has started!")
}); 