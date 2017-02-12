var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	profile: {type: mongoose.Schema.Types.Mixed, default: {}},
	image: {type: String, default: ''},
	caption: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('PostSchema', PostSchema);