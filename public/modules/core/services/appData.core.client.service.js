
(function () {

  /**
   This service is temporally holding some app global data (hard-coded),
   Which later will be fetched from the server.
   */
  function AppDataFactory() {

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

    return {
      getCategories: function() {
        return categories;
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
    .factory('AppDataFactory', [AppDataFactory])

}());