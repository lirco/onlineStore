'use strict';

//Products service used to communicate Products REST endpoints
angular.module('core').factory('Products', ['$resource',
	function($resource) {
		return $resource('products/:productId', { productId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);