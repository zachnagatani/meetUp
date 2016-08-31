(function() {
	meetUp.controller('signUpController', ['$scope', '$state', function($scope, $state){
		$scope.submit = submit;

		$scope.additionalInfo = false;

		$scope.toggleAdditionalInfo = toggleAdditionalInfo;

		// Function to submit sign up form and transition to dashboard
		function submit() {
			$('#signUp').on('submit', function() {
				$state.go('dashboard');
			});
		};

		function toggleAdditionalInfo() {
			!$scope.additionalInfo ? $scope.additionalInfo = true : $scope.additionalInfo = false;
		};
	}]);
})();