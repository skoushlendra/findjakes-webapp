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