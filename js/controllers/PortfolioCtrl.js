leedu.controller('PortfolioCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Portfolio';

    $scope.projects = [
      {
        title: 'Evergreen',
        img: '/images/evergreen.jpg',
        github: 'https://github.com/leedu708/evergreen',
        preview: 'http://fast-shore-10637.herokuapp.com/'
      },
      {
        title: 'Danebook',
        img: '/images/danebook.png',
        github: 'https://github.com/leedu708/danebook',
        preview: 'http://blooming-tundra-4486.herokuapp.com/'
      },
      {
        title: 'Djello',
        img: '/images/djello.png',
        github: 'https://github.com/leedu708/project_djello',
        preview: 'http://djl-djello.heroku.com/'
      },
      {
        title: 'Tetris',
        img: '/images/tetris.png',
        github: 'https://github.com/leedu708/project_tetris_js',
        preview: 'https://htmlpreview.github.io/?https://github.com/leedu708/project_tetris_js/blob/master/tetris.html'
      },
      {
        title: 'Uber Challenge',
        img: '/images/uber.png',
        github: 'https://github.com/leedu708/uber_food_truck_challenge',
        preview: 'https://pure-mountain-6560.herokuapp.com/'
      },
      {
        title: "Asteroids",
        img: '/images/asteroids.png',
        github: 'https://github.com/leedu708/assignment_js_oop',
        preview: 'https://htmlpreview.github.io/?https://github.com/leedu708/assignment_js_oop/blob/master/index.html'
      }
    ];

  }]);