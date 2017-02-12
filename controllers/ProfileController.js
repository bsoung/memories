var Profile = require('../models/Profile');

module.exports = {

	get: function(params, isRaw) {
		return new Promise(function(resolve, reject) {
			Profile.find(params, function(err, profiles) {
				if (err) {
					reject(err);
					return;
				}

				resolve(profiles);
			});
		});
	},

	getById: function(id, isRaw) {
		return new Promise(function(resolve, reject) {
			Profile.findById(id, function(err, profile) {
				if (err) {
					reject(err);
					return;
				}

				resolve(profile);
			});
		});
	},

	post: function(params, isRaw) {
		return new Promise(function(resolve, reject) {
			Profile.create(params, function(err, profile) {
				if (err) {
					reject(err);
					return;
				}

				resolve(profile);
			});
		});
	}

}