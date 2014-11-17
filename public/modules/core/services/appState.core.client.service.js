
(function () {

  /**
   This service is temporally holding some app global data (hard-coded),
   Which later will be fetched from the server.
   */
  function AppStateService() {

    var self = this;

    self.newProduct = {
      title: '',
      shortDescription: '',
      fullDescription: '',
      colors: self.colors,
      sizes: self.sizes,
      price: '',
      mainImage: self.mainImage,
      images: self.images,
      categories: self.categories,
      active: true
    };

    self.categories = [
      'Men',
      'Women',
      'Surfboards',
      'Wetsuites',
      'Fins',
      'Accessories',
      'Leash'
    ];

    self.colors = [
      'Black',
      'White',
      'Brown',
      'Red',
      'Green',
      'Blue'
    ];

    self.sizes = [
      'S',
      'M',
      'L',
      'XL'
    ];

    self.mainImage = 'http://images.fineartamerica.com/images-medium-large/surfer-bus-nick-diemel.jpg';

    self.images = [
      'http://images.fineartamerica.com/images-medium-large/surfer-bus-nick-diemel.jpg',
      'http://www.soflosurfschool.com/images/IMG_9461.jpg',
      'http://www.tjeys.net/image/surfboard/dbfunturquis.jpg',
      'http://www.surfcupe.com.br/images/gallery/big/700086d9e46682729d6666fb56a3f81c.jpg'
    ];

  }

  angular.module('core')
    .service('AppStateService', [AppStateService])

}());