'use strict';


(function () {

  function adminController(state, Authentication) {
    this.authentication = Authentication;
//    state.go('admin.views');
  }

  angular.module('core')
    .controller('adminController', ['$state', 'Authentication', adminController])

}());