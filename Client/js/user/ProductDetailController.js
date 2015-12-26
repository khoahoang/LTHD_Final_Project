mobileStoreApp.controller('ProductDetailController', function ($scope) {
    $scope.Model = 'ABC'
    $scope.ModelId = '1'
    $scope.Manufacture = 'Apple'
    $scope.Status = 'New'
    $scope.Price = '27'
    $scope.Attr = [{
    'Name' : 'ABC',
    'Value' : '17'
  },
  {
    'Name' : 'ABC',
    'Value' : '17',
    'Count': '15'
  },
  {
    'Name' : 'ABC',
    'Value' : '17'
  }]
})