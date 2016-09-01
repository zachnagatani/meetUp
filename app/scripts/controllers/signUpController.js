(function() {
	meetUp.controller('signUpController', ['$scope', '$state', function($scope, $state){
		// Functions to be added as methods on the $scope

		// When the submit button is selected,
		function submit() {
			// make sure the form is submitted,
			$('#signUp').on('submit', function() {
				// and head to the dashboard state
				$state.go('dashboard');
			});
		};

		// When the additional info checkbox is selected,
		function toggleAdditionalInfo() {
			// ng-show is used to toggle between true and false, hiding and showing the additional
			// input fields
			!$scope.additionalInfo ? $scope.additionalInfo = true : $scope.additionalInfo = false;
		};

		// Properties and methods added to $scope
		$scope.submit = submit;
		// Setting additionalInfo to false ensures the optional fields are hidden by default
		$scope.additionalInfo = false;
		$scope.toggleAdditionalInfo = toggleAdditionalInfo;
	}]);
})();