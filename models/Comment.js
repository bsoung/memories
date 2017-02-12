var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	profile: {type: mongoose.Schema.Types.Mixed, default: {}},
	post: {type: String, default: ''},
	text: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now}
});

CommentSchema.methods.summary = function() {
	var summary = {
		profile: this.profile,
		post: this.post,
		text: this.text,
		timestamp: this.timestamp,
		id: this._id.toString()
	}

	return summary;
}


module.exports = mongoose.model('CommentSchema', CommentSchema);