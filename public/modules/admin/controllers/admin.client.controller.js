'use strict';


(function () {

  function adminController(state, Authentication) {
    this.authentication = Authentication;
  }

  angular.module('admin')
    .controller('adminController', ['$state', 'Authentication', adminController])

}());