'use strict';


(function () {

  function homeController(state, Authentication) {
    this.authentication = Authentication;
    state.go('home.views');
  }

  angular.module('core')
    .controller('homeController', ['$state', 'Authentication', homeController])

}());