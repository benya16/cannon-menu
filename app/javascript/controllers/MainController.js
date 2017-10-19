(angular.module('myApp').controller('MainController', function($route) {
    this.activeTab = 'menu';

    this.changeRoute = function() {
        this.activeTab = $route.current.activetab;
    }

}));