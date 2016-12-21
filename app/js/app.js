
angular.module('EchartsPage', [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'angular-loading-bar',

    'EchartsPage.controllers',
    'EchartsPage.directives',
    'EchartsPage.services',
    'EchartsPage.utility'
])

.run(['Initialization', 'cfpLoadingBar', function (Initialization, cfpLoadingBar) {
    cfpLoadingBar.start();
    Initialization.finally(function () {
        cfpLoadingBar.complete();
    });
}])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'cfpLoadingBarProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, cfpLoadingBarProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'tpls/home.html',
                controller: 'HomeController',
                resolve: {
                    'loading': ['Initialization', function (Initialization) {
                        return Initialization;
                    }]
                }
            });

        $urlRouterProvider.otherwise('/home');

        // $locationProvider.html5Mode(true).hashPrefix('!');

        cfpLoadingBarProvider.includeSpinner = false;
    }
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['EchartsPage']);
});
