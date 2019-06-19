var express = require("express");
var path = require("path");
let logger = require("morgan");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

let axios = require("axios");
let cheerio = require("cheerio");

// require models
let articlesModel = require("./models/articles.js");
let notesModel = require("./models/notes.js");


// a GET route for scraping
app.get("/api/fetch", function(req, res){

  // retrieve the body of the html with axios    
  axios.get("https://www.mprnews.org/environment/").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' is shorthand for cheerio's selector commands
  let $ = cheerio.load(response.data);

  // An empty array for the scraped data
  let results = [];

  // Select elements in the HTML body
  $("article").each(function(i, element) {

    let link = $(element).find("a").attr("href");
    let title = $(element).children().find("h3").text();
    let brief = $(element).children().children().find("p").text();
    // Save the results in an object to push into results array
    results.push({
      link: link,
      title: title,
      brief: brief
    });
  });
  // Log the results after looping through the elements found with cheerio
  console.log(results);
  });
});

// home page
app.get('/', function (req, res) {
});

// saved articles page
app.get('/saved', function (req, res) {
});

// save article to database > change saved field to true
app.put("/api/headlines/:id", function(req, res){
    var saved = req.body.saved == 'true';
    if(saved){
      db.newsroll.updateOne({_id: req.body._id},{$set: {saved:true}}, function(err, result){
        if(err) {console.log(err)} 
        else {return res.send(true)}
      });
    }
});

// delete article from database
app.delete("/api/headlines/:id", function(req, res){
    console.log('reqbody:' + JSON.stringify(req.params.id))
    db.newsroll.deleteOne({_id: req.params.id}, function(err, result){
      if(err) {console.log(err)} 
      else {return res.send(true)}
    });
});

// add note to an article
app.post("/api/notes", function(req, res){
});

// get back notes for a given article
app.get("/api/notes/:id", function(req, res){
});

// clear all articles from database
app.get("/api/clear", function(req, res){
    console.log(req.body);
    db.newsroll.deleteMany({}, function(err, result){
        });
});
