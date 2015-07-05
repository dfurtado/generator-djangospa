(function() {
	'use strict';

	var routeConfig = function($routeProvider) {

		$routeProvider
			.when("/", {
				templateUrl: '/static/view_templates/index.html',
				controller: 'mainController'
			})
			.when("/about", {
				templateUrl: '/static/view_templates/about.html',
				controller: 'aboutController'
			})
			.when("/contact", {
				templateUrl: '/static/view_templates/contact.html',
				controller: 'contactController'
			});
	};

	var onRun = function($rootScope, $location) {
		$rootScope.$on('$routeChangeStart', function(evt, next, current) {
			$rootScope.currentView = next.$$route.originalPath;
		});
	};

	var mainController = function($scope, $route) {
		$scope.header = "Hello, Django!"	
	};

	var aboutController = function($scope) {
		$scope.header = "About"
	};

	var contactController = function($scope) {
		$scope.header = "Contact"
	};

	angular.module("mainModule", ["ngRoute"])	
		.controller('mainController', mainController)
		.controller('aboutController', aboutController)
		.controller('contactController', contactController)
		.config(routeConfig)
		.run(onRun);

}());