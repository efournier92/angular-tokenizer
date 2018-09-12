var app = angular.module('app', ['ngTagsInput']);

//angular.module('app', ['ngTagsInput'])
app.controller('MainCtrl', function($scope, $http) {
  $scope.externalContacts = [];
  $scope.allPeopleList = [{
    "name": 'vikas nale',
    "id": 1
  }, {
    name: 'chetan kulkarni',
    id: 2
  }, {
    name: 'chetan sharma',
    id: 3
  }, {
    name: 'chetan chowhan',
    id: 4
  }, {
    name: 'vikas bhalla',
    id: 5
  }, {
    name: 'vidhya zade',
    id: 6
  }];

  $scope.searchPeople = function(term) {
    var search_term = term.toUpperCase();
    $scope.people = [];
    angular.forEach($scope.allPeopleList, function(item) {
      if (item.name.toUpperCase().indexOf(search_term) >= 0)
        $scope.people.push(item);

    });

    return $scope.people;
  };
});
