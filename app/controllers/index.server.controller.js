exports.renderIndex = function(req, res) {
    res.render('index', {
    	title: 'MEAN MVC',
    	user: req.user ? req.user.username : ''
    });
};
exports.renderOurStory = function(req, res) {
    res.render('our-story', {
    	title: 'MEAN MVC',
    	user: req.user ? req.user.username : ''
    });
};
exports.webservice = function(req, res) {
    res.render('webservice', {
    	title: 'Findjakes locations data'
    });
};
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