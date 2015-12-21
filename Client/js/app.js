var mobileStoreApp = angular.module('mobileStoreApp', ['ngRoute']);

mobileStoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/home', {
		templateUrl: 'template/user/home.html',
		controller: 'HomeController'
		}).
		when('/phones', {
		templateUrl: 'partials/phone-list.html',
		controller: 'PhoneListCtrl'
		}).
		when('/phones/:phoneId', {
		templateUrl: 'partials/phone-detail.html',
		controller: 'PhoneDetailCtrl'
		}).
		otherwise({
		redirectTo: '/home'
		});
  }]);
