var Comment = require('../models/Comment');

module.exports = {

	get: function(params, isRaw) {
		return new Promise(function(resolve, reject) {
			Comment.find(params, function(err, comments) {
				if (err) {
					reject(err);
					return;
				}

				if (isRaw) {
					resolve(comments);

				} else {
					var list = [];

					comments.forEach(function(comment){
						list.push(comment.summary());
					});

					resolve(list);
				}

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

				if (comment == null) {
					reject(new Error(err));
					return;
				}

				if (isRaw) {
					resolve(comment);

				} else {
					resolve(comment.summary());
				}

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

				if (isRaw) {
					resolve(comment);

				} else {
					resolve(comment.summary());
				}

			});
		});
	}

}