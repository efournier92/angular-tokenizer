var app = angular.module('app', ['ngTagsInput']);

//angular.module('app', ['ngTagsInput'])
app.controller('MainCtrl', function($scope, $http) {
  $scope.selectedPromoCodes = [];
  var allPromoCodesString = '[ {"vanityCode": "AA123"}, {"vanityCode": "BB123"}, {"vanityCode": "CC123"}, {"vanityCode": "DD123"}, {"vanityCode": "EE123"}, {"vanityCode": "FF123"}, {"vanityCode": "GG123"}, {"vanityCode": "HH123"}, {"vanityCode": "AA987"}, {"vanityCode": "BB987"}, {"vanityCode": "CC987"}, {"vanityCode": "DD987"}, {"vanityCode": "EE987"}, {"vanityCode": "FF987"}, {"vanityCode": "GG987"}, {"vanityCode": "HH987"} ]';
  $scope.allPromoCodes = angular.fromJson(allPromoCodesString);

  $scope.searchCodes = function(query) {
    var search_term = query.toUpperCase();
    $scope.codes = [];
    angular.forEach($scope.allPromoCodes, function(code) {
      if (code.vanityCode.toUpperCase().indexOf(search_term) >= 0)
        $scope.codes.push(code);
    });

    return $scope.codes;
  };
});
