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

	var onRun = function($rootScope, $location) {
		$rootScope.$on('$routeChangeStart', function(evt, next, current) {
			$rootScope.currentView = next.$$route.originalPath;
		});
	};

	var mainController = function($route) {
		this.header = "Hello, Django!"	
		this.message = "This is a Django single page application created with "
		this.url = "https://github.com/dfurtado/generator-djangospa"
		this.project = "generator-djangospa"
		this.items = [
			{ "heading": "Heading 1",
			  "description": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
			  "button": "Learn more \u00bb"
			},
			{ "heading": "Heading 2",
			  "description": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
			  "button": "Learn more \u00bb"
			},
			{ "heading": "Heading 3",
			  "description": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
			  "button": "View details \u00bb"
			}
		]
	};

	var aboutController = function() {
		this.header = "About"
		this.message = "Learn all about the awesome stuff we "
		this.things = [
			{ "url": "https://www.djangoproject.com/", 
			  "name": "Django" },
			{ "url": "http://www.django-rest-framework.org/", 
			  "name": "Django REST framework"},
			{ "url": "http://getbootstrap.com/", 
			  "name": "Bootstrap" },
			{ "url": "https://angularjs.org/", 
			  "name": "Angular JS" },
			{ "url": "http://yeoman.io/", 
			  "name": "Yeoman" },
			{ "url": "https://jquery.com/", 
			  "name": "Jquery" },
			{ "url": "http://bower.io/", 
			  "name": "Bower" },
			{ "url": "http://gruntjs.com/", 
			  "name": "Grunt" }
		]
	};

	var contactController = function() {
		this.header = "Contact"
		this.contacts = [
			{ "name": "Project's website",
			  "url": "https://github.com/dfurtado/generator-djangospa"
			},
			{
			  "name": "Bug reporting",
			  "url": "https://github.com/dfurtado/generator-djangospa/issues"
			}
		]
	};

	angular.module("mainModule", ["ngRoute"])	
		.controller('mainController', mainController)
		.controller('aboutController', aboutController)
		.controller('contactController', contactController)
		.config(routeConfig)
		.run(onRun);

}());
