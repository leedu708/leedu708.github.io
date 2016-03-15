leedu.controller('HomeCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Home';
    $scope.header1 = 'Developer';
    $scope.header2 = 'Engineer';
    $scope.header3 = 'Designer';

    $scope.quote = {
      text: "You see things; and you say, 'Why?' But I dream things that never were; and I say, 'Why not?'",
      author: 'George Bernard Shaw'
    };

  }]);