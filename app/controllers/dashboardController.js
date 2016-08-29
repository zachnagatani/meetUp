meetUp.controller('dashboardController', function($scope, $state) {
	$scope.createEvent = createEvent;

	function createEvent() {
		$state.go('dashboard.create');
		$('#myModal').modal();
	};
});