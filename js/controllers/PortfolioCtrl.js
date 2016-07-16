leedu.controller('PortfolioCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Portfolio';

    $scope.projects = [
      {
        title: 'Evergreen',
        description: 'A curation platform where users can share their favorite online resources. The application features a CMS only accessible to admin users for controlling the collections and site information. To access the seeded Admin account, login using email: admin@test.com / password: password',
        tech: 'Ruby on Rails, AngularJS, Bootstrap, JavaScript, HTML5, CSS3, RSpec, Heroku',
        img: '/images/evergreen.jpg',
        github: 'https://github.com/leedu708/evergreen',
        preview: 'http://fast-shore-10637.herokuapp.com/'
      },
      {
        title: 'FreudenbergArts',
        description: 'An E-Commerce built on WordPress using a modified version of the eStore theme.  Products and orders are managed through the WordPress plugin, WooCommerce.',
        tech: 'WordPress, PHP, HTML5, CSS3, JavaScript, jQuery',
        img: '/images/freudenbergarts.jpg',
        preview: 'http://www.freudenbergarts.com'
      },
      {
        title: 'Danebook',
        description: 'Full-featured social network site built with Ruby on Rails. Includes image uploading with Amazon S3 and production on Heroku.',
        tech: 'Ruby on Rails, AJAX, jQuery, Bootstrap, RSpec, Amazon S3, Heroku',
        img: '/images/danebook.png',
        github: 'https://github.com/leedu708/danebook',
        preview: 'http://blooming-tundra-4486.herokuapp.com/'
      },
      {
        title: 'Djello',
        description: 'A single page application that aims to smooth the process of assigning team members to particular tasks and prioritizing them while they are being worked on.',
        tech: 'Ruby on Rails, AngularJS, JavaScript, HTML5, CSS3, Heroku',
        img: '/images/djello.png',
        github: 'https://github.com/leedu708/project_djello',
        preview: 'http://djl-djello.heroku.com/'
      },
      {
        title: 'Tetris',
        description: 'A tetris clone built on JavaScript featuring jQuery.  The board is built on a grid with coordinates set as data in the DOM.',
        tech: 'JavaScript, jQuery, HTML5, CSS3',
        img: '/images/tetris.png',
        github: 'https://github.com/leedu708/project_tetris_js',
        preview: 'https://htmlpreview.github.io/?https://github.com/leedu708/project_tetris_js/blob/master/tetris.html'
      },
      {
        title: 'Uber Challenge',
        description: 'A service that tells the user what types of food trucks might be found near a specific location on a map.',
        tech: 'Ruby on Rails, jQuery, JavaScript, HTML5, CSS3, Google Maps API',
        img: '/images/uber.png',
        github: 'https://github.com/leedu708/uber_food_truck_challenge',
        preview: 'https://pure-mountain-6560.herokuapp.com/'
      },
      {
        title: "Asteroids",
        description: 'An asteroids clone built on JavaScript featuring jQuery.  The ship, asteroids, and bullets are drawn with HTML5 canvas.',
        tech: 'JavaScript, jQuery, HTML5, CSS3',
        img: '/images/asteroids.png',
        github: 'https://github.com/leedu708/assignment_js_oop',
        preview: 'https://htmlpreview.github.io/?https://github.com/leedu708/assignment_js_oop/blob/master/index.html'
      }
    ];

    $scope.flippedCards = [];

    $scope.flip = function(project) {
      $scope.flippedCards.push(project);
    };

    $scope.closeFlip = function(removed) {
      $scope.flippedCards = $scope.flippedCards.filter( function(project) {
        return project.title !== removed.title;
      });
    };

    $scope.flipped = function(project) {
      return ($scope.flippedCards.indexOf(project) > -1);
    };

  }]);