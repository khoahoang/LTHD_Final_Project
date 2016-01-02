'use strict';
mobileStoreApp.controller('ShoppingCartController', ['$scope', 'localStorageService', function ($scope, localStorageService) {
	var list = localStorageService.get('dataShopping');
  var count = localStorageService.get('SoLuong');

	$scope.listProduct = list;

  var all = 0;
  for (var index = 0; index < list.length; index++){
    all = list[index].PriceDouble*list[index].Quantity + all;
  }

  $scope.All = all;

	$scope.TangSoLuong = function(id){
    for  (var index = 0; index < list.length; index++) {
      if (list[index].ID == id){
        list[index].Quantity++;
        list[index].Total = list[index].PriceDouble * list[index].Quantity;
        count++;
        break;
      }
    }

    localStorageService.set('dataShopping', list);

    $scope.listProduct = list;
    var all = 0;
    for (var index = 0; index < list.length; index++){
      all = list[index].PriceDouble*list[index].Quantity + all;
    }
    
    $scope.All = all;
    var count = localStorageService.set('SoLuong', count);
  };

  $scope.GiamSoLuong = function(id){
    for  (var index = 0; index < list.length; index++) {
      if (list[index].ID == id){
        if (list[index].Quantity > 1){
          list[index].Quantity--;
          list[index].Total = list[index].PriceDouble * list[index].Quantity;
          break;
        }
        else{
          list.splice(index, 1);
          break;
        }
        count--;
      }
      var count = 0;
  for (var index = 0; index < list.length; index++){
      count=list[index].Quantity + count;
    }

    localStorageService.set('SoLuong', count);
    }

    localStorageService.set('dataShopping', list);

    $scope.listProduct = list;
    var all = 0;
    for (var index = 0; index < list.length; index++){
      all=list[index].PriceDouble*list[index].Quantity + all;
    }

    $scope.All = all;
    var count = localStorageService.set('SoLuong', count);
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