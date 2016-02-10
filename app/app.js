var mainModule = angular.module('mainModule', ['navModule','navFooter', 'common', 'ngRoute', 'ui.bootstrap']);
mainModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'aboutMeCtrl',
                controllerAs: 'abtMeCtrl'
            })
            .when('/aboutMe', {
                templateUrl: 'aboutme.html',
                controller: 'aboutMeCtrl',
                controllerAs: 'abtMeCtrl'
            })
            .when('/myproject', {
                templateUrl: 'myproject.html',
                controller: 'aboutMeCtrl',
                controllerAs: 'abtMeCtrl'
            })
            .when('/myEducation', {
                templateUrl: 'myEducation.html',
                controller: 'aboutMeCtrl',
                controllerAs: 'abtMeCtrl'
            })
            .when('/contact', {
                templateUrl: 'contactMe.html',
                controller: 'aboutMeCtrl',
                controllerAs: 'abtMeCtrl'
            })
            .otherwise({
                redirectTo: 'index.html'
            });
    }
]);