(function() {
	'use strict';

	meetUp.controller('dashboardController', ['$scope', '$state', '$http', function($scope, $state, $http) {
		// Functions to be placed on scope for access
		
		// When create link is clicked,
		function createEvent() {
			// move to create state
			$state.go('dashboard.create');
		};

		// When edit link is clicked,
		function editEvent(event) {
			// move to edit state and pass in route params so edit state can access them
			$state.go('dashboard.edit', {
				// id param = the id of the event
				id: event.id,
				// the event param is the event object itself
				event: event,
			});
		};

		// When delete link is clicked,
		function deleteEvent(event) {
			// pop up an alert/confirmation modal
			$('#alert-modal').modal();
			// place the event on the scope for access
			$scope.event = event;
		};

		// If deletion is confirmed,
		function confirmDelete() {
			// hide the alert modal,
			$('#alert-modal').modal('hide');
			// grab the index of the event in our $scope.events array,
			let index = $scope.events.indexOf($scope.event);
			// and delete it from the array
			$scope.events.splice(index, 1);
		};

		// Functions and properties placed on $scope for access
		$scope.confirmDelete = confirmDelete;
		$scope.createEvent = createEvent;
		$scope.deleteEvent = deleteEvent;
		$scope.editEvent = editEvent;
		$scope.events = [];
		$scope.event = null;

		// When a new event is created from the create state, listen for it, 
		$scope.$on('newEvent', function(event, newEvent) {
			// set the id of the event to one greater than the length of $scope.events
			// This will be automated by a database eventually
			newEvent.id = $scope.events.length + 1;
			// Push the newly created event onto $scope.events
			$scope.events.push(newEvent);
		});

		$scope.signup = function() {
			$state.go('signup');
		}
	}]);
})();