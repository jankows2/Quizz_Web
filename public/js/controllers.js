'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 .controller('MyCtrl1', ['$scope','stockService',function($scope,stockService) {

        $scope.name='Company';

        $scope.newsList = [];

        $scope.stockList = [];

        $scope.getCompany = function (company) {
            stockService.get(company, function (data) {
                console.log(data);
                angular.forEach(data, function (stocks) {
                    $scope.stockList = [];
                    angular.forEach(stocks, function(value) {
                        $scope.stockList.push(value.stock)
                        console.log(value.stock)
                    })
                });
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
