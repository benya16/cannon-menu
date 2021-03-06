angular.module('myApp').factory('cannonMenuService', function($http, $q) {
  
  function getMenuPromise(date, meal) {
          
      var menuObj = {}
      var proxyurl = "https://cors-anywhere.herokuapp.com/"
      
      var month = ('0' + (date.getMonth() + 1)).slice(-2)
      var day = ('0' + date.getDate()).slice(-2)
      var formattedDate = date.getFullYear() + month + day
      var url = "http://dining.byu.edu/commons/menu_pass.php?servedate="
        + formattedDate + "&viewname=MenusJSON"

      return $http.get(proxyurl + url).then(function(result) {
        return result['data']['menus'][0]['mealid']
      }).then(function(result) {
        var mealId = result
        var menuUrl = "http://dining.byu.edu/commons/menu_pass.php?servedate=" +
          formattedDate +
          "&mealname=" + meal + "&mealid=" + mealId +
          "&viewname=MenuItemsJSON"
        return $http.get(proxyurl + menuUrl)
      }).then(function(result) {
          result.data.date = month + '-' + day + '-' + date.getFullYear()
          result.data.meal = meal;
          return result.data
      })
  }
  
  return {
    
    getDailyMenu: function(startDate) {
      return this.getMenus(startDate, 1, ['BREAKFAST', 'LUNCH', 'DINNER'])
    },
    
    getWeeklyMealMenu: function(startDate, theMeal) {
      var meal = theMeal || 'LUNCH'
      return this.getMenus(startDate, 7, [meal])
    },
    
    //Get menu
    getMenus: function(startDate, numDays, theMealArray) {
      
      var menuObj = {}
      var days = numDays || 7
      var date = new Date()
      if (startDate) {
        date = new Date(startDate.getTime())
      }
      var mealsArray = theMealArray || ['LUNCH']
      var mealId = 0
      var promises = [];
      
      for (var i = 0; i < days; i++) {
        for (var j = 0; j <  mealsArray.length; j++) {
          promise = getMenuPromise(date, mealsArray[j]);
          promises.push(promise)
        }
        date.setDate(date.getDate() + 1);
      }
      
      qAll = $q.all(promises);
      return qAll;
    }
  }
});