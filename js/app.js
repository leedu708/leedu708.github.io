var leedu = angular.module('leedu', ['ui.router', 'ngAnimate', 'ngSanitize']);

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
      controller: 'AboutCtrl'
    })

    .state('skills', {
      url: '/skills',
      templateUrl: 'views/skills.html',
      controller: 'SkillsCtrl'
    })

    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'views/portfolio.html',
      controller: 'PortfolioCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })

});

leedu.run(function($rootScope) {
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});