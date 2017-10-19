(angular.module('myApp').controller('DayController', ['cannonMenuService', function(cannonMenuService) {

    var self = this;

    cannonMenuService.getDailyMenu().then(function (result) {
        self.meals = result;
        console.log(result);
    });



}]));