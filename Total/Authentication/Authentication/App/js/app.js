var mobileStoreApp = angular.module('mobileStoreApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar']);


mobileStoreApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/home', {
    	templateUrl: 'app/template/user/home.html',
		controller: 'HomeController'
		}).

		when('/contact', {
		templateUrl: 'app/template/user/contact.html'
		}).

		when('/about', {
		templateUrl: 'app/template/user/about.html'
		}).

		when('/showproductbycategory/:catId', {
		templateUrl: 'app/template/user/showproductbycategory.html',
		controller: 'ShowProductByCategoryController'
		}).

		when('/shoppingcart', {
		templateUrl: 'app/template/user/shoppingcart.html',
		controller: 'ShoppingCartController'
		}).

		when('/addproduct/:proId', {
		templateUrl: 'app/template/user/shoppingcart.html',
		controller: 'AddProductToShoppingCartController'
		}).

		when('/productdetail/:proId', {
		templateUrl: 'app/template/user/productdetail.html',
		controller: 'ProductDetailController'
		}).

		when('/login', {
		templateUrl: 'app/template/user/login.html',
		controller: 'LoginController'
		}).

		when('/signup', {
		templateUrl: 'app/template/user/signup.html',
		controller: 'SignUpController'
		}).

		when("/associate", {
        controller: "AssociateController",
        templateUrl: "app/template/user/associate.html"
    	}).

		otherwise({
		redirectTo: '/home'
		});
  }]);

mobileStoreApp.run(['authService', function (authService) {
    authService.fillAuthData();
    authService.setDataShopping();
}]);

var serviceBase = 'http://localhost:41127/';
//var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
mobileStoreApp.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

mobileStoreApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

mobileStoreApp.controller('index', function($scope, localStorageService){
	var items = localStorageService.get('dataShopping');
	var n = 0;
	for (var i = 0; i < items.length; i++){
		n += items[i].Quantity;
	}

	$scope.Count = n;
})
