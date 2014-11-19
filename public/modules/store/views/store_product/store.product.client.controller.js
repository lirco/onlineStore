'use strict';

(function () {

  function storeProductController(stateParams, Products, AppState) {

    var self = this;

//    self.product = Products.get({
//      productId: stateParams.productId
//    });

    self.product = AppState.getActiveProduct();

    self.mainImage = self.product.mainImage;

    self.displayImage = function(image) {
      self.mainImage = image;
    };

  }

  angular.module('store')
    .controller('storeProductController', ['$stateParams','Products', 'AppStateService', storeProductController])

}());