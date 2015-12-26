var mobileStoreApp = angular.module('mobileStoreApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

mobileStoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/home', {
		templateUrl: 'template/user/home.html',
		controller: 'HomeController'
		}).

		when('/contact', {
		templateUrl: 'template/user/contact.html'
		}).

		when('/about', {
		templateUrl: 'template/user/about.html'
		}).

		when('/showproductbycategory', {
		templateUrl: 'template/user/showproductbycategory.html',
		controller: 'ShowProductByCategoryController'
		}).

		when('/shoppingcart', {
		templateUrl: 'template/user/shoppingcart.html',
		controller: 'ShoppingCartController'
		}).

		when('/productdetail', {
		templateUrl: 'template/user/productdetail.html',
		controller: 'ProductDetailController'
		}).

		otherwise({
		redirectTo: '/home'
		});
  }]);
