leedu.controller('PortfolioCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Portfolio';

    $scope.projects = [
      {
        title: 'Evergreen',
        img: '/images/placeholder.png',
        github: 'https://github.com/leedu708/evergreen',
        preview: 'http://fast-shore-10637.herokuapp.com/'
      },
      {
        title: 'Danebook',
        img: '/images/placeholder.png',
        github: 'https://github.com/leedu708/danebook',
        preview: 'http://blooming-tundra-4486.herokuapp.com/'
      },
      {
        title: 'Djello',
        img: '/images/placeholder.png',
        github: 'https://github.com/leedu708/project_djello',
        preview: 'http://djl-djello.heroku.com/'
      },
      {
        title: 'Tetris',
        img: '/images/placeholder.png',
        github: 'https://github.com/leedu708/project_tetris_js',
        preview: 'https://htmlpreview.github.io/?https://github.com/leedu708/project_tetris_js/blob/master/tetris.html'
      },
      {
        title: 'Fideligard',
        img: '/images/placeholder.png',
        github: 'https://github.com/leedu708/assignment_fideligard_spa',
        preview: ''
      },
      {
        title: "Where's Waldo",
        img: '/images/placeholder.png',
        github: 'https://github.com/leedu708/project_wheres_waldo',
        preview: ''
      }
    ];

  }]);