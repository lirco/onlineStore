'use strict';

(function () {

  function editProductController(state, stateParams, Products) {

    var self = this;

    self.product = Products.get({
      productId: stateParams.productId
    });

    // Update existing Product
    self.update = function() {
      var product = self.product ;

      product.$update(function() {
        state.go('products/' + product._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

  }

  angular.module('admin')
    .controller('editProductController', ['$state','$stateParams','Products', editProductController])

}());