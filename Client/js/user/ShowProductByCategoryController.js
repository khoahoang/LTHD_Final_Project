mobileStoreApp.controller('ShowProductByCategoryController', function ($scope, $routeParams, $http) {
    $http.get("http://localhost:41127/api/category/getproductofcategory?id=" + $routeParams.catId)
    .then(function(response) {
      $scope.pro = response.data;
      $scope.Category = response.data[0].Category;
    });
})