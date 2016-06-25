/* 
	headerbar template
	use <headerbar> in html
*/
app.directive('headerbar', function() {
	return {
		strict: 'E',
		templateUrl: 'templates/headerbar.html',
		controller: 'HeaderbarController'
	}
})

/*
	Spinner template
	use <spinner> element
*/
app.directive('spinner', function() {
	return {
		strict: 'E',
		templateUrl: 'templates/spinner.html'
	}
})
