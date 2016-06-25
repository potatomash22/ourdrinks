app.controller('HeaderController', ['$rootScope', '$scope', '$state', '$location', function($rootScope, $scope, $state, $location) {
	
	$scope.headerVisible = false;
	$scope.viewlevel = 0;

	var views = [
		'/rooms',
		'/drinks',
		'/profile'
	];

	$scope.back = function() {
		var nextlevel = $scope.viewlevel - 1;
		if(nextlevel != 0) {
			$location.path(views[nextlevel]);
		} else {
			$location.path(views[nextlevel]);
			$rootScope.roomnumber = null;
		}
	}

	$scope.goProfile = function() {
		$location.path('/profile');
	}

	/* Listen for state changes */
	$scope.$on('$stateChangeSuccess', function () {
		$scope.headerVisible = $state.current.name != 'rooms' ? true : false;
		$scope.viewlevel = $state.current.data.pageLevel;
	})
}]);