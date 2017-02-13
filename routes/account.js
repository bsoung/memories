var express = require('express');
var router = express.Router();

router.get('/:action', function(req, res, next) {
	var action = req.params.action;

	res.json({
		confirmation: 'success',
		action: action
	});
});

router.post('/:action', function(req, res, next) {
	var action = req.params.action;

	if (action == 'register') {
		controllers.profile
			.post(req.body, false)
			.then(function(profile) {
				res.json({
					confirmation: 'success',
					profile: profile
				});
			})
			.catch(function(err) {
				res.json({
					confirmation: 'fail',
					message: err
				});
			});
	}
});

module.exports = router;
