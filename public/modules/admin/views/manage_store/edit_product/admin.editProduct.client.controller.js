'use strict';

(function () {

  function editProductController(scope, state, stateParams, Products, AppState) {

    var self = this;

    self.product = AppState.getActiveProduct();

    // Update existing Product
    self.update = function() {
      var product = self.product ;

      product.$update(function() {
        AppState.setActiveProduct({});
        state.go('viewProduct', {productId: product._id});
      }, function(errorResponse) {
        scope.error = errorResponse.data.message;
      });
    };

  }

  angular.module('admin')
    .controller('editProductController', ['$scope','$state','$stateParams','Products','AppStateService', editProductController])

}());