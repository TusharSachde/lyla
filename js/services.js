var adminurl = 'http://zibacollection.co.uk/lyla/index.php/json/';

var myservices = angular.module('myservices', [])

.factory('MyServices', function ($http, $location) {
    var retailer=0;
    var category=0;
    return {
        getproductdetails: function (product, category) {
            return $http.get(adminurl + 'getproductdetails', {
                params: {
                    product: product
                }
            }, {
                withCredentials: true
            });
        },
        getproductbycategory: function (category) {
            return $http.get(adminurl + 'getproductbycategory', {
                params: {
                    category: category
                }
            }, {
                withCredentials: true
            });
        },
    }
});