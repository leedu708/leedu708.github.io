leedu.controller('ContactCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Contact Me';
    $scope.header = "Let's chat!";
    $scope.email = "djl265@cornell.edu";
    $scope.telephone = "(347) 753-3433";

  }]);