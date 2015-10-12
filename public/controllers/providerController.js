angular.module('evidationApp.provider',[])
.controller('searchCtrl', ['$scope', '$http', searchCtrl])


function searchCtrl($scope, $http){
  $scope.query = '';
  
  $scope.filterName = function(provider) {
    var query = $scope.query.toLowerCase();
    if(provider.hasOwnProperty('first_name')){
      var fullName = (provider.first_name + ' ' + provider.last_name).toLowerCase();
      var lastName = provider.last_name.toLowerCase();
      return lastName.indexOf(query) === 0 || fullName.indexOf(query) === 0;
    }
    return false;
  };

  $scope.filterOrganization = function(org){
    var query = $scope.query.toLowerCase();
    if(org.hasOwnProperty('organization_name')){
      return org.organization_name.toLowerCase().indexOf(query) === 0;
    }
    return false;
  }
  

  $scope.postProviderData = function(providerInfo){
    $http.post('/providers', providerInfo)
    console.log('Provider info posted', providerInfo)
  };
  
  $scope.providerData = [{
      "first_name":"John",
      "last_name":"Doe",
      "zip":"01234",
      "npi":12345
     },{
       "first_name":"Jane",
        "last_name":"Doe",
        "zip":"93110",
        "npi":23456
     },{
       "first_name":"Bran",
        "last_name":"Doe",
        "zip":"93110",
        "npi":54321
     },{
       "first_name":"Jack",
        "last_name":"Dob",
        "zip":"94101",
        "npi":35467
     },{
       "first_name":"John",
        "last_name":"Doe",
        "zip":"54312",
        "npi":99999
     },{
       "first_name":"Jack",
        "last_name":"Dob",
        "zip":"11002",
        "npi":23556
     },{
       "organization_name":"Johns Hopkins",
        "zip":"01234",
        "npi":22222
     },{
       "organization_name":"Mercy Hospital",
        "zip":"93110",
        "npi":33333
     },{
       "organization_name":"General Hospital",
        "zip":"11002",
        "npi":44533
     }
  ]
}
