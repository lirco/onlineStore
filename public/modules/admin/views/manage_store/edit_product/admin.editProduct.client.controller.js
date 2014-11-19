'use strict';

(function () {

  function editProductController(scope, state, stateParams, Products, AppState, AppData) {

    var self = this;

    self.product = AppState.getActiveProduct();

    self.colors = AppData.getColors();
    self.sizes = AppData.getSizes();
    self.categories = AppData.getCategories();


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
    .controller('editProductController', ['$scope','$state','$stateParams','Products','AppStateService','AppDataFactory', editProductController])

}());