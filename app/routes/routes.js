var items = require('../../app/controllers/Items.Controller');

module.exports = function(app)
{
	app.get('/items/AllItems',items.getAll);
	app.get('/saveNewItem',items.saveNewItem);
	app.get('/search',items.search);


};
