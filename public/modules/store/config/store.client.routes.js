'use strict';

// Setting up route
angular.module('store').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider

        .state('store', {
            url: '/store',
            templateUrl: 'modules/store/views/store_main/store.client.view.html',
            controller: 'storeController',
            controllerAs: 'storeCtrl',
            resolve: {
                products : function(Products){
                    return Products.query();
                },
                categories : function(AppStateService){
                    return AppStateService.categories;
                }
            }
        })

        .state("store.views", {
            views: {
                'header': {
                    templateUrl: 'modules/store/views/store_main/sub_views/storeHeader.html'
                },
                'sidebar': {
                    templateUrl: 'modules/store/views/store_main/sub_views/storeSideBar.html'
                },
                'main': {
                    templateUrl: 'modules/store/views/store_main/sub_views/storeMain.html'
                },
                'footer': {
                    templateUrl: 'modules/core/views/footer.client.view.html'
                }
            }
        })
	}
]);