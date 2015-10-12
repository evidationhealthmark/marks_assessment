angular.module('evidationApp.home',[])
.controller('homeCtrl', ['$scope', '$http', '$location', homeCtrl])


function homeCtrl($scope, $http, $location){
  $scope.userFormInfo = {};

  $scope.processForm = function(){
    $http.post('/', $scope.userFormInfo)
    console.log('User data posted', $scope.userFormInfo)
    $location.path('/search')
  };

}