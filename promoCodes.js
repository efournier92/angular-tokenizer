var app = angular.module('promoCodes', ['ngTagsInput']);

app.controller('promoCodesCtrl', function($scope, $location, $http) {
  $scope.selectedPromoCodes = [];
  var allPromoCodesString = '[ {"vanityCode": "AA123"}, {"vanityCode": "BB123"}, {"vanityCode": "CC123"}, {"vanityCode": "DD123"}, {"vanityCode": "EE123"}, {"vanityCode": "FF123"}, {"vanityCode": "GG123"}, {"vanityCode": "HH123"}, {"vanityCode": "AA987"}, {"vanityCode": "BB987"}, {"vanityCode": "CC987"}, {"vanityCode": "DD987"}, {"vanityCode": "EE987"}, {"vanityCode": "FF987"}, {"vanityCode": "GG987"}, {"vanityCode": "HH987"} ]';
  var allPromoCodes = angular.fromJson(allPromoCodesString);
  $scope.selectedPromoCodes.push(allPromoCodes[0]);

  $scope.searchCodes = function (query) {
    var search_term = query.toUpperCase();
    codes = [];
    angular.forEach(allPromoCodes, function(code) {
      if (code.vanityCode.toUpperCase().indexOf(search_term) >= 0)
        codes.push(code);
    });
    return codes;
  };

  $scope.promoCodesChanged = function () {
    var codes = $scope.selectedPromoCodes;
    window.promoCodes = angular.toJson(codes);
    console.log('Changed', window.promoCodes);
  };

  $scope.isViewMode = function () {
    var url = $location.absUrl();
    if (url.includes('')) return false;
    return true;
  }

  $scope.saveCodes = function () {
    console.log('Codes saved.');
  };
});
