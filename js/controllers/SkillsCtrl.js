leedu.controller('SkillsCtrl',
  ['$scope', '$rootScope',
  function($scope, $rootScope) {

    $rootScope.title = 'Resume';
    $scope.education = {
      title: 'Education',
      schools: [
        {
          name: 'Cornell University, College of Agriculture and Life Sciences',
          location: 'Ithaca, NY',
          description: 'Bachelor of Science in Biological Engineering, January 2015'
        },
        {
          name: 'Viking Code School',
          location: '',
          description: 'Major technologies taught include: Ruby, Ruby on Rails, AngularJS, SQL, Data Modeling, HTML5, CSS3, JavaScript, RSpec, and Git.  Completed December 2015'
        }
      ]
    };

    $scope.skills = {
      title: 'Skills',
      frontend: [
        'JavaScript',
        'AngularJS',
        'jQuery',
        'HTML5',
        'CSS3',
        'Bootstrap'
        ],
      backend: [
        'Ruby',
        'Rails',
        'SQL',
        'SASS',
        'PostgreSQL',
        'RSpec',
        'Capybara',
        'RESTful APIs',
        'Heroku'
        ],
      general: [
        'Git',
        'Ubuntu Linux',
        'Sublime Text 3',
        'AWS',
        'Agile Methodologies',
        'Matlab'
        ]
    }

    $scope.experience = {
      title: 'Experience',
      jobs: [
        {
          workplace: 'Elmhurst Medical Clinic',
          location: 'Elmhurst, NY',
          time: '2013 - Present',
          title: 'Tech Support Administrator',
          bullets: [
            'Prepare documentation of Electronic Medical Record (EMR) system for known errors',
            'Install and maintain local server for remote access to patient profiles'
            ]
        },
        {
          workplace: 'Cornell University',
          location: 'Ithaca, NY',
          time: '1/2015 - 5/2015',
          title: 'Research Assistant, Cornell BEE Program',
          bullets: [
            'Organized and analyzed data from a simulated Mars landing using Matlab',
            'Authored documentation for the research program: HI-SEAS Documentation'
            ]
        },
        {
          workplace: 'Beth Israel Medical Center',
          location: 'New York, NY',
          time: '2008 - 2013',
          title: 'Lead Research Assistant, Asian Services Program',
          bullets: [
            'Surveyed patients in English and Cantonese',
            'Analyze and organize data on patients using Excel forms'
            ]
        },
        {
          workplace: 'Law Office of Zelda L. Lee, P.C.',
          location: 'Queens, NY',
          time: '2010 - 2015',
          title: 'Tech Support Administrator',
          bullets: [
            'Installed VNC server and security system for remote viewing',
            'Installed centralized fax server'
            ]
        }
      ]
    };

  }]);