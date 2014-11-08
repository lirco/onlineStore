'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider

      .state('home', {
			  url: '/',
			  templateUrl: 'modules/core/views/home.client.view.html',
        controller: 'homeController',
        controllerAs: 'homeCtrl'
		  })

      .state('home.views', {
        views: {
          "banner": {
            templateUrl: 'modules/core/views/sub_views/homeBanner.html'
          },
          "section1": {
            templateUrl: 'modules/core/views/sub_views/homeSection1.html'
          },
          "section2": {
            templateUrl: 'modules/core/views/sub_views/homeSection2.html'
          },
          "section3": {
            templateUrl: 'modules/core/views/sub_views/homeSection3.html'
          },
          "section4": {
            templateUrl: 'modules/core/views/sub_views/homeSection4.html'
          },
          "footer": {
            templateUrl: 'modules/core/views/footer.client.view.html'
          }
        }
      })
	}
]);