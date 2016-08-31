(function() {
	'use strict';
	
	meetUp.controller('editEventController', ['$scope', '$state', '$timeout', function($scope, $state, $timeout) {
			// Open's the bootstrap modal when route is switched to edit
			$('#edit-modal').modal();
			// Autofocus the first input field after 100ms (HTML5 autofocus)
			// does not work properly with Bootstrap modal
			$('#edit-modal').on('shown.bs.modal', function () {
			    $timeout(function (){
			        $('#eventName').focus();
			    }, 100);

			});

			// Initialize as empty string for two-way binding in event fields
			$scope.eventName = '';
			$scope.cancelEdit = cancelEdit;
			$scope.event = $state.params.event;
			$scope.saveEdit = saveEdit;
			$scope.addDescription = false;
			$scope.toggleAddDescription = toggleAddDescription;

			// Go back to dashboard state
			function cancelEdit() {
				$('#edit-modal').modal('hide');
				$timeout(function(){
					$state.go('dashboard');
				}, 500);
			};

			function saveEdit() {
				$('#editEventForm').on('submit', function() {
					$('#edit-modal').modal('hide');
					$timeout(function(){
						$state.go('dashboard');
					}, 500);
				});
			};

			function toggleAddDescription() {
				!$scope.addDescription ? $scope.addDescription = true : $scope.addDescription = false;
			};
	}]);
})();