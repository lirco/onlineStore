'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var products = require('../../app/controllers/products');

	// Products Routes
	app.route('/products')
		.get(products.list)
		.post(users.requiresLogin, users.hasAuthorization('admin'), products.create);

	app.route('/products/:productId')
		.get(products.read)
		.put(users.requiresLogin, users.hasAuthorization('admin'), products.update)
		.delete(users.requiresLogin, users.hasAuthorization('admin'), products.delete);

	// Finish by binding the Product middleware
	app.param('productId', products.productByID);
};