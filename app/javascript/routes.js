angular.module('myApp').config(function($routeProvider) {
   $routeProvider
       .when('/', {
           redirectTo: '/menu',
           activetab: 'day'
       })
       .when('/menu', {
           templateUrl: 'views/menu.html',
           controller: 'MenuController',
           controllerAs: 'menuCtrl',
           activetab: 'menu'
       })
       .when('/day/:day', {
           templateUrl: 'views/day.html',
           controller: 'DayController',
           controllerAs: 'dayCtrl',
           activetab: 'day'
       })
       .otherwise({redirectTo: '/menu'});
});