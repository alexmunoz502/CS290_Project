// ==============================
// Alex Munoz
// CS_290: Web Development
// Website Project
// ==============================

// Constants
var PORT = 3000;

// Import dependencies
var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

// Initialize the application
var app = express();

// Set the view engine and server port for the application to use
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', PORT);

// Middleware function to use static files (for css styling)
app.use(express.static("views"));

// Middleware functions to support POST requests
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Request Handling
// GET Home page (Default)
app.get('/',function(req,res){
    res.render('home');
});