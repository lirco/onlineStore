'use strict';

(function () {

  function storeProductController(stateParams, Products) {

    var self = this;

    self.product = Products.get({
      productId: stateParams.productId
    });

  }

  angular.module('store')
    .controller('storeProductController', ['$stateParams','Products', storeProductController])

}());