'use strict';


(function () {

  function addNewProductController(state, Authentication) {
    this.authentication = Authentication;
    this.message = 'addNewProductController here'
  }

  angular.module('admin')
    .controller('addNewProductController', ['$state', 'Authentication', addNewProductController])

}());