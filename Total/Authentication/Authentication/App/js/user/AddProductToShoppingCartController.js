mobileStoreApp.controller('AddProductToShoppingCartController', function ($scope, shoppingService, $routeParams, $http) {
    var list = shoppingService.get();

    $http.get("http://localhost:41127/api/product/getproduct?id=" + $routeParams.proId)
    .then(function (response) {
        list = shoppingService.them(response.data);

        shoppingService.set(list);

        $scope.listProduct = list;

        $scope.All = shoppingService.getAll();
    });

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

    // var count = 0;
    // for (var index = 0; index < list.length; index++){
    //     count=list[index].Quantity + count;
    //   }

    //   $rootScope.SoLuong = count;
})

// mobileStoreApp.controller('AddProductToShoppingCartController', 
//   ['$scope', 'localStorageService', '$routeParams', '$http', AddProductToShoppingCartController]);

// function AddProductToShoppingCartController($scope, localStorageService, $routeParams, $http){
//   $scope.listProduct = localStorageService.get('dataShopping');
//   $http.get("http://localhost:41127/api/product/getproduct?id=" + $routeParams.proId)
//     .then(function(response) {
//       var pro = response.data;

//       var proID = pro.product.PRODUCT_ID;
//       var modelProduct = pro.product.MODEL;
//       var price = pro.Price;
//       var quantity = 1;

//       var flag = false;
//       for  (index = 0; index < $scope.listProduct.length; index++) {
//        if ($scope.listProduct[index].ID == proID){
//          $scope.listProduct[index].Quantity++;
//          flag = true;
//        }
//       }

//       if (flag == false){
//        var item = {"ID": proID, "ModelProduct": modelProduct, "Price": price, "Quantity": quantity};
//        list.push(item);
//       }

//       localStorageService.set('dataShopping', list);
//       $scope.listProduct = list;
//   });


//   $scope.TangSoLuong = function(id){
//     for  (index = 0; index < $scope.listProduct.length; index++) {
//      if ($scope.listProduct[index].ID == id){
//        $scope.listProduct[index].Quantity++;
//        break;
//      }
//     }

//     localStorageService.set('dataShopping', list);
//   };

//   $scope.GiamSoLuong = function(id){
//     for  (index = 0; index < $scope.listProduct.length; index++) {
//      if ($scope.listProduct[index].ID == id && $scope.listProduct[index].Quantity > 0){
//        $scope.listProduct[index].Quantity--;
//        break;
//      }
//     }

//     localStorageService.set('dataShopping', list);
//   };
// }