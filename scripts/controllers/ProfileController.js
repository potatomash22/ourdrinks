/*
	Controller to handle app remote data
*/
app.controller('ProfileController', ['$rootScope', '$scope', '$state', 'data', function($rootScope, $scope, $state, data) {
	$scope.currentView = $state.current.name;
	$scope.orders = [];
	$scope.loaded = false;

	data.getOrders($rootScope.room.id).then(function(res) {
		$scope.orders = res.data;
		$scope.loaded = true;
	});
}]);