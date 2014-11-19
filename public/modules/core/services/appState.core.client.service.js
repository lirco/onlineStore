
(function () {

  /**
   This service is temporally holding some app global data (hard-coded),
   Which later will be fetched from the server.
   */
  function AppStateService() {

    var categories = [
      'Men',
      'Women',
      'Surfboards',
      'Wetsuites',
      'Fins',
      'Accessories',
      'Leash'
    ];

    var colors = [
      'Black',
      'White',
      'Brown',
      'Red',
      'Green',
      'Blue'
    ];

    var sizes = [
      'S',
      'M',
      'L',
      'XL'
    ];

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

    /**
     * instance of newProduct.
     * temporary object for building purpose
     *
     * @type {{title: string, shortDescription: string, fullDescription: string, colors: string[], sizes: string[], price: string, mainImage: string, images: string[], categories: string[], active: boolean}}
     */
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

    return {
      getNewProduct: function() {
        return newProduct;
      },
      getCategories: function() {
        return categories;
      },
      setActiveProduct: function(product) {
        activeProduct = product;
        return activeProduct;
      },
      getActiveProduct: function() {
        return activeProduct;
      },
      getColors: function() {
        return colors;
      },
      getSizes: function() {
        return sizes;
      }
    }

  }

  angular.module('core')
    .factory('AppStateService', [AppStateService])

}());