(function() {
	'use strict';

	meetUp.controller('createEventController', ['$scope', '$state', '$timeout', function($scope, $state, $timeout) {
			$('#create-modal').modal();

			$('#create-modal').on('shown.bs.modal', function () {
			    setTimeout(function (){
			        $('#event-name').focus();
			    }, 100);

			});

			// Initialize as empty string for two-way binding in event fields
			$scope.event = {};

			$scope.saveEvent = saveEvent;

			$scope.close = close;

			// Go back to dashboard state
			function close() {
				$('#create-modal').modal('hide');
				$timeout(function(){
					$state.go('dashboard');
				}, 5000);
			};

			function saveEvent() {
				$('#createEventForm').on('submit', function() {
					console.log($scope.event);
					$scope.$emit('newEvent', $scope.event);
					$('#create-modal').modal('hide');
					$timeout(function(){
						$state.go('dashboard');
					}, 5000);
				});
			};
	}]);
})();