'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap',
  'n3-pie-chart',
  'n3-charts.linechart',
  'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/car', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl1'});
        $routeProvider.otherwise({redirectTo: '/'});
}]);
