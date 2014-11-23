'use strict';

(function () {

  function editProductController(scope, state, stateParams, Products, AppState, AppData) {

    var self = this;

    self.product = AppState.getActiveProduct();

    self.colors = [];
    self.categories = [];
    self.sizes = [];

    /**
     * TODO: handle errors here once we have the logger ready
     */
    AppData.getCategories()
      .success(function(data, status) {
        self.categories = data;
      });
    AppData.getColors()
      .success(function(data, status) {
        self.colors = data;
      });
    AppData.getSizes()
      .success(function(data, status) {
        self.sizes = data;
      });


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