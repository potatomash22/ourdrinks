/*
	Controller to handle app remote data
*/
app.controller('DrinkController', ['$rootScope', '$scope', '$state', 'data', function($rootScope, $scope, $state, data) {
	$scope.currentView = $state.current.name;
	$scope.drinks = [];
	$scope.loaded = false;

	data.getDrinks().then(function(res) {
		$scope.drinks = res.data;
		$scope.loaded = true;
	});

	//---
}]);