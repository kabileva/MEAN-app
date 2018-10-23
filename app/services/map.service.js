(function() {
    'use strict';
    
    angular
    .module('app')
    .factory('mapService', Service);
    
    Service.$inject = [];
    
    function Service() {
        var map = null;
        return {
            getMap: function() {
                console.log("get map");
                return map;
                },
            setMap: function(thisMap) {
                console.log("set map");
               
                map = thisMap;
                console.log(map);
            }
        };
    }
})();