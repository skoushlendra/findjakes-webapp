var findjakes = require('../../app/controllers/findjakes.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	app.route('/findjakes').get(findjakes.list);
	app.route('/findjakes/:filter').get(findjakes.listWithFilter);
};
