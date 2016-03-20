leedu.directive('footerNav', function() {

  return {
    restrict: 'E',
    templateUrl: '/views/shared/footerNav.html',
    scope: true,
    controller: ['$scope', function($scope) {

      $scope.socialMedia = [
        {
          link: 'https://www.github.com/leedu708',
          faClass: 'fa-github'
        },
        {
          link: 'https://www.linkedin.com/in/leedu708',
          faClass: 'fa-linkedin'
        },
        {
          link: 'https://www.instagram.com/leedu708/',
          faClass: 'fa-instagram'
        }
      ];

    }]
  };
});