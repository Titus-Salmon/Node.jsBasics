//problem: develop simple way to look at user's badge count and javascript points
//solution: use Node.js API to retrieve profile info and print

//could use var (variable) here instead of const (constant), but if constant can be used (i.e., the variable never changes), using const is apparently more efficient.
const https = require('https');
var username = "yourTreehouseUsername";

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badges and " + points + " JavaScript points ";
	console.log(message);
}


//connect to API URL (https://teamtreehouse.com/username.json)
var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
	var body = "";
	
	//Read data from response
	response.on('data', function (chunk) {
		body += chunk;
	});
	response.on('end', function () {
		var profile = JSON.parse(body);
		printMessage(username, profile.badges.length, profile.points.JavaScript)
		console.dir(profile);
	});
	
	//Parse data
	//Print data
});




////connect to API URL (https://teamtreehouse.com/username.json)
//var request = https.get("https://teamtreehouse.com/" + username + ".json", (response) => {
//  console.log('TESTstatusCode:', response.statusCode);
//  console.log('TESTheaders:', response.headers);
//	
////Read data from response
//
//  response.on('data', (callmewhatever) => {
//	//stdout = 'standard output'. process.stdout.write outputs user data associated with treehouse profile for particular user specified in var username. process.stdout.write similar to console.log, but in this case, console.log only returns a long list of numerical buffer values instead of a long string  of user data.
//    process.stdout.write(callmewhatever);
//	printMessage(username);
//  });
//
//}).on('error', (errorVariable) => {
//  console.error(errorVariable);
//});
//
//
////	//Parse data
////	//Print data





