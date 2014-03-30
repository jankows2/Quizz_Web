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

        $scope.gauge_data = [];

        $scope.options = {thickness: 5, mode: "gauge", total: 100};

        $scope.result = [];



        $scope.getCompany = function (company) {
            var total=0;
            var count = 1;
            var up = 1;
            var down = 1;
            stockService.get(company, function (data) {
                angular.forEach(data, function (stocks) {
                    $scope.totalPrice = [];
                    $scope.stockList = [];
                    $scope.gauge_data = [];
                    angular.forEach(stocks, function(stocks) {
                        $scope.stockList.push(stocks.stock)
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
                $scope.gauge_data.push(
                    {label: "Price", value:(total/count).toFixed(2), color: "#5398f1", suffix: "$"}
                )
            })
            stockService.getNews(company, function (data) {
                angular.forEach(data, function (feeds) {
                    $scope.newsList = [];
                    angular.forEach(feeds, function(value) {
                        $scope.newsList.push(value.feed)
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
                    })
                });
            })
            $scope.apply
        };

        $scope.getUnseen = function(){
            var price = $scope.unseen.price
            var volume = $scope.unseen.volume
            var ytd = $scope.unseen.ytd
            var min = 0;
            var upDown = true;

            angular.forEach($scope.stockList, function(data){
                console.log(data.price)
            })

        }
  }])
