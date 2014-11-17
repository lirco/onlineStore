
(function () {

  function appStateService() {

    /*
    colors, sizes, mainImage, images and categories are temporally hard-coded.
     */
    this.newProduct = {
      title: '',
      shortDescription: '',
      fullDescription: '',
      colors: ['Black', 'White', 'Brown' ,'Red', 'Green', 'Blue'],
      sizes: ['A', 'M', 'L', 'XL'],
      price: '',
      mainImage: '1',
      images: ['1','2'],
      categories: ['Men', 'Women', 'Zombie']
    }

  }

  angular.module('core')
    .service('appStateService', [appStateService])

}());