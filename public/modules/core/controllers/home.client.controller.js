'use strict';


//angular.module('core').controller('homeController', ['$scope', 'Authentication',
//	function($scope, Authentication) {
//		// This provides Authentication context.
//		$scope.authentication = Authentication;
//	}
//]);


(function () {

  function homeController(state, Authentication) {
    this.authentication = Authentication;
    state.go('home.views');
  }

  angular.module('core')
    .controller('homeController', ['$state', 'Authentication', homeController])

}());