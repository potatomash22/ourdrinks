app.factory('data', ['$http', function($http) {
	return {
		getRooms: function() {
			return $http.get('api/rooms',{cache:true});
		},
		getDrinks: function() {
			return $http.get('api/drinks',{cache:true});
		},
		getOrders: function(roomid) {
			return $http.get('api/rooms/' + roomid + '/orders',{cache:true});
		}
	}
}]);
