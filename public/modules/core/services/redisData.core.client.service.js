
(function () {


  /**
   * RedisData Service will use for... setting and getting data from redis server on node.
   *
   * This Service will handle data of two types, which will be held by redis:
   *
   * 1. Data for graphs - most viewed products for example
   * 2. Lists like categories,colors and sizes
   *
   * TODO: setting data occurs all the time (on user clicks for example)
   * TODO: but fetching data of graphs happens only on admin request.
   * TODO: so I need to think about splitting this module in two for efficiency.
   *
   * @constructor
   */
  function RedisDataService($http) {


    var self = this;

    /**
     * initializing and fetching lists.
     * (like categories, colors, sizes etc...)
     *
     * @param listName
     * @returns {*}
     */
    self.fetchList = function(listName) {
      self.listName = [];
      return $http.get('/redis/' + listName)
        .then(function(response) {
          var res = response.data;

          self.listName = res;

          return self.listName

        }, function(errResponse) {
          console.error('Error while fetching categories');
        });
    };

    /**
     * adding a value to a list (key)
     * (like adding a category to the categories list for example
     *
     * @param listName
     * @param value
     */
    self.addToList = function(listName, value) {
      $http.post('/redis/' + listName , value)
        .then(fetchList(listName))
    };

    /**
     * initializing and fetching sets.
     * sorted sets will be used for graphs data, as they can be sorted immediately by redis
     *
     * by default, the server will respond with the 5 highest results
     *
     * TODO: add an option to get more/less/other than the 5 highest results
     *
     * setName is the name of the graph. "mostViewedProduct" for example
     *
     * @param setName
     * @returns {*}
     */
    self.fetchSet = function(setName) {
      self.setName = [];
      return $http.get('/redis/' + setName).then(
        function(response) {
          self.listName = response.data;
        }, function(errResponse) {
          console.error('Error while fetching categories');
        });
    };

    /**
     * This is for adding a new product for example, so we need to add a new product to the relevant sets
     * @param setName
     * @param value
     */
    self.addToSet = function(setName, value) {
      $http.post('/redis/' + setName , value)
        .then(fetchSet(setName))
    };

    /**
     * This is for increasing value on ordered set.
     * when a user clicks a product on store for example, we need to increase the product views
     *
     * @param setName
     * @param value
     */
    self.updateSet = function(setName, value) {
      $http.put('/redis/' + setName , value)
        .then(fetchSet(setName))
    }

  }

  angular.module('core')
    .service('RedisDataService', ['$http', RedisDataService])

}());