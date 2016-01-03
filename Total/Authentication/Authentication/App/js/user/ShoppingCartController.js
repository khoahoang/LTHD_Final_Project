'use strict';
mobileStoreApp.controller('ShoppingCartController', ['$scope', 'shoppingService', function ($scope, shoppingService) {
    var list = shoppingService.get();

    $scope.listProduct = list;

    $scope.All = shoppingService.getAll();

    $scope.TangSoLuong = function (id) {
        var list = shoppingService.tang(id);
        shoppingService.set(list);

        $scope.listProduct = list;

        $scope.All = shoppingService.getAll();
    };

    $scope.GiamSoLuong = function (id) {
        var list = shoppingService.giam(id);
        shoppingService.set(list);

        $scope.listProduct = list;

        $scope.All = shoppingService.getAll();
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