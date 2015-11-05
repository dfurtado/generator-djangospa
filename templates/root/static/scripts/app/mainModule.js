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
				controller: 'contactController'
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
	};

	var aboutController = function() {
		this.header = "About"
	};

	var contactController = function() {
		this.header = "Contact"
	};

	angular.module("mainModule", ["ngRoute"])	
		.controller('mainController', mainController)
		.controller('aboutController', aboutController)
		.controller('contactController', contactController)
		.config(routeConfig)
		.run(onRun);

}());
