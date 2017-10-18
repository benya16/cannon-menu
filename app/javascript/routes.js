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
       .otherwise({redirectTo: '/menu'});
});