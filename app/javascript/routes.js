angular.module('myApp').config(function($routeProvider) {
   $routeProvider
       .when('/', {
           redirectTo: '/home'
       })
       .when('/home', {
           templateUrl: 'views/menu.html',
           controller: 'MenuController',
           controllerAs: 'menuCtrl'
       })
       .otherwise({redirectTo: '/menu'});
});