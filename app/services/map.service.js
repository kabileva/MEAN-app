(function() {
    'use strict';
    
    angular
    .module('app')
    .factory('mapService', Service);
    
    Service.$inject = [];
    
    function Service(NgMap) {
    return {
    getMap: function() {
        console.log("service");
        var map;
        NgMap.getMap().then(function(thisMap) {
            map = thisMap;
        });
        
        return map
        }
    };
    }
   })();