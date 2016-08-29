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

	function editEvent() {
		$state.go('dashboard.edit');
	};

	$scope.$on('newEvent', function(event, newEvent) {
		console.log(newEvent);
	});
});