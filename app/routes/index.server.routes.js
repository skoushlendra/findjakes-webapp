module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.all('/', function(req, res, next) {
    	res.header("Access-Control-Allow-Origin", "*");
    	res.header("Access-Control-Allow-Headers", "X-Requested-With");
    	console.log("Access controls added ");
    	next();
    });
    app.get('/', index.renderIndex);
    app.get('/our-story', index.renderOurStory);
    app.get('/map', index.renderMap);
    app.get('/webservice', index.webservice);
};

/*
module.exports = function(app) {
	var findjakes = require('../../app/controllers/findjakes.server.controller');
	app.route('/findjakes').get(findjakes.list);
};
*/
