var FindJakes = require('mongoose').model('FindJakes'),
	passport = require('passport');

exports.list = function(req, res, next) {
	FindJakes.find({}, function(err, findjakes) {
		if (err) {
			return next(err);
		}
		else {
			res.json(findjakes);
		}
	});
};
/*
exports.read = function(req, res) {
	res.json(req.user);
};

exports.userByID = function(req, res, next, id) {
	User.findOne({
			_id: id
		}, 
		function(err, user) {
			if (err) {
				return next(err);
			}
			else {
				req.user = user;
				next();
			}
		}
	);
};
*/