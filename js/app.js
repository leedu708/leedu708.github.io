var leedu = angular.module('leedu', ['ui.router']);

leedu.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })

});

leedu.run(function($rootScope) {
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});