'use strict';


(function () {

  function adminController(Authentication) {
    this.authentication = Authentication;
  }

  angular.module('admin')
    .controller('adminController', ['Authentication', adminController])

}());