leedu.controller('SkillsCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Skills';
    $scope.header = 'Skills';
    $scope.resumeURL = "<a href='/files/resume.pdf'>Download as PDF</a>"

  }]);