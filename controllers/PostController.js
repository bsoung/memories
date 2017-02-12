var Post = require('../models/Post');

module.exports = {

	get: function(params, isRaw) {
		return new Promise(function(resolve, reject) {
			Post.find(params, function(err, posts) {
				if (err) {
					reject(err);
					return;
				}

				resolve(posts);
			});
		});
	},

	getById: function(id, isRaw) {
		return new Promise(function(resolve, reject) {
			Post.findById(id, function(err, post) {
				if (err) {
					reject(err);
					return;
				}

				resolve(post);
			});
		});
	},

	post: function(params, isRaw) {
		return new Promise(function(resolve, reject) {
			Post.create(params, function(err, post) {
				if (err) {
					reject(err);
					return;
				}

				resolve(post);
			});
		});
	}

}