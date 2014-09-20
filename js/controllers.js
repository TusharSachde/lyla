angular.module('starter.controllers', ['myservices'])

.controller('HomeCtrl', function ($scope, $stateParams, MyServices) {

})

.controller('DashCtrl', function ($scope, $stateParams, MyServices) {

})

.controller('CategoryCtrl', function ($scope, $stateParams, MyServices) {

})

.controller('ItemCtrl', function ($scope, $stateParams, MyServices) {
    var categoryId = $stateParams.cid;
    
        $scope.productItem = [];
        var change = 11;
        var counter = 0;
    
     $scope.loadMore = function () {
            var sum = counter + change;
             if(sum > $scope.products.product.length)
             {
                sum = $scope.products.product.length;
             }
            for (var i = counter; i <= sum; i++) {
                $scope.productItem.push($scope.products.product[i]);
            };
            counter += change + 1;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };
    
    var onsuccess = function (data, status) {
        $scope.products = data;
        $scope.loadMore();

    };
    MyServices.getproductbycategory(categoryId).success(onsuccess);

})

.controller('ProductCtrl', function ($scope, $stateParams, $ionicSlideBoxDelegate, $ionicPopup, $timeout, $ionicLoading, MyServices) {

    $scope.showPopup = function () {
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<div class="text-center"><h1 class="ion-ios7-checkmark balanced"></h1><p>'+$scope.item.product.name+' added to cart!</p>',
            title: 'Added to cart!',
            scope: $scope,

        });
        $timeout(function() {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 1500);
    };
    
    //Loader
    $ionicLoading.show({
        template: 'Loading...',
        animation: 'fade-in',
        showBackdrop: false,
        maxWidth: 200,
        showDelay: 500
    });
    var productId = $stateParams.id;

    var onsuccess = function (data, status) {
        $scope.item = data;
        $scope.item.product.quantity2 = 1;
        console.log(data);
    };
    MyServices.getproductdetails(productId).success(onsuccess);

    //Add to cart
    $scope.addtocart = function (id, name, price, quantity) {

        MyServices.addtocart(id, name, price, quantity);
        $scope.showPopup();

    };

    //SLIDE BOX
    $scope.nextSlide = function () {
        $ionicSlideBoxDelegate.next();
    };
    $scope.prevSlide = function () {
        $ionicSlideBoxDelegate.previous();
    };
    $timeout(function () {
        $ionicSlideBoxDelegate.update();
        $ionicLoading.hide();
    }, 2000);
})

.controller('LookbookCtrl', function ($scope, $stateParams) {})

.controller('LookbookitemCtrl', function ($scope) {})

.controller('AccountCtrl', function ($scope) {})

.controller('CartCtrl', function ($scope, $stateParams, MyServices) {
    //Product details
    var onproductsuccess = function (data, status) {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == data.product.id) {
                $scope.products[i].image = data.productimage[0].image;
            }
        }
    };

    var onsuccess = function (data, status) {
        $scope.products = data;

        for (var i = 0; i < data.length; i++) {
            MyServices.getproductdetails(data[i].id).success(onproductsuccess);
        }

    };
    MyServices.getcart().success(onsuccess);

    //Remove item
    var ondeletesuccess = function () {
        MyServices.getcart().success(onsuccess);
    };
    $scope.deletecart = function (id) {
        MyServices.deletecartfromsession(id).success(ondeletesuccess);
    };

    //Total
    var ontotalsuccess = function (data, status) {
        $scope.gettotal = data;
    };
    MyServices.totalcart().success(ontotalsuccess);

})

.controller('ContactCtrl', function ($scope) {})

.controller('CheckoutCtrl', function ($scope, MyServices) {
    var ontotalsuccess = function (data, status) {
        $scope.gettotal = data;
    };
    MyServices.totalcart().success(ontotalsuccess);

    $scope.$on('$viewContentLoaded', function () {
        var handler = StripeCheckout.configure({
            key: 'pk_live_LummdQUKjom4PnlfHJhLPDKC',
            image: 'img/logo.png',
            token: function (token) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
            }
        });

        document.getElementById('customButton').addEventListener('click', function (e) {
            // Open Checkout with further options
            handler.open({
                name: 'Lyla Loves',
                description: 'Total: £' + $scope.gettotal + '.00',
                currency: 'GBP',
                amount: ($scope.gettotal * 100)
            });
            e.preventDefault();
        });
    });
})

.controller('LoginCtrl', function ($scope) {

    $scope.loginfunction = function () {

    };

})

.controller('SignupCtrl', function ($scope) {})

.controller('OrderCtrl', function ($scope) {});