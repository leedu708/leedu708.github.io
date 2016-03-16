leedu.controller('AboutCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'About';

    $scope.aboutContent = [
      {
        img: '/images/placeholder.png',
        imgRight: false,
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc ultrices libero vehicula hendrerit id sed risus. Morbi sed tristique magna. Curabitur commodo ultricies nisi et lacinia. Nunc vel dapibus felis, quis faucibus dolor. Aliquam erat volutpat. Donec commodo metus a orci consectetur lobortis. Integer condimentum urna et ipsum rutrum, nec auctor nibh tincidunt. Nam id ipsum mi. In ullamcorper varius dui, id feugiat metus iaculis et. Integer tincidunt nulla commodo, molestie turpis a, sagittis urna.'
      },
      {
        img: '/images/placeholder.png',
        imgRight: true,
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc ultrices libero vehicula hendrerit id sed risus. Morbi sed tristique magna. Curabitur commodo ultricies nisi et lacinia. Nunc vel dapibus felis, quis faucibus dolor. Aliquam erat volutpat. Donec commodo metus a orci consectetur lobortis. Integer condimentum urna et ipsum rutrum, nec auctor nibh tincidunt. Nam id ipsum mi. In ullamcorper varius dui, id feugiat metus iaculis et. Integer tincidunt nulla commodo, molestie turpis a, sagittis urna.'
      },
      {
        img: '/images/placeholder.png',
        imgRight: false,
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc ultrices libero vehicula hendrerit id sed risus. Morbi sed tristique magna. Curabitur commodo ultricies nisi et lacinia. Nunc vel dapibus felis, quis faucibus dolor. Aliquam erat volutpat. Donec commodo metus a orci consectetur lobortis. Integer condimentum urna et ipsum rutrum, nec auctor nibh tincidunt. Nam id ipsum mi. In ullamcorper varius dui, id feugiat metus iaculis et. Integer tincidunt nulla commodo, molestie turpis a, sagittis urna.'
      }
    ];

  }]);