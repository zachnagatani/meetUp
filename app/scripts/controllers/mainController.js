meetUp.controller('mainController', ['$scope', '$state', function($scope, $state) {
	// Simple redirect to signup page upon loading the root url
	$state.go('signup');
}]);