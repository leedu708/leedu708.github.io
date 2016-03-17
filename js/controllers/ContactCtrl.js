leedu.controller('ContactCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Contact Me';
    $scope.header = "Shoot me an email to chat any time!";
    $scope.email = "djl265@cornell.edu";
    $scope.telephone = "(347) 753-3433";

  }]);