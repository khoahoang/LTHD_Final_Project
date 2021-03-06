var mobileStoreApp = angular.module('mobileStoreApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ui.bootstrap']);


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
		templateUrl: 'template/user/showproductbycategory.html',//sao xoa app/ het roi ko phai xoa', cai' moi cua ong co' app do'
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

		when('/search/:str', {
		templateUrl: 'template/user/search.html',
		controller: 'SearchController'
		}).

		otherwise({
		redirectTo: '/home'
		});
  }]);
var serviceBase = 'http://localhost:41127/';
//var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
mobileStoreApp.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

mobileStoreApp.run(['authService', function (authService) {
    authService.fillAuthData();
    authService.setDataShopping();
}]);

mobileStoreApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

mobileStoreApp.controller('index', function($scope, localStorageService){
	$scope.Count = localStorageService.get('SoLuong');
})
