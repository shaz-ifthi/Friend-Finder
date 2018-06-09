
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000

// Access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log("http://localhost:"+ PORT);
});