var mongoose = require('mongoose')

var itemSchema = new mongoose.Schema(
{
	name: String,
	artworkUrl: String,
	price: Number,
	category: String
});
mongoose.model('Items',itemSchema);