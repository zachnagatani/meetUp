var meetUp = angular.module('meetUp', ['ui.router', 'ngMessages']);

meetUp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('signup', {
			url:'/signup',
			templateUrl: 'templates/signup.html',
			controller: 'signUpController'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'templates/dashboard.html',
			controller: 'dashboardController'
		})
		.state('dashboard.create', {
			url: '/create',
			templateUrl: 'templates/createEvent.html',
			controller: 'createEventController'
		})
		.state('dashboard.edit', {
			url: '/edit/:id',
			templateUrl: 'templates/editEvent.html',
			controller: 'editEventController',
			params: {
				event: null,
				eventSnapshot: null
			}
		});
});




