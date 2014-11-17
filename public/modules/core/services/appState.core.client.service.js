
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
      colors: colors,
      sizes: sizes,
      price: '',
      mainImage: mainImage,
      images: images,
      categories: categories,
      active: true

    };

    return {
      newProduct: function() {
        return newProduct;
      },
      categories: function() {
        return categories;
      }
    }

  }

  angular.module('core')
    .factory('AppStateService', [AppStateService])

}());