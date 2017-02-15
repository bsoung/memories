var Post = require('../models/Post');

module.exports = {

	get: function(params, isRaw) {
		return new Promise(function(resolve, reject) {
			// check the params for lat and lng
			if (params.lat != null && params.lng != null) {
				// geo spatial query:
				
			}


			Post.find(params, function(err, posts) {
				if (err) {
					reject(err);
					return;
				}

				if (isRaw) {
					resolve(posts);

				} else {
					var list = [];

					posts.forEach(function(post) {
						list.push(post.summary());
					});

					resolve(list);
				}
				
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

				if (post == null) {
					reject(new Error(err));
					return;
				}

				if (isRaw) {
					resolve(post);
				} else {
					resolve(post.summary());
				}

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

				if (isRaw) {
					resolve(post);
				} else {
					resolve(post.summary());
				}

			});
		});
	}

}