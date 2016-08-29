meetUp.controller('createEventController', function($scope, $state, $timeout) {
		$('#myModal').modal();

		$('#myModal').on('shown.bs.modal', function () {
		    setTimeout(function (){
		        $('#event-name').focus();
		    }, 100);

		});

		$scope.eventName = '';

		$scope.close = close;

		// Go back to dashboard state
		function close() {
			$('#myModal').modal('hide');
			$timeout(function(){
				$state.go('dashboard');
			}, 200);
		};
});