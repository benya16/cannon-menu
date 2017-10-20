(angular.module('myApp').controller('MainController', function($route) {
    this.activeTab = 'menu';

    var self = this;

    self.today = new Date();

    this.changeRoute = function() {
        this.activeTab = $route.current.activetab;
    }

}));