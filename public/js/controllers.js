'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 .controller('MyCtrl1', ['$scope','stockService',function($scope,stockService) {

        $scope.name='Company';

        $scope.newsList = [];

        $scope.stockList = [];

        $scope.totalPrice = [];

        $scope.getCompany = function (company) {
            var total=0;
            var count = 1;
            stockService.get(company, function (data) {
                console.log(data);
                angular.forEach(data, function (stocks) {
                    $scope.stockList = [];
                    angular.forEach(stocks, function(value) {
                        $scope.stockList.push(value.stock)
                        console.log(value.stock)
                        total += value.stock.price;
                        count = count + 1;
                    })
                });
                $scope.totalPrice.push((total/count).toFixed(2))
            })
            $scope.apply

        };

        $scope.getNews = function (news) {
            stockService.getNews(news, function (data) {
                angular.forEach(data, function (feeds) {
                    $scope.newsList = [];
                    angular.forEach(feeds, function(value) {
                        $scope.newsList.push(value.feed)
                        console.log(value.feed)
                    })
                });
            })
            $scope.apply
        };
  }])
