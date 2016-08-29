var meetUp = angular.module('meetUp', ['ui.router']);

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
});




