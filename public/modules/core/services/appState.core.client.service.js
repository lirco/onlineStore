
(function () {


  function AppStateService() {

    /**
     * images are temporally hard-coded
     *
     * @type {string}
     */
    var mainImage = 'http://images.fineartamerica.com/images-medium-large/surfer-bus-nick-diemel.jpg';

    var images = [
      'http://images.fineartamerica.com/images-medium-large/surfer-bus-nick-diemel.jpg',
      'http://www.soflosurfschool.com/images/IMG_9461.jpg',
      'http://www.tjeys.net/image/surfboard/dbfunturquis.jpg',
      'http://www.surfcupe.com.br/images/gallery/big/700086d9e46682729d6666fb56a3f81c.jpg'
    ];

    var newProduct = {
      title: '',
      shortDescription: '',
      fullDescription: '',
      colors: [],
      sizes: [],
      price: '',
      mainImage: mainImage,
      images: images,
      categories: [],
      active: true
    };

    /**
     * active product for editing products
     *
     * @type {{}}
     */
    var activeProduct = {};


    //================================
    //==========Methods===============
    //================================

    this.getNewProduct = function() {
      return Object.create(newProduct);
    };

    this.setActiveProduct = function(product) {
      activeProduct = product;
      return activeProduct;
    };

    this.getActiveProduct = function() {
      return activeProduct;
    };

  }

  angular.module('core')
    .service('AppStateService', [AppStateService])

}());