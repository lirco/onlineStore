'use strict';

// Setting up route
angular.module('admin').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');

    // Home state routing
    $stateProvider

      .state('admin', {
        url: '/admin',
        templateUrl: 'modules/admin/views/admin.client.view.html',
        controller: 'adminController',
        controllerAs: 'adminCtrl'
      })

  }
]);