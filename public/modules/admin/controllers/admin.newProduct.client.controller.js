'use strict';


(function () {

  function newProductController(state, scope, Products, Authentication, AppState) {

    var self = this;

    self.authentication = Authentication;

    self.newProduct = AppState.newProduct();

    // Create new Product
    self.create = function() {
      // Create new Product object
      var product = new Products ({
        title: self.newProduct.title,
        shortDescription: self.newProduct.shortDescription,
        fullDescription: self.newProduct.fullDescription,
        colors: self.newProduct.colors,
        sizes: self.newProduct.sizes,
        price: self.newProduct.price,
        mainImage: self.newProduct.mainImage,
        images: self.newProduct.images,
        categories: self.newProduct.categories,
        active: self.newProduct.active
      });

      // Redirect after save
      product.$save(function(response) {

        state.go('#!/products/' + response._id);

        // Clear form fields
        self.newProduct= '';
      }, function(errorResponse) {
        scope.error = errorResponse.data.message;
      });
    };


  }

  angular.module('admin')
    .controller('newProductController', ['$state', '$scope', 'Products', 'Authentication', 'AppStateService', newProductController])

}());


