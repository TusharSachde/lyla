var adminurl = 'http://zibacollection.co.uk/lyla/index.php/json/';

var myservices = angular.module('myservices', [])

.factory('MyServices', function ($http, $location) {
    var retailer = 0;
    var category = 0;
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
        addtocart: function (id, name, price, quantity) {
            return $http.post(adminurl + 'addtocart?product=' + id + '&productname=' + name + "&quantity=" + quantity + "&price=" + price, {}, {
                withCredentials: true
            });
        },
        getcart: function () {
            return $http.post(adminurl + 'showcart', {}, {
                withCredentials: true
            });
            //return cart;
        },
        gettotalcart: function () {
            return $http.post(adminurl + 'totalitemcart', {}, {
                withCredentials: true
            });
            //return cart;
        },
        totalcart: function () {
            return $http.post(adminurl + 'totalcart', {}, {
                withCredentials: true
            });
            //return cart;
        },
        deletecart: function (id) {

            subtotal = this.calcsubtotal();
            return subtotal;
        },
        deletecartfromsession: function (id) {
            return $http.post(adminurl + 'deletecart?id=' + id, {}, {
                withCredentials: true
            });
        },
        savecart: function (uid, id, quantity) {
            console.log(cart);
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id == id) {
                    cart[i].quantity = quantity;
                    console.log(cart[i].name);
                    returntwo.state = $http.post(adminurl + 'addtocart?user=' + uid + '&product=' + id + "&quantity=" + cart[i].quantity, {}, {
                        withCredentials: true
                    });
                }

            }
            console.log(cart);
            returntwo.subtotal = this.calcsubtotal();
            return returntwo;
        },
        calcsubtotal: function () {
            subtotal = 0;
            for (var i = 0; i < cart.length; i++) {
                subtotal += cart[i].price * cart[i].quantity;
            }
            console.log(subtotal);
            return subtotal;

        },
        gettotalproductsincart: function (data, status) {
            console.log(data);
            TemplateService.totalproducts = data;
            return 0;
        }
    }
});