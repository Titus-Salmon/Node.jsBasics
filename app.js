//problem: develop simple way to look at user's badge count and javascript points
//solution: use Node.js API to retrieve profile info and print

//could use var (variable) here instead of const (constant), but if constant can be used (i.e., the variable never changes), using const is apparently more efficient.
const https = require('https');
var username = "yourUsername";

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badges and " + points + " JavaScript points ";
	console.log(message);
}


//connect to API URL (https://teamtreehouse.com/username.json)

var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
	console.log(response.statusCode);
	//Read data from response
	//Parse data
	//Print data
});

//const https = require('https');
//
//https.get('https://encrypted.google.com/', (res) => {
//  console.log('statusCode:', res.statusCode);
//  console.log('headers:', res.headers);
//
//  res.on('data', (d) => {
//    process.stdout.write(d);
//  });
//
//}).on('error', (e) => {
//  console.error(e);
//});





