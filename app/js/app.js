var tQApp=angular.module('tQApp', ['loadOnDemand']);

tQApp.controller('menu_data_list', ['$http','$scope',function($http) {
	$http.jsonp('http://ed.yingtong360.com/admin.php/api/menu/menu_list/.jsonp?callback=JSON_CALLBACK').success(function(data) {
	$.fn.zTree.init($("#menu_list"), setting, data);
})
	}]);
tQApp.controller('index_list', [function() {

}]);


tQApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	//$locationProvider.hashPrefix('!');
	$routeProvider
		.when('/', { template: '<div load-on-demand="\'controller_index\'"></div>' })
		.when('/menu_add', { template: '<div load-on-demand="\'controller_menu\'"></div>' })
		.otherwise({ redirectTo: '/' });
}]);
tQApp.config(['$loadOnDemandProvider', function ($loadOnDemandProvider){
	var scriptPath = function (file) { return 'js/modules/' + file},
		templatePath = function (file) { return file };
		$loadOnDemandProvider.config([
			{ name: 'controller_index', script: scriptPath('controller_index.js'), template: templatePath('') },
			{ name: 'controller_menu', script: scriptPath('controller_menu.js'), template: templatePath('views/menu/add.html') }
		]);
}]);
