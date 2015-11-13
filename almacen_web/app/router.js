app

.config(function ($routeProvider) {
	// body...
	$routeProvider.when("/saludo",{
		"templateUrl": "app/views/saludo.html"
	});
	$routeProvider.when("/categoria",{
		"templateUrl": "app/views/categoria.html"
	});
});

app.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    // $httpProvider.defaults.headers.post['Content-Type'] = undefined;
    // $httpProvider.defaults.headers.put['Content-Type'] = undefined;
}])

.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);