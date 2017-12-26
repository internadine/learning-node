var express = require("express"); 
var app = express(); 
var request = require("request"); 

app.set("view engine", "ejs"); 

app.get("/", function(req, res){
    res.render("search"); 
});


app.get("/results", function(req,res){
    var query= req.query.movie_keyword;
    request("http://www.omdbapi.com/?s="+ query +"&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("results", {parsedData: parsedData}); 
        }
    });
});


app.listen(3000, function(){
    console.log("movie app has started");
});