'use strict';

// Setting up route
angular.module('admin').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');

    // Admin state routing
    $stateProvider

      .state('admin', {
        url: '/admin',
        templateUrl: 'modules/admin/views/admin.client.view.html',
        controller: 'adminController',
        controllerAs: 'adminCtrl'
      })

      .state('admin.dashboard', {
        url: '/dashboard',
        templateUrl: 'modules/admin/views/dashboard/admin.dashboard.client.view.html'
      })

      .state('admin.graphs', {
        url: '/graphs',
        templateUrl: 'modules/admin/views/graphs/admin.graphs.client.view.html'
      })

      .state('admin.manageStore', {
        url: '/manageStore',
        templateUrl: 'modules/admin/views/manage_store/admin.manageStore.client.view.html'
      })

      .state('admin.orders', {
        url: '/orders',
        templateUrl: 'modules/admin/views/orders/admin.orders.client.view.html'
      })

      .state('admin.manageStore.addNewProduct', {
        url: '/addNewProduct',
        templateUrl: 'modules/admin/views/manage_store/add_new_product/admin.addNewProduct.client.view.html',
        controller: 'addNewProductController',
        controllerAs: 'addNewProductCtrl'
      })

      .state('admin.manageStore.manageProducts', {
        url: '/manageProducts',
        templateUrl: 'modules/admin/views/manage_store/manage_products/admin.manageProducts.client.view.html'
      })



  }
]);