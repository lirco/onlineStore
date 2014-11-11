'use strict';

(function () {

    function localDataService(http) {

        /**
         * gets the data by request and returns to client
         *
         * later on this will work with a server and it will be clearer
         *
         * @param dataName
         */
        this.get = function(dataName) {
            return http({method:'GET', url: 'modules/store/services/' + dataName + '.json'})
                .success(function(data) {
                    return data;
                })
        }

    }

    angular.module('store')
        .service('localDataService', ['$http', localDataService])

}());