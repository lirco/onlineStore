'use strict';

(function () {

  function adminController(Authentication) {

    var self = this;
    self.authentication = Authentication;
  }

  angular.module('admin')
    .controller('adminController', ['Authentication', adminController])

}());