leedu.controller('HomeCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Home';
    $scope.test = 'Hello, Dustin!';

  }]);