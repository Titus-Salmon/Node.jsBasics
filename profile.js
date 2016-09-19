//problem: develop simple way to look at user's badge count and javascript points
//solution: use Node.js API to retrieve profile info and print

//could use var (variable) here instead of const (constant), but if constant can be used (i.e., the variable never changes), using const is apparently more efficient.
const https = require('https');


//print out message

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badges and " + points + " JavaScript points ";
	console.log(message);
}


//print out error message(s)
function printError(WeCallItErrorObject){
	console.error(WeCallItErrorObject.message);
}

function getProfile(username) {
	//connect to API URL (https://teamtreehouse.com/username.json)
	var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
		var body = "";

		//Read data from response
		response.on('data', function (chunk) {
			body += chunk;
		});
		response.on('end', function () {
			if(response.statusCode === 200) {
				try {
					//Parse data
					var profile = JSON.parse(body);
					
					//Print data
					printMessage(username, profile.badges.length, profile.points.JavaScript);
				} catch(could_also_just_be_called_WeCallItErrorObject) {
					//Parse Error
					printError(could_also_just_be_called_WeCallItErrorObject);
				}
			} else {
				//Status Code Error
				printError({message: "Error getting profile for " + username + ". (" + [response.statusCode] + ")"});
			}
		//console.dir(profile);
		});	
	});

	//Connection Error
	request.on('seems_useless', printError);
}

module.exports.get = getProfile;