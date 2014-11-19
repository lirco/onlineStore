
'use strict';

(function () {

  function storeController(state, AppState, products, categories) {

    var self = this;

    state.go('store.views');

    /**
     * products and categories here are coming from the resolve on the client route.
     * see store.client.routes
     */
    self.products = products;
    self.categories = categories;

    self.productClick = function(product) {
      AppState.setActiveProduct(product);

      //also add here an increment on product views
    };

  }

  angular.module('store')
    .controller('storeController', ['$state','AppStateService','products','categories', storeController])

}());