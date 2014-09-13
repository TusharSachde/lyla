angular.module('starter.controllers', ['myservices'])

.controller('DashCtrl', function ($scope, $stateParams, MyServices) {
    
    
})

.controller('CategoryCtrl', function ($scope, $stateParams, MyServices) {
    
})

.controller('ItemCtrl', function ($scope, $stateParams,MyServices) {
    var categoryId= $stateParams.cid;

    var onsuccess = function(data, status)
    {
        $scope.products = data;
        
        $scope.productItem = [];
        var change = 11;
        var counter = 0;
        $scope.loadMore = function() {
            console.log(":");
            if(counter < $scope.products.product.length) {
            for(var i=counter;i<=(counter+change);i++){
                $scope.productItem.push($scope.products.product[i]);
            };
                counter += change + 1;
            };
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };

        $scope.loadMore();
       
    };
    MyServices.getproductbycategory(categoryId).success(onsuccess);
    
})

.controller('ProductCtrl', function ($scope, $stateParams,$ionicSlideBoxDelegate ,$timeout , MyServices) {
    
    var productId= $stateParams.id;

    var onsuccess = function(data, status)
    {
        $scope.item = data;
        console.log(data);
    };
    MyServices.getproductdetails(productId).success(onsuccess);
    
    //SLIDE BOX
    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
    };
    $scope.prevSlide = function() {
        $ionicSlideBoxDelegate.previous();
    };
    $timeout(function(){
        $ionicSlideBoxDelegate.update();
    },1000);
})

.controller('LookbookCtrl', function ($scope, $stateParams) {
})

.controller('LookbookitemCtrl', function ($scope) {})

.controller('AccountCtrl', function ($scope) {})

.controller('CartCtrl', function ($scope) {})

.controller('ContactCtrl', function ($scope) {})

.controller('CheckoutCtrl', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        var handler = StripeCheckout.configure({
            key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
            image: '/square-image.png',
            token: function (token) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
            }
        });

        document.getElementById('customButton').addEventListener('click', function (e) {
            // Open Checkout with further options
            handler.open({
                name: 'Demo Site',
                description: '2 widgets ($20.00)',
                amount: 2000
            });
            e.preventDefault();
        });
    });
})

.controller('LoginCtrl', function ($scope) {
        
$scope.loginfunction = function()
{
        
};

})

.controller('SignupCtrl', function ($scope) {})

.controller('OrderCtrl', function ($scope) {});