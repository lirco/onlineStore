'use strict';

(function () {

    function storeController(state, products, categories) {

        state.go('store.views');

        this.categories = categories['data']['categories']
        this.items = products['data']

    }

    angular.module('store')
        .controller('storeController', ['$state','products','categories', storeController])

}());