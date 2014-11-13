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

      .state('admin.dashboard', {
        url: '/admin/dashboard',
        templateUrl: 'modules/admin/views/dashboard/admin.dashboard.client.view.html'
      })

      .state('admin.graphs', {
        url: '/admin/graphs',
        templateUrl: 'modules/admin/views/graphs/admin.graphs.client.view.html'
      })

      .state('admin.manageStore', {
        url: '/admin/manageStore',
        templateUrl: 'modules/admin/views/manage_store/admin.manageStore.client.view.html'
      })

      .state('admin.orders', {
        url: '/admin/orders',
        templateUrl: 'modules/admin/views/orders/admin.orders.client.view.html'
      })

  }
]);