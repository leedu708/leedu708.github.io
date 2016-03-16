leedu.controller('HomeCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Home';
    $scope.header1 = 'Designer';
    $scope.header2 = 'Developer';
    $scope.header3 = 'Engineer';

    $scope.quote = {
      text: "You see things; and you say, 'Why?' But I dream things that never were; and I say, 'Why not?'",
      author: 'George Bernard Shaw'
    };

  }]);