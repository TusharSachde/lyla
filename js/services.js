angular.module('starter.services', [])
.factory('Jewelleries', function() {
    var jewelleries = [
        { id: 0, name: 'View All' },
        { id: 1, name: 'Necklace' },
        { id: 2, name: 'Bracelets' },
        { id: 3, name: 'Earings' },
        { id: 4, name: 'Rings' },
    ];

        return {
        all: function() {
        return jewelleries;
        },
        get: function(jewelleryId) {
        return jewelleries[jewelleryId];
}
         }
});
