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

		when('/showproductbycategory/:catId', {
		templateUrl: 'template/user/showproductbycategory.html',
		controller: 'ShowProductByCategoryController'
		}).

		when('/shoppingcart', {
		templateUrl: 'template/user/shoppingcart.html',
		controller: 'ShoppingCartController'
		}).

		when('/addproduct/:proId', {
		templateUrl: 'template/user/shoppingcart.html',
		controller: 'AddProductToShoppingCartController'
		}).

		when('/productdetail/:proId', {
		templateUrl: 'template/user/productdetail.html',
		controller: 'ProductDetailController'
		}).

		when('/login', {
		templateUrl: 'template/user/login.html',
		controller: 'LoginController'
		}).

		when('/signup', {
		templateUrl: 'template/user/signup.html',
		controller: 'SignUpController'
		}).

		otherwise({
		redirectTo: '/home'
		});
  }]);

mobileStoreApp.run(['authService', function (authService) {
    authService.fillAuthData();
    authService.setDataShopping();
}]);

mobileStoreApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});
