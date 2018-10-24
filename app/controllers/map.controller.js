(function() {
'use strict';
var app = angular.module('app');

app.controller('mapController', Controller);

function Controller($scope, $rootScope, userService, $state, $stateParams, mapService, NgMap) {
    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams','NgMap'];
    var vm = this;
    var map;
    NgMap.getMap().then(function(evtMap){
        map = evtMap;
        mapService.setMap(map);
        console.log($scope.map);
    });
    userService.getUsers().then(function(res) {
        vm.users = res.data;
        console.log(vm.users);
    }).catch(function(err) {
        console.log(err);
    });
    vm.getRadius = function(num) {
      return Math.sqrt(num) * 100;
    }

    
     vm.showInfo = function(evt, id) {
        vm.user= vm.users[id];
        console.log("show info");
        console.log(id);
        console.log(map);
        map.showInfoWindow('marker-info', this);
      };
  };

  
})();