var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    expressSanitzer = require("express-sanitizer"), 
    mongoose = require("mongoose");


// App Config


mongoose.connect('mongodb://localhost:27017/blog_app', {
    useMongoClient: true,
});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride("_method"));
app.use(expressSanitzer()); 

// Mongoose Config

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

var Blog = mongoose.model("Blog", blogSchema);

// Root Route

app.get("/", function (req, res) {
    res.redirect("/blogs");
});


// Liste all Blogs

app.get("/blogs", function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log("Error!");
        } else {
            res.render("index", {
                blogs: blogs
            });
        }
    });
});

// Show new Blog Form

app.get("/blogs/new", function (req, res) {
    res.render("new");
});


// Create new Blog

app.post("/blogs", function (req, res) {
    //create blogpost
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function (err, newBlog) {
        if (err) {
            console.render("new");
        } else {
            res.redirect("/blogs");
        }
    });

});

// Show One Blog

app.get("/blogs/:id", function (req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {
                blog: blog
            });
        }
    });
});

// Edit One Blog

app.get("/blogs/:id/edit", function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", {
                blog: foundBlog
            });
        }
    });
});

// Update one Blog

app.put("/blogs/:id", function (req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
        if(err){
            res.redirect("/blogs"); 
        }    else {
            res.redirect("/blogs/" + req.params.id); 
        }
    });
});

// Delete one Blog

app.delete("/blogs/:id", function(req, res){
    Blog.findOneAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
});

app.listen(3000, function () {
    console.log("Blog App is running");
});