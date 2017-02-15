var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var bcrypt = require('bcryptjs');

router.get('/:action', function(req, res, next) {
	var action = req.params.action;

	if (action == 'currentuser') {
		if (!req.session) {

			res.json({
				confirmation: 'success',
				user: null
			});

			return;
		}

		if (!req.session.user) {
			res.json({
				confirmation: 'success',
				user: null
			});

			return;
		}

		controllers.profile.getById(req.session.user, false)
			.then(function(user) {
				res.json({
					confirmation: 'success',
					user: user
				});
			})
			.catch(function(err) {
				res.json({
					confirmation: 'fail',
					message: err
				});
			});

	}

	if (action == 'logout') {
		req.session.reset();

		res.json({
			confirmation: 'success'
		});
	}
});

router.post('/:action', function(req, res, next) {
	var action = req.params.action;

	if (action == 'register') {
		controllers.profile
			.post(req.body, false)
			.then(function(profile) {
				// explore json web token later
				req.session.user = profile.id;

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

	if (action == 'login') {
		controllers.profile
		.get({username: req.body.username}, true)
		.then(function(profiles) {
			var profile = profiles[0];

			if (profile.length == 0) {
				res.json({
					confirmation: 'fail',
					message: 'profile not found'
				});

				return;
			}

			// check password
			var isPasswordCorrect = bcrypt.compareSync(req.body.password, profile.password);

			if (isPasswordCorrect == false) {
				res.json({
					confirmation: 'fail',
					message: 'incorrect password'
				});

				return;
			}

			req.session.user = profile._id;

			res.json({
				confirmation: 'success',
				user: profile.summary()
			})
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
