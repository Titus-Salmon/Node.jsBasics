var profile = require("./profile.js");

//console.dir(process.argv);

var users = process.argv.slice(2);

users.forEach(profile.get);