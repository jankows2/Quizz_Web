'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['stockService','$scope',function($scope,stockService) {

        $scope.name='Company';

       console.log('Hmmmmmm')




        $scope.getCompany = function () {
            console.log('What')
            var attributes = {
                name : $scope.name
            };
            console.log(attributes);
            stockService.get(attributes, function (data) {
                console.log(data);
            })

        };


  }])
