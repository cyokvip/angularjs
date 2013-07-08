var menu_list_data='';
/*function MenuDataCtrl($scope,$http){
	$http.jsonp('http://ed.yingtong360.com/admin.php/api/menu/menu_list/.jsonp?callback=JSON_CALLBACK').success(function(data) {
		$.fn.zTree.init($("#menu_list"), setting, data);
	});
}*/

angular.module('tQApp.menu', []).
  controller('MenuDataCtrl', ['$http','$scope',function($http) {
	  $http.jsonp('http://ed.yingtong360.com/admin.php/api/menu/menu_list/.jsonp?callback=JSON_CALLBACK').success(function(data) {
		  $.fn.zTree.init($("#menu_list"), setting, data);
	  });
  }]).
  controller('indexCtrl',['$http',function(){
  
  }]);


