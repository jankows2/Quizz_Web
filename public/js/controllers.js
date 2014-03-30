'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 .controller('MyCtrl1', ['$scope','stockService',function($scope,stockService) {

        $scope.name='Company';

        $scope.newsList = [];

        $scope.stockList = [];

        $scope.totalPrice = 0;

        $scope.timeUp = 0;

        $scope.timesDown=0;

        $scope.simpleClass = 0;

        $scope.getCompany = function (company) {
            var total=0;
            var count = 1;
            var up = 1;
            var down = 1;
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
                        if(stocks.stock.percent_change >=0){
                            up = up +1
                        }
                        else{
                            down = down +1
                        }
                    })
                });
                $scope.timeUp = up
                $scope.timesDown = down
                $scope.simpleClass = ((up/30)*100).toFixed(2)
                $scope.totalPrice = ((total/count).toFixed(2))
            })
            stockService.getNews(company, function (data) {
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
