var menu=angular.module('controller_menu', []);
//所有父菜单
menu.controller('menu_parent_lists_ctrl', ['$http','$scope',function($http,$scope) {
	$http.jsonp('http://ed.yingtong360.com/admin.php/api/menu/menu_list/.jsonp?callback=JSON_CALLBACK').success(function(data) {
		 $.fn.zTree.init($("#menu_parent_tree"), setting, data);
	})
}]);

 menu.directive("contenteditable", function () {
        return {
            require:"ng-model",
            link:function (scope, ele, attrs, ctrl) {
                //view -> model
                ele.bind("blur keyup",function() {
                    scope.$apply(function() {
                        console.log(ele.text());
                        ctrl.$setViewValue(ele.text());
                    });
                });

                //model -> view
                ctrl.$render = function(value) {
                    console.log("render");
                    ele.html(value);
                };
                //读取初始值
                ctrl.$setViewValue(ele.text());
            }
        };
    });
   
 
/*
 menu.directive("myDir", function factory() {
            return {
                restrict: "ECMA",
                scope: true,
                template: "<span>{{exp}}</span>",
                replace: true,
                controller: function($scope) {
                    console.log($scope);
                },
                link: function(scope, element, attrs, ctrl) {
                    scope.$watch(attrs.myDir, function(value) {
                        scope.exp =value;
                    });
                }
            };
		 
        });
*/
/*
 menu.config(
            function( $routeProvider ){
                $routeProvider
					.when(
						"/add",{
							templateUrl: "views/menu/add.html",
						})
					;

			}
        );
*/ 
menu.controller('menu_add_ac_ctrl', ['$scope',function($scope) {
 
	$scope.update = function(menu) {
		console.log(menu)
	};

		$scope.test2 = function(test) {
		console.log(test)
	};

		$scope.test3 = function(test) {
		console.log(test)
	};


}]);

