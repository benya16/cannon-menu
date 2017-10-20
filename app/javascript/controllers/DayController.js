(angular.module('myApp').controller('DayController', ['cannonMenuService', '$routeParams', function(cannonMenuService, $routeParams) {

    var self = this;

    self.day = Date.parse($routeParams.day);
    if(self.day == undefined || isNaN(self.day)) {
        self.day = new Date();
    }

    cannonMenuService.getDailyMenu(self.day).then(function (result) {
        self.meals = result;
        self.menus = [];
        for(var i = 0; i < self.meals.length; ++i) {
            self.menus[i] = self.meals[i].menus[0].recipes.filter(function (recipe) {
                if(recipe.category === 'Euro' || recipe.category === 'Expo' || recipe.category === 'Grill' || recipe.category === 'Fusion') {
                    return true;
                }
                return false;
            });
            self.menus[i].meal = self.meals[i].meal;
        }
    });

}]));