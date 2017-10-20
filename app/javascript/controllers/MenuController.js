(angular.module('myApp').controller('MenuController', ['cannonMenuService', function(cannonMenuService) {

    var self = this;
    self.today = new Date();


    cannonMenuService.getWeeklyMealMenu(self.today).then(function (result) {
        self.weeklyMenu = result;

        // console.log("Result: ", result);

        self.weeklyMenus = [];
        for(var i = 0; i < self.weeklyMenu.length; ++i) {
            self.weeklyMenus[i] = self.weeklyMenu[i].menus[0].recipes.filter(function (recipe) {
                if(recipe.category === 'Euro' || recipe.category === 'Expo' || recipe.category === 'Grill' || recipe.category === 'Fusion') {
                    return true;
                }
                return false;
            });
            self.weeklyMenus[i].meal = self.weeklyMenu[i].meal;
            self.weeklyMenus[i].date = self.weeklyMenu[i].date;
        }

        // console.log("Weekly menus: ", self.weeklyMenus);
    });

    this.changeMeal = function(meal) {
        cannonMenuService.getWeeklyMealMenu(self.today, meal).then(function (result) {
            self.weeklyMenu = result;

            self.weeklyMenus = [];
            for(var i = 0; i < self.weeklyMenu.length; ++i) {
                self.weeklyMenus[i] = self.weeklyMenu[i].menus[0].recipes.filter(function (recipe) {
                    if(recipe.category === 'Euro' || recipe.category === 'Expo' || recipe.category === 'Grill' || recipe.category === 'Fusion') {
                        return true;
                    }
                    return false;
                });
                self.weeklyMenus[i].meal = self.weeklyMenu[i].meal;
                self.weeklyMenus[i].date = self.weeklyMenu[i].date;
            }

            // console.log("Weekly menus: ", self.weeklyMenus);
        });
    }


}]));