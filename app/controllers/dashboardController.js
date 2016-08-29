meetUp.controller('dashboardController', function($scope, $state) {
	$('#myModal').modal();
	
	$scope.createEvent = createEvent;

	function createEvent() {
		$state.go('dashboard.create');
		$('#myModal').modal();
	};
});