leedu.controller('AboutCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'About Me';

    // 380 char limit to text
    $scope.aboutContent = [
      {
        img: '/images/profile.png',
        imgRight: false,
        title: 'A Brief Background...',
        text: 'My interest in web development stems from my Engineering background. I enjoy solving problems in new ways.  There is always something we can do more efficiently. Some of my passions include writing clean code, producing beautiful applications, and all things musical.' //267
      },
      {
        img: '/images/placeholder.png',
        imgRight: true,
        title: 'A Few Fun Facts',
        text: "I love my ukulele. My childhood dog and cat were named Maggi and Kikkoman. My favorite color is green and by extension I enjoy the spring months the most. My game of choice right now is Hearthstone. I have never broken any bone in my body. I cook a mean steak and enjoy a wide array of cuisines." //295
      },
      {
        img: '/images/about3.png',
        imgRight: false,
        title: 'Musicality',
        text: 'Music has always been my creative outlet. I learned to play the piano from a young age. I come from a classical music background and have performed in great venues such as Steinway Hall, Tanglewood, and the Weill Recital Hall in Carnegie Hall. More recently, I have taken up the ukulele for its portability and beautiful sound.' //327
      }
    ];

  }]);