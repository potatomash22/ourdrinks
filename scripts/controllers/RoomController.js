/*
	Controller to handle app remote data
*/
app.controller('RoomController', ['$rootScope', '$scope', '$state', '$location', 'data', function($rootScope, $scope, $state, $location, data) {
	$scope.currentView = $state.current.name;
	$scope.rooms = [];
	$scope.loaded = false;

	data.getRooms().then(function(res) {
		$scope.rooms = res.data;
		$scope.loaded = true;
		console.log(res);
	});

	$scope.chooseRoom = function(id, number) {
		$rootScope.room.id = id;
		$rootScope.room.number = number;

		$location.path('/drinks');
	}
}]);
