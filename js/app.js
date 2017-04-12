(function () {
    'use strict';

    angular.module('marcosvrs', ['ui.router', 'ngAnimate', 'ngTouch', /*'ngCookie', 'ui.scrollpoint',*/ 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('marcosvrs', {
                    abstract: true,
                    url: '',
                    views: {
                        'nav@': {
                            templateUrl: 'views/navbar.html',
                            controller: 'NavbarController as navbar'
                        },
                        'header@': {
                            templateUrl: 'views/header.html',
                            controller: 'AppController as app'
                        },
                        'footer@': {
                            templateUrl: 'views/footer.html',
                            controller: 'AppController as app'
                        }
                    }
                })
                .state('marcosvrs.home', {
                    url: '/',
                    order: 1,
                    views: {
                        '@': {
                            controller: 'HomeController as home',
                            templateUrl: 'views/home.html'
                        }/*,
                        'header@': {
                            template: '<h1 class="text-center">Who is Marcos?</h1><hr></hr>'
                        }*/
                    }
                })
                .state('marcosvrs.resume', {
                    url: '^/resume',
                    order: 2,
                    views: {
                        '@': {
                            controller: 'ResumeController as resume',
                            templateUrl: 'views/resume.html'
                        }
                    }
                })
                .state('marcosvrs.about', {
                    url: '^/about',
                    order: 3,
                    views: {
                        '@': {
                            controller: 'AboutController as about',
                            templateUrl: 'views/about.html'
                        }
                    }
                })
                .state('marcosvrs.contact', {
                    url: '^/contact',
                    order: 4,
                    views: {
                        '@': {
                            controller: 'ContactController as contact',
                            templateUrl: 'views/contact.html'
                        },
                        'footer@': {}
                    }
                });

            $urlRouterProvider.otherwise('/');

            $locationProvider.html5Mode(true);
        });
})();