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
                    $scope.totalPrice = [];
                    $scope.stockList = [];
                    angular.forEach(stocks, function(stocks) {
                        $scope.stockList.push(stocks.stock)
                        console.log(stocks.stock)
                        total += stocks.stock.price;
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
