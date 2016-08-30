meetUp.controller('createEventController', function($scope, $state, $timeout) {
		$('#myModal').modal();

		$('#myModal').on('shown.bs.modal', function () {
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
			$('#myModal').modal('hide');
			$timeout(function(){
				$state.go('dashboard');
			}, 200);
		};

		function saveEvent() {
			$('#create-event-form').on('submit', function() {
				$scope.$emit('newEvent', $scope.event);
				$('#myModal').modal('hide');
				$timeout(function(){
					$state.go('dashboard');
				}, 200);
			});
		};
});