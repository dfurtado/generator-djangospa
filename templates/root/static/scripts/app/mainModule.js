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
        
        $scope.showStatus = $scope.pageHeader;

        var dataOld = [
            {
                "Page":
                {
                    "pageid": "index",
                    "header": "Hello, Django!",
                    "message": "This is a Django single page application created with ",
                    "urltext": "https://github.com/dfurtado/generator-djangospa",
                    "project": "generator-djangospa",
                    "Items":
                    [
                        {
                            "name": "Heading 1",
                            "info": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
                            "button": "Learn more »",
                            "urltext": ""
                        },
                        {
                            "name": "Heading 2",
                            "info": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
                            "button": "Learn more »",
                            "urltext": ""
                        },
                        {
                            "name": "Heading 3",
                            "info": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
                            "button": "View details »",
                            "urltext": ""
                        }

                    ]                    
                }
            }
        ];
        
        this.header = dataOld[0].Page.header;
        this.message = dataOld[0].Page.message;
        this.url = dataOld[0].Page.urltext;
        this.project = dataOld[0].Page.project;   
        this.items = dataOld[0].Page.Items;   
    };

    var aboutController = function(PageFactory, ItemFactory, $scope) {
        PageFactory.get({ id: 2}, function(data) {
            $scope.pageHeader = data;
        });
        
        ItemFactory.query(function(data) {
            $scope.pageItems = data;
        });

        $scope.showStatus = $scope.pageHeader;
                
        var dataOld = [
            {
                "Page":
                {
                    "pageid": "about",
                    "header": "About",
                    "message": "Learn all about the awesome stuff we ",
                    "urltext": "",
                    "project": "",
                    "Items":
                    [
                        {
                            "name": "Django",
                            "info": "",
                            "button": "",
                            "urltext": "https://www.djangoproject.com/"                            
                        },
                        {
                            "name": "Django REST framework",
                            "info": "",
                            "button": "",
                            "urltext": "http://www.django-rest-framework.org/"                            
                        },
                        {
                            "name": "Bootstrap",
                            "info": "",
                            "button": "",
                            "urltext": "http://getbootstrap.com/"                            
                        },
                        {
                            "name": "Angular JS",
                            "info": "",
                            "button": "",
                            "urltext": "https://angularjs.org/"                            
                        },
                        {
                            "name": "Yeoman",
                            "info": "",
                            "button": "",
                            "urltext": "http://yeoman.io/"                            
                        },
                        {
                            "name": "Jquery",
                            "info": "",
                            "button": "",
                            "urltext": "https://jquery.com/"                            
                        },
                        {
                            "name": "Bower",
                            "info": "",
                            "button": "",
                            "urltext": "http://bower.io/"                            
                        },
                        {
                            "name": "Grunt",
                            "info": "",
                            "button": "",
                            "urltext": "http://gruntjs.com/"                            
                        }
                    ]                   
                }
            }
        ];
        
        this.header = dataOld[0].Page.header;
        this.message = dataOld[0].Page.message;
        this.url = dataOld[0].Page.urltext;
        this.project = dataOld[0].Page.project;   
        this.items = dataOld[0].Page.Items; 
    };

    var contactController = function(PageFactory, ItemFactory, $scope) {
        PageFactory.get({ id: 3}, function(data) {
            $scope.pageHeader = data;
        });
        
        ItemFactory.query(function(data) {
            $scope.pageItems = data;
        });
        
        $scope.showStatus = $scope.pageHeader;
        
        var dataOld = [
            {
                "Page":
                {
                    "pageid": "contact",
                    "header": "Contact",
                    "message": "",
                    "urltext": "",
                    "project": "",
                    "Items":
                    [
                        {
                            "name": "Project's website",
                            "info": "",
                            "button": "",
                            "urltext": "https://github.com/dfurtado/generator-djangospa"
                        },
                        {
                            "name": "Bug reporting",
                            "info": "",
                            "button": "",
                            "urltext": "https://github.com/dfurtado/generator-djangospa/issues"
                        }
                    ]                   
                }
            }
        ];
        
        this.header = dataOld[0].Page.header;
        this.message = dataOld[0].Page.message;
        this.url = dataOld[0].Page.urltext;
        this.project = dataOld[0].Page.project;   
        this.items = dataOld[0].Page.Items;  
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
