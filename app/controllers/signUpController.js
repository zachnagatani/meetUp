(function(){
	meetUp.controller('signUpController', ['$scope', '$state', function($scope, $state){
		// $scope.submit = submit;

		// Function to submit sign up form and transition to dashboard
		$scope.submit = function submit() {
			$state.go('dashboard');
		}
	}]);
})();