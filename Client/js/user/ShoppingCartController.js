'use strict';
mobileStoreApp.controller('ShoppingCartController', ['$scope', 'localStorageService', function ($scope, localStorageService) {
	var list = localStorageService.get('dataShopping');
	$scope.listProduct = list;

  var all = 0;
  for (var index = 0; index < list.length; index++){
    all = list[index].PriceDouble*list[index].Quantity + all;
  }
  var formater = numeral(all);
  $scope.All = formater.format('0,0');

	$scope.TangSoLuong = function(id){
    for  (var index = 0; index < list.length; index++) {
      if (list[index].ID == id){
        list[index].Quantity++;
        list[index].Total = list[index].PriceDouble * list[index].Quantity;

        var f = numeral(list[index].Total);
        list[index].Total = f.format('0,0');
        break;
      }
    }

    localStorageService.set('dataShopping', list);

    $scope.listProduct = list;
    var all = 0;
    for (var index = 0; index < list.length; index++){
      all = list[index].PriceDouble*list[index].Quantity + all;
    }
    var formater = numeral(all);
    scope.All = formater.format('0,0');
  };

  $scope.GiamSoLuong = function(id){
    for  (var index = 0; index < list.length; index++) {
      if (list[index].ID == id){
        if (list[index].Quantity > 1){
          list[index].Quantity--;
          list[index].Total = list[index].PriceDouble * list[index].Quantity;
          var f = numeral(list[index].Total);
          list[index].Total = f.format('0,0');
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
    var all = 0;
    for (var index = 0; index < list.length; index++){
      all=list[index].PriceDouble*list[index].Quantity + all;
    }
    var formater = numeral(all);
    $scope.All = formater.format('0,0');
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