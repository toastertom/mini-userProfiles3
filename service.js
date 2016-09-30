angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var defer = $q.defer();
      $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    })
    .then(function (response) {
      // Filters data from API so controller doesn't need to. 
      var parsedResponse = response.data.data;
      //used to change everyones first name to Ralf.
      for (var i = 0; i < parsedResponse.length; i++){
        parsedResponse[i].first_name = 'Ralf';
      }
      defer.resolve(parsedResponse);
    })
    return defer.promise;
  }

});
