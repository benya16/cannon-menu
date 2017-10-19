(angular.module('myApp').controller('DayController', ['cannonMenuService', function(cannonMenuService) {

    var self = this;

    cannonMenuService.getDailyMenu().then(function (result) {
        self.meals = result;
        console.log(result);


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


        console.log("Menus: ", self.menus);

    });



}]));