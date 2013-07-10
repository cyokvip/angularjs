//var aa=angular.module('controller_index',['controller_menu']);
var aa=angular.module('controller_index',[]);

 aa.config(
            function( $routeProvider ){
                $routeProvider
					.when(
						"/add",{
							templateUrl: "views/menu/add.html",
						})
					;

			}
        );

aa.controller('menu_data_list', ['$http','$scope',function($http) {
	alert(1)
	$http.jsonp('http://ed.yingtong360.com/admin.php/api/menu/menu_list/.jsonp?callback=JSON_CALLBACK').success(function(data) {
	$.fn.zTree.init($("#menu_list"), setting, data);
})
	}]);
aa.controller('index_list', [function() {

}]);

