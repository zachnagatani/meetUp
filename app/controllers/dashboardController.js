meetUp.controller('dashboardController', function($scope, $state, $http) {
	$scope.createEvent = createEvent;
	$scope.editEvent = editEvent;
	$scope.deleteEvent = deleteEvent;
	$scope.confirmDelete = confirmDelete;
	$scope.event = null;
	$scope.events = [];
	getEvents()
		.then(function(response){
			response.data.forEach(function(event) {
				$scope.events.push(event);
			});
		});

	function getEvents() {
		return $http.get('/events.json')
	};

	function createEvent() {
		$state.go('dashboard.create');
	};

	$scope.$on('newEvent', function(event, newEvent) {
		newEvent.id = $scope.events.length + 1;
		$scope.events.push(newEvent);
	});

	function editEvent(event) {
		console.log(event);
		$state.go('dashboard.edit', {
			id: event.id,
			event: event,
			eventSnapshot: event
		});
	};

	function deleteEvent(event) {
		$('#alert-modal').modal();
		$scope.event = event;
	};

	function confirmDelete() {
		$('#alert-modal').modal('hide');
		let index = $scope.events.indexOf($scope.event);
		$scope.events.splice(index, 1);
	};
});