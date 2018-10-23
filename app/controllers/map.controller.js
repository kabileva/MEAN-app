(function() {
'use strict';
var app = angular.module('app');

app.controller('mapController', Controller);

function Controller($scope, $rootScope, userService, $state, $stateParams, mapService, NgMap) {
    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams','NgMap'];
    var vm = this;
    NgMap.getMap().then(function(evtMap){
        $scope.map = evtMap;
        mapService.setMap($scope.map);
        console.log($scope.map);
    });
    
    userService.getUsers().then(function(res) {
        $scope.users = res.data;
        console.log($scope.users);
    }).catch(function(err) {
        console.log(err);
    });
    $scope.getRadius = function(num) {
      return Math.sqrt(num) * 100;
    }

    $scope.showInfo = function(evt, id) {
        $scope.user= $scope.users[id];
        console.log("show info");
        $scope.map.showInfoWindow('marker-info', this);
      };
  };

  
})();