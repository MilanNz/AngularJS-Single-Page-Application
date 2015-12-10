var singlePage = angular.module('singlePage', ['ngRoute']);

// index controller
singlePage.controller('mainController', ['$scope', function($scope) {
	$scope.message = 'Wellcome';
}]);

// contact controller
singlePage.controller('contactController', ['$scope', function($scope) {
	$scope.message = 'Contact';
}]);

// about us controller
singlePage.controller('aboutusController', ['$scope', function($scope) {
	$scope.message = 'About us';
}]);


// Applicaiton configuration
singlePage.config(function($routeProvider, $locationProvider){
	$routeProvider
            // route index page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
			// route about us page
            .when('/aboutus', {
                templateUrl : 'pages/aboutus.html',
                controller  : 'aboutusController'
            })
            // route contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
			
			// use the HTML5 History API
			//$locationProvider.html5Mode(true);
});