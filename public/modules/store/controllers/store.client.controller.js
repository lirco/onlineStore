
'use strict';

(function () {

  function storeController(state, products, categories) {

    var self = this;

    state.go('store.views');

    /**
     * products and categories here are coming from the resolve on the client route.
     * see store.client.routes
     */
    self.products = products;
    self.categories = categories;

  }

  angular.module('store')
    .controller('storeController', ['$state','products','categories', storeController])

}());