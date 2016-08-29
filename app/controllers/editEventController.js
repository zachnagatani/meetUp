meetUp.controller('editEventController', function($scope, $state, $timeout) {
		// Open's the bootstrap modal when route is switched to edit
		$('#myModal').modal();
		// Autofocus the first input field after 100ms (HTML5 autofocus)
		// does not work properly with Bootstrap modal
		$('#myModal').on('shown.bs.modal', function () {
		    $timeout(function (){
		        $('#event-name').focus();
		    }, 100);

		});

		$scope.close = close;

		// Go back to dashboard state
		function close() {
			$('#myModal').modal('hide');
			$timeout(function(){
				$state.go('dashboard');
			}, 200);
		};
});