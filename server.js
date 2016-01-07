process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log("start");

var config = require('./config/config'),
	mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose(),
	app = express(),
	passport = passport();

//app.listen((process.env.PORT || 5000));
app.listen(config.port);
console.log("process.env.PORT: "+process.env.PORT);

module.exports = app;
console.log("skoushlendra");
console.log(process.env.NODE_ENV + ' server running at http://mean-mvc.heroku.com:' + config.port);