'use strict';
mobileStoreApp.controller('ShoppingCartController', ['$scope', 'localStorageService', function ($scope, localStorageService) {
	var list = localStorageService.get('dataShopping');
	$scope.listProduct = list;

	$scope.TangSoLuong = function(id){
      for  (var index = 0; index < list.length; index++) {
       if (list[index].ID == id){
         list[index].Quantity++;
         break;
       }
      }

    localStorageService.set('dataShopping', list);

	$scope.listProduct = list;
    };

    $scope.GiamSoLuong = function(id){
      for  (var index = 0; index < list.length; index++) {
       if (list[index].ID == id){
        if (list[index].Quantity > 1){
          list[index].Quantity--;
          break;
        }
        else{
          list.splice(index, 1);
          break;
        }
       }
      }

      localStorageService.set('dataShopping', list);

	$scope.listProduct = list;
    };

	// $scope.listProduct = [
 //  {
 //    "ModelProduct" : "Alfreds Futterkiste",
 //    "Price" : "Berlin",
 //    "Number" : "Germany"
 //  },
 //  {
 //    "ModelProduct" : "Berglunds snabbköp",
 //    "Price" : "Luleå",
 //    "Number" : "Sweden"
 //  },
 //  {
 //    "ModelProduct" : "Centro comercial Moctezuma",
 //    "Price" : "México D.F.",
 //    "Number" : "Mexico"
 //  }]
}]);