'use strict';


// Declare app level module which depends on filters, and services
//angular.module('tQApp', ['tQApp.filters', 'tQApp.services', 'tQApp.directives', 'tQApp.controllers']).
angular.module('tQApp', ['tQApp.filters', 'tQApp.services', 'tQApp.directives', 'tQApp.controllers','tQApp.menu']).
  config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    //$routeProvider.otherwise({redirectTo: '/view1'});
  }]);
