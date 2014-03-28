'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 .controller('MyCtrl1', ['$scope','stockService',function($scope,stockService) {

        $scope.name='Company';

        $scope.newsList = [];

        $scope.getCompany = function (company) {

            console.log(company);
            stockService.get(company, function (data) {
                console.log(data);
            })

        };

        $scope.getNews = function (news) {
            console.log(news);
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
