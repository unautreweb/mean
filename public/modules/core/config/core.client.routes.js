'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
        
        //School
		$stateProvider.
		state('school', {
			url: '/school',
			templateUrl: 'modules/school/views/layout.client.view.html'
		});
        
        //Search
		$stateProvider.
		state('search', {
			url: '/search',
			templateUrl: 'modules/search/views/layout.client.view.html'
		});

        //Formation
		$stateProvider.
		state('formation', {
			url: '/formation',
			templateUrl: 'modules/formation/views/layout.client.view.html'
		});

        //Formations
		$stateProvider.
		state('formations', {
			url: '/formations',
			templateUrl: 'modules/formations/views/layout.client.view.html'
		});
        
	}
]);