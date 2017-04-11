var Items = require('mongoose').model('Items');
exports.getAll = function(req,res,next) {
	Items.find({}, function(err, items) {
		res.json(items);
	});
}

// exports.saveNewItem = function(req,res,next) {
// 	Items
// }

exports.saveNewItem = function(req,res,next) {
	var name = req.query.name;
	var price = req.query.price;

	var item = new Items({name: name, price: price});
	item.save(function (err) {
		if (err) return handleError(err);
		res.send('successful');
	})

}

exports.search = function(req,res,next) {
	var name = req.query.name;
	Items.find({name: name}, function(err, items) {
		res.json(items);
	});
}


