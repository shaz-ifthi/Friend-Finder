// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {

	//home.html
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	//survey.html
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};