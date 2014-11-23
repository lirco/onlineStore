
(function () {

  /**
   This service is temporally holding some app global data (hard-coded),
   Which later will be fetched from the server via redisData service
   (Redis needs to be integrated on the server first)

   */
  function AppDataFactory($http) {

    var fetchList = function(listName) {
      return $http.get('/redis/' + listName);
    };

    return {
      getCategories: function() {
        return fetchList('categories')
      },
      getColors: function() {
        return fetchList('colors');
      },
      getSizes: function() {
        return fetchList('sizes');
      }
    }
  }

  angular.module('core')
    .factory('AppDataFactory', ['$http', AppDataFactory])

}());