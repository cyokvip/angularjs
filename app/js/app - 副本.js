'use strict';
// Declare app level module which depends on filters, and services
//angular.module('tQApp', ['tQApp.filters', 'tQApp.services', 'tQApp.directives', 'tQApp.controllers']).

//var tQApp=angular.module('tQApp', ['filters', 'services', 'directives']);
var tQApp=angular.module('tQApp', []);
  tQApp.config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    //$routeProvider.otherwise({redirectTo: '/view1'});
  }]);

