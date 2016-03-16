leedu.controller('ResumeCtrl',
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
        'JavaScript / jQuery',
        'AngularJS',
        'HTML5',
        'CSS3',
        'SASS',
        'Bootstrap'
        ],
      backend: [
        'Ruby / Rails',
        'SQL',
        'PostgreSQL',
        'RSpec / Capybara',
        'RESTful APIs',
        'Heroku'
        ],
      general: [
        'Git',
        'AWS',
        'Matlab',
        'Ubuntu Linux',
        'Sublime Text 3',
        'Agile Methodologies'
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
            'Install and maintain local server for remote access to patient profiles',
            'Monitor, analyze and evaluate issues related to Windows Server 2008 that services eClinicalWorks'
            ]
        },
        {
          workplace: 'Cornell University',
          location: 'Ithaca, NY',
          time: '9/2014 - 12/2014',
          title: 'Research Assistant, Cornell BEE Program',
          bullets: [
            'Organized and analyzed data from a simulated Mars landing using Matlab',
            'Authored documentation for the research program: HI-SEAS Documentation'
            ]
        },
        {
          workplace: 'Westbury Friends School',
          location: 'Westbury, NY',
          time: '3/2015 - 8/2015',
          title: 'Tech Support, Security Management',
          bullets: [
            "Setup computers for the school's administrative office",
            'Synchronized files between old and new computers',
            'Setup outlook email server',
            'Provide technical support for Windows 8.1'
          ]
        },
        {
          workplace: 'Beth Israel Medical Center',
          location: 'New York, NY',
          time: '2008 - 2013',
          title: 'Lead Research Assistant, Asian Services Program',
          bullets: [
            'Surveyed patients in English and Cantonese',
            'Analyze and organize data on patients using Excel forms',
            'Assisted in publishhing the patient care website with emphasis towards the Asian community'
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