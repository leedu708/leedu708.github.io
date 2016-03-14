var leedu = angular.module('leedu', ['ui.router', 'ngAnimate']);

leedu.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: ['$scope', function($scope) {
        $scope.test = "About";
      }]
    })

    .state('skills', {
      url: '/skills',
      templateUrl: 'views/skills.html',
      controller: ['$scope', function($scope) {
        $scope.test = "Skills";
      }]
    })

    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'views/portfolio.html',
      controller: ['$scope', function($scope) {
        $scope.test = "Portfolio";
      }]
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: ['$scope', function($scope) {
        $scope.test = "Contact";
      }]
    })

});

leedu.run(function($rootScope) {
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});