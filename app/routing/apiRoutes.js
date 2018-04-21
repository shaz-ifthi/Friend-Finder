
var path = require('path');


var friends = require('../data/friends.js');


module.exports = function(app) {



	app.get('/shaz/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend
	app.post('/shaz/friends', function(req, res) {

		var userInput = req.body;
	

		var userResponses = userInput.scores;


	   // Calculate best match
		var friendName = '';
		var friendImage = '';
		var totalDiff = 300; 

        
		for (var i = 0; i < friends.length; i++) {
		
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
	
			if (diff < totalDiff) {
				

				totalDiff = diff;
				friendName = friends[i].name;
				friendImage = friends[i].photo;
			}
		}

	// add user
		friends.push(userInput);


		res.json({status: 'OK', friendName: friendName, friendImage: friendImage});
	});
};