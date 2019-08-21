
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/familyCircle", { useNewUrlParser: true });

// When the server starts, create and save a new user to the db
// The "unique" rule in both model's schemas will prevent duplicate documents from being 
// added to the server
db.user.create({ email: "sampleName@aoll.com" })
  .then(function(dbuser) {
    // If saved successfully, print the new Library document to the console
    console.log(dbuser);
  })
  .catch(function(err) {
    // If an error occurs, print it to the console
    console.log(err.message);
  });

// Routes

// POST route for saving a new school to the db and associating it with a user
app.post("/submit", function(req, res) {
  // Create a new school in the database
  db.school.create(req.body)
    .then(function(dbschool) {
      // If a school was created successfully, find one user (there's only one) and push the new school's _id to the user's `books` array
      // { new: true } tells the query that we want it to return the updated Library -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.school.findOneAndUpdate({}, { $push: { user: dbuser.email } }, { new: true });
    })
    .then(function(dbschool) {
      // If the school was updated successfully, send it back to the client
      res.json(dbschool);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for getting all users from the db
app.get("/user", function(req, res) {
  // Using our user model, "find" every user in our db
  db.user.find({})
    .then(function(dbusers) {
      // If any users are found, send them to the client
      res.json(dbusers);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for getting all schools from the db
app.get("/schools", function(req, res) {
  // Using our school model, "find" every school in our db
  db.school.find({})
    .then(function(dbLibrary) {
      // If any school are found, send them to the client
      res.json(dbschool);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route to see what schools looks like WITH familyCircle
app.get("/familyCircle", function(req, res) {
  // Using our school model, "find" every school in our db and populate them with any associated users
  db.school.find({})
    // Specify that we want to populate the retrieved school with any associated users
    .populate("user")
    .then(function(dbschool) {
      // If any school is found, send them to the client with any associated users
      res.json(dbschool);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});