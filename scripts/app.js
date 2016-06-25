/*
	Main app script file
*/
var app = angular.module('JustDrinkApp', ['ui.router', 'ngAnimate']);

/*
	Setup states & routing	
*/
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('rooms', {
		url: "/",
		templateUrl: "views/rooms.html",
		data: {pageLevel: 0},
		controller: "RoomController"
	})

	.state('drinks', {
		url: "/drinks",
		templateUrl: "views/drinks.html",
		data: {pageLevel: 1},
		controller: "DrinkController"
	})

	.state('profile', {
		url: "/profile",
		templateUrl: "views/profile.html",            
		data: {pageLevel: 2},
		controller: "ProfileController"
	})

	// .state('404', {
	// 	url: "/404",
	// 	templateUrl: "views/404.html",            
	// 	data: {pageTitle: '404'},
	// 	controller: "ErrorController"
	// }) 

}]);

/*
	Disable touch event delay on mobile
*/
app.run(function($rootScope) {
    FastClick.attach(document.body);
    $rootScope.room = {};
});