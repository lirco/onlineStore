'use strict';

(function () {

  function manageProductsController(products) {

    var self = this;

    self.products = products;

    // Remove existing Product
    self.remove = function( product ) {
      if ( product ) { product.$remove();

        for (var i in self.products ) {
          if (self.products [i] === product ) {
            self.products.splice(i, 1);
          }
        }
      } else {
        self.product.$remove(function() {
          state.go('admin.manageStore.manageProducts');
        });
      }
    };

  }


  angular.module('admin')
    .controller('manageProductsController', ['products', manageProductsController])

}());