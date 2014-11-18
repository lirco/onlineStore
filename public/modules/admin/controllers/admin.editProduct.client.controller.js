'use strict';

(function () {

  function editProductController(scope, state, stateParams, Products, AppState) {

    var self = this;

    self.product = AppState.getActiveProduct();

    console.log('***************************************');
    console.log(self.product);
    console.log('***************************************');

//    self.product = Products.get({
//      productId: stateParams.productId
//    });

    // Update existing Product
    self.update = function() {
      var product = self.product ;

      product.$update(function() {
        state.go('products/' + product._id);
      }, function(errorResponse) {
        scope.error = errorResponse.data.message;
      });
    };

  }

  angular.module('admin')
    .controller('editProductController', ['$scope','$state','$stateParams','Products','AppStateService', editProductController])

}());