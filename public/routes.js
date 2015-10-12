angular.module('evidationApp',['ngRoute','evidationApp.home', 'evidationApp.provider'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/start.html',
    controller: 'homeCtrl'
  })
  .when('/search', {
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })
}])
  