
'use strict';

(function () {

  function storeController(state, AppState, AppData, products) {

    var self = this;

    state.go('store.views');

    /**
     * products and categories here are coming from the resolve on the client route.
     * see store.client.routes
     */

    self.categories = [];

    /**
     * TODO: handle errors here
     */
    AppData.getCategories()
      .success(function(data, status) {
        self.categories = data;
      });

    self.products = products;

    self.productClick = function(product) {
      AppState.setActiveProduct(product);

      //also add here an increment on product views
    };

  }

  angular.module('store')
    .controller('storeController', ['$state','AppStateService', 'AppDataFactory', 'products', storeController])

}());