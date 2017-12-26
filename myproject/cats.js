var mongoose = require("mongoose");
var Promise = require('mpromise');

mongoose.connect('mongodb://localhost/cat_app', {
    useMongoClient: true
});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


/* var george = new Cat({
    name: "Mrs Norries",
    age: 7,
    temperament: "Evil"
}); 

george.save(function (err, cats) {
    if (err) {
        console.log("Something went wrong!");
    } else {
        console.log("We saved a cat to the db: ");
        console.log(cats);
    }
});  */

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland" 
},function(err, cat){
        if(err){
            console.log("oh no!");
        } else{
            console.log(cat); 
        }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no, Error!"); 
    } else{
        console.log("All the cats...");
        console.log(cats);
    }
});