(function() {
    'use strict';

    var routeConfig = function($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: '/static/view_templates/index.html',
                controller: 'mainController',
                controllerAs: 'main'
            })
            .when("/about", {
                templateUrl: '/static/view_templates/about.html',
                controller: 'aboutController',
                controllerAs: 'about'
            })
            .when("/contact", {
                templateUrl: '/static/view_templates/contact.html',
                controller: 'contactController',
                controllerAs: 'contact'
            })
            .otherwise({ redirectTo: '/' });
    };

    var httpConfig = function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    };

    var onRun = function($rootScope, $location) {
        $rootScope.$on('$routeChangeStart', function(evt, next, current) {
            $rootScope.currentView = next.$$route.originalPath;
        });
    };

    var PageFactory = function($resource) {            
            return $resource("/api/page/:id");
        };

    var ItemFactory = function($resource) {            
            return $resource("/api/item/:id");
    };   
    
    var mainController = function($route, PageFactory, ItemFactory, $scope) {
        PageFactory.get({ id: 1}, function(data) {
            $scope.pageHeader = data;            
        });
        
        ItemFactory.query(function(data) {
            $scope.pageItems = data;
        });        
    };

    var aboutController = function(PageFactory, ItemFactory, $scope) {
        PageFactory.get({ id: 2}, function(data) {
            $scope.pageHeader = data;
        });
        
        ItemFactory.query(function(data) {
            $scope.pageItems = data;
        });
    };

    var contactController = function(PageFactory, ItemFactory, $scope) {
        PageFactory.get({ id: 3}, function(data) {
            $scope.pageHeader = data;
        });
        
        ItemFactory.query(function(data) {
            $scope.pageItems = data;
        });
    };


    angular.module("mainModule", ["ngRoute", "ngResource"])   
        .factory('PageFactory', PageFactory)
        .factory('ItemFactory', ItemFactory)        
        .controller('mainController', mainController)
        .controller('aboutController', aboutController)
        .controller('contactController', contactController)
        .config(httpConfig)
        .config(routeConfig)
        .run(onRun);

}());
