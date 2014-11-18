'use strict';

(function () {

  function manageProductsController(state, products) {

    var self = this;

    self.products = products;

    /**
     * 1. Need to add error handling in case of error
     * 2. Need to add a question "Are you sure"
     *
     * @param product
     */
    self.remove = function(product) {
      if ( product ) { product.$remove();

        console.log('***************************************');
        console.log(product);
        console.log('***************************************');

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

    self.edit = function(product) {
      state.go('/#!/admin/editProduct/' + product._id);
    }

  }


  angular.module('admin')
    .controller('manageProductsController', ['$state','products', manageProductsController])

}());