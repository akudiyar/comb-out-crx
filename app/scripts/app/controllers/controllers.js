angular.module('popup')
  .controller('MainController', ['$scope', function($scope) {
        $scope.welcomeMsg = "Comb Out!";

        $scope.processPage = function() {
            saveAsPDF(collectRows, null, "test_co.pdf");  
        };
  }])
;
