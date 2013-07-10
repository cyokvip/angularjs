angular.directive('myComponent', function(mySharedService) {  
    return {  
        restrict: 'E',  
        controller: function($scope, $attrs, mySharedService) {  
            $scope.$on('handleBroadcast', function() {  
                $scope.message = 'Directive: ' + mySharedService.message;  
            });  
        },  
        replace: true,  
        template: '<input>'  
    };  
});  

