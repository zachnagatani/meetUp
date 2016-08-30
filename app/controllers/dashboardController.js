meetUp.controller('dashboardController', function($scope, $state, $http) {
	$scope.createEvent = createEvent;
	$scope.editEvent = editEvent;
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
		$state.go('dashboard.edit', {
			id: event.id,
			event: event
		});
	};
});