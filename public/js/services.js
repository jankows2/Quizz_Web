angular.module('myApp.services', [])

    .factory('stockService', [ '$http', function($http) {
        return {
            get: function (company,success) {
                $http({
                    method: 'GET',
                    url: '/api/stocks.json?company=FLWS',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).success(function (data) {
                    success(data);
                }).error(function (data) {
                    console.log('error' + data);
                })
            }
        }
    }]);