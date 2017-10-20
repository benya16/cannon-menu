(angular.module('myApp').controller('DayController', ['cannonMenuService', '$routeParams', function(cannonMenuService, $routeParams) {

    var self = this;

    self.loading = true;
  
    self.day = new Date($routeParams.day.replace(/"/g, ''));
    // if(self.day == undefined) {
    //     self.day = new Date();
    // }

    console.log(self.day);

    cannonMenuService.getDailyMenu(self.day).then(function (result) {
        self.loading = false;
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