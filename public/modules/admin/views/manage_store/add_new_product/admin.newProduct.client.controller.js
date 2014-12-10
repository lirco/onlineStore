'use strict';


(function () {

  function newProductController(state, scope, Products, Authentication, AppState, AppData, FileUploader) {

    var self = this;

    self.authentication = Authentication;

    self.newProduct = AppState.getNewProduct();

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

    self.uploader = new FileUploader({
      url: '/uploadImage'
    });


    // Create new Product
    self.create = function() {
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

        // Clear form fields
//        self.newProduct= AppState.getNewProduct();
//
        state.go('viewProduct', {'productId': response._id});

      }, function(errorResponse) {
        scope.error = errorResponse.data.message;
      });
    };


  }

  angular.module('admin')
    .controller('newProductController', ['$state', '$scope', 'Products', 'Authentication', 'AppStateService','AppDataFactory', 'FileUploader', newProductController])

}());


