var adminurl = 'http://lylaloves.co.uk/admin/index.php/json/';

var myservices = angular.module('myservices', [])

.factory('MyServices', function ($http, $location) {
    var retailer = 0;
    var category = 0;
    var useremail ="";
    return {
        getuseremail: function() {
            return useremail;
        },
        setuseremail: function(user) {
            useremail = user;
        },
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
        },
        usercontact: function (id, name, email, phone, comment) {
            return $http.post(adminurl + 'usercontact?id=' + id + '&name=' + name + '&email=' + email + '&phone=' + phone + '&comment=' + comment, {}, {
                withCredentials: true
            });
        },

        placeorder: function (form) {
            return $http({
                url: adminurl + 'placeorder',
                method: "POST",
                withCredentials: true,
                data: {
                    'form': form
                }
            });
        },
        seach: function (search) {
            return $http.post(adminurl + 'searchbyname?search=' + search, {}, {
                withCredentials: true
            });
        },
        showwishlist: function (user) {
            return $http.post(adminurl + 'showwishlist?user=' + user, {}, {
                withCredentials: true
            });
        },
        logout: function () {
            return $http.post(adminurl + 'logout', {}, {
                withCredentials: true
            });
        },
        addtowishlist: function (user, product) {
            return $http.post(adminurl + 'addtowishlist?user=' + user + '&product=' + product, {}, {
                withCredentials: true
            });
        },
        authenticate: function () {
            return $http.post(adminurl + 'authenticate', {}, {
                withCredentials: true
            });
        },
        registeruser: function (firstname, lastname, email, password) {
            return $http.post(adminurl + 'registeruser?firstname=' + firstname + '&lastname=' + lastname + '&email=' + email + '&password=' + password, {}, {
                withCredentials: true
            });
        },
        loginuser: function (email, password) {
            return $http.post(adminurl + 'loginuser?email=' + email + '&password=' + password, {}, {
                withCredentials: true
            });
        },
        signupemail: function (email) {
            return $http.post(adminurl + 'signupemail?email=' + email, {}, {
                withCredentials: true
            });
        },
        orderemail: function (email, orderid) {
            return $http.post(adminurl + 'orderemail?email=' + email + '&orderid=' + orderid, {}, {
                withCredentials: true
            });
        },
        getusercart: function (user) {
            return $http.get(adminurl + 'getusercart?user=' + user, {}, {
                withCredentials: true
            });
        },
        getallslider: function (user) {
            return $http.get(adminurl + 'getallslider');
        },
        chargestripe: function (token, email,amount,name) {
            return $http.get('http://wohlig.com/stripe/index.php/welcome/chargestripe', {
                params: {
                    token: token,
                    email: email,
                    amount: amount*100,
                    name: name,

                }
            }, {
                withCredentials: true
            });
        },
    }
});