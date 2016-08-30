(function() {
	'use strict';
	
	meetUp.controller('editEventController', ['$scope', '$state', '$timeout', function($scope, $state, $timeout) {
			// Open's the bootstrap modal when route is switched to edit
			$('#edit-modal').modal();
			// Autofocus the first input field after 100ms (HTML5 autofocus)
			// does not work properly with Bootstrap modal
			$('#edit-modal').on('shown.bs.modal', function () {
			    $timeout(function (){
			        $('#event-name').focus();
			    }, 100);

			});

			// Initialize as empty string for two-way binding in event fields
			$scope.eventName = '';
			$scope.cancelEdit = cancelEdit;
			$scope.event = $state.params.event;
			var eventSnapshot = $state.params.eventSnapshot
			$scope.saveEdit = saveEdit;

			// Go back to dashboard state
			function cancelEdit() {
				$('#edit-modal').modal('hide');
				$timeout(function(){
					$state.go('dashboard');
				}, 200);
			};

			function saveEdit() {
				$('#editEventForm').on('submit', function() {
					$('#edit-modal').modal('hide');
					$timeout(function(){
						$state.go('dashboard');
					}, 200);
				});
			};
	}]);
})();