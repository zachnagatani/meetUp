(function() {
	'use strict';

	meetUp.controller('editEventController', ['$scope', '$state', '$timeout', function($scope, $state, $timeout) {
			// Open the edit modal upon arriving at this state
			$('#edit-modal').modal();

			// When the edit modal is shown,
			$('#edit-modal').on('shown.bs.modal', function () {
				// Wait 1/10 of a second (avoids bootstrap's animation from cancelling autofocus)
			    setTimeout(function (){
			    	// and auto focus on the eventName input
			        $('#eventName').focus();
			    }, 100);

			});

			// Functions to be stored on the $scope

			// When the cancel button is selected, 
			function cancelEdit() {
				// Close the modal,
				$('#edit-modal').modal('hide');
				// Wait 1/2 second to allow bootstrap's animation to finish,
				$timeout(function(){
					// and go back to the dashboard state
					$state.go('dashboard');
				}, 500);
			};

			// When the user finishes entering a date (ng-change is used to watch),
			function checkDate(form) {
				// store the values of the inputs in local variables, create
				// new date objects from them for safety, and run getTime
				// to convert them to a numerical value for comparison
				let startVal = new Date($('#start').val()).getTime();
				let endVal = new Date($('#end').val()).getTime();
				let now = new Date().getTime();
				console.log(now);
				console.log(startVal);

				// If the end date's value is less than the start date's value,
				if (endVal < startVal) {
					// set the end input to invalid
					form.end.$setValidity('endDateBefore', false);
				// or if the end time is the same as the start time 
				} else if (endVal === startVal) {
					// set the end input to invalid
					form.end.$setValidity('endDateSame', false);
				// or if the start time is before the current time
				// (25,200,000 is the number of ms in 7 hours)
				// new Date().getTime() is converting the start
				// input's value incorrectly, and this makes up for the error
				} else if (startVal + 25200000 < now) {
					// set the start input to invalid
					form.start.$setValidity('startDatePast', false);
				// if all is well,
				} else {
					// ensure all input error cases are now valid
					form.end.$setValidity('endDate', true);
					form.end.$setValidity('endDateSame', false);
					form.start.$setValidity('startDatePast', true);
				}
			};

			// When the save button is selected,
			function saveEdit() {
				// check if the form was submitted; if so,
				$('#editEventForm').on('submit', function(event, form) {
					// close the edit modal,
					$('#edit-modal').modal('hide');
					// wait 1/2 seconds to finish bootstrap's animation,
					$timeout(function(){
						// and go back to the dashboard state
						$state.go('dashboard');
					}, 500);
				});
			};

			// When the description checkbox is selected,
			function toggleAddDescription() {
				// ng-show is used based on $scope.addDescription to either hide or show the description
				// textarea
				!$scope.addDescription ? $scope.addDescription = true : $scope.addDescription = false;
			};

			// Methods and properties placed onto $scope
			// Initialize as empty string for two-way binding in event fields
			$scope.eventName = '';
			// Grab the event from state params passed from the dashboard state
			$scope.event = $state.params.event;
			$scope.checkDate = checkDate;
			$scope.saveEdit = saveEdit;
			$scope.cancelEdit = cancelEdit;
			// Initial value of addDescription ensures the textarea is hidden by default
			$scope.addDescription = false;
			$scope.toggleAddDescription = toggleAddDescription;

			// Go to dashboard when user clicks away from modal
			// Prevents modal from closing without changing states
			$('#edit-modal').on('hidden.bs.modal', function (e) {
				$state.go('dashboard');
			});
	}]);
})();