angular.module('myApp').config(function($routeProvider) {
   $routeProvider
       .when('/', {
           redirectTo: '/menu'
       })
       .when('/menu', {
           templateUrl: 'views/menu.html',
           controller: 'MenuController',
           controllerAs: 'menuCtrl'
       })
       .when('/day', {
           templateUrl: 'views/day.html',
           controller: 'DayController',
           controllerAs: 'dayCtrl'
       })
       .otherwise({redirectTo: '/menu'});
});