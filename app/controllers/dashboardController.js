meetUp.controller('dashboardController', function($scope, $state) {
	$scope.createEvent = createEvent;
	$scope.editEvent = editEvent;

	function createEvent() {
		$state.go('dashboard.create');
	};

	function editEvent() {
		$state.go('dashboard.edit');
	};
});