angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('CategoryCtrl', function ($scope, $stateParams, Jewelleries) {
    $scope.jewelleries = Jewelleries.all();
    $scope.jewellery = Jewelleries.get($stateParams.jewelleryId);
})

.controller('ItemCtrl', function ($scope, $stateParams, Jewelleries) {
    $scope.jewelleries = Jewelleries.all();
    $scope.jewellery = Jewelleries.get($stateParams.jewelleryId);
})

.controller('ProductCtrl', function ($scope, $stateParams, Jewelleries) {
    $scope.jewelleries = Jewelleries.all();
    $scope.jewellery = Jewelleries.get($stateParams.jewelleryId);
})

.controller('LookbookCtrl', function ($scope, $stateParams) {
    $scope.lookbooks = [
        {
            id: 0,
            name: "View All"
        },
        {
            id: 1,
            name: "Global Grunge"
        },
        {
            id: 2,
            name: "It's all about LEATHER"
        },
        {
            id: 3,
            name: "It's all about LAYERED"
        },
        {
            id: 4,
            name: "Punk'd"
        },
        {
            id: 5,
            name: "It's all about LOVE"
        },
    ];
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

.controller('LoginCtrl', function ($scope) {})

.controller('SignupCtrl', function ($scope) {})

.controller('OrderCtrl', function ($scope) {});