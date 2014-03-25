'use strict';

/* Directives */


angular.module('myApp.directives', [])

    .directive('navbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/partial1.html'
        }
    });