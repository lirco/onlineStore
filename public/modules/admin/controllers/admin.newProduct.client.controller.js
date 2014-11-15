'use strict';


(function () {

  function newProductController(state, scope, Products, Authentication) {

    var self = this;

    self.authentication = Authentication;

    self.message = 'hi'

    self.newProduct = {};

    // Create new Product
    self.create = function() {
      // Create new Product object
      var product = new Products ({
        title: self.newProduct.title
      });

      // Redirect after save
      product.$save(function(response) {
        console.log('***************************************');
        console.log('the new product is '+ response);
        console.log('***************************************');
//        state.go('products/' + response._id);

        // Clear form fields
        self.newProduct.name = '';
      }, function(errorResponse) {
        scope.error = errorResponse.data.message;
      });
    };


  }

  angular.module('admin')
    .controller('newProductController', ['$state', '$scope', 'Products', 'Authentication', newProductController])

}());


