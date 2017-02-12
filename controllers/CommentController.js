var Comment = require('../models/Comment');

module.exports = {

	get: function(params, isRaw) {
		return new Promise(function(resolve, reject) {
			Comment.find(params, function(err, comments) {
				if (err) {
					reject(err);
					return;
				}

				resolve(comments);
			});
		});
	},

	getById: function(id, isRaw) {
		return new Promise(function(resolve, reject) {
			Comment.findById(id, function(err, comment) {
				if (err) {
					reject(err);
					return;
				}

				resolve(comment);
			});
		});
	},

	post: function(params, isRaw) {
		return new Promise(function(resolve, reject) {
			Comment.create(params, function(err, comment) {
				if (err) {
					reject(err);
					return;
				}

				resolve(comment);
			});
		});
	}

}