angular.module('myApp.services', [])

    .factory('stockService', [ '$http', function($http) {
        return {
            get: function (company,success) {
                $http({
                    method: 'GET',
                    url: '/api/stocks.json?company=' + company,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).success(function (data) {
                    console.log("success")
                    success(data);
                }).error(function (data) {
                    console.log('error');
                })
            },

            getNews: function (news,success) {
                $http({
                    method: 'GET',
                    url: '/api/feeds.json?title=' + news,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).success(function (data) {
                    success(data);
                }).error(function (data) {
                    console.log('error' );
                })
            }
        }
    }]);