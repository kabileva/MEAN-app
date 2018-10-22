(function() {
'use strict';
var app = angular.module('app');

app.controller('CircleSimpleCtrl', Controller);

function Controller($scope, $rootScope, userService, $state, $stateParams, NgMap) {
    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams'];
    var vm = this;
    userService.getUsers().then(function(res) {
        vm.users = res.data;
    }).catch(function(err) {
        console.log(err);
    });
    vm.getRadius = function(num) {
      return Math.sqrt(num) * 100;
    }
    var map;
    NgMap.getMap().then(function(evtMap){
      map = evtMap;
    });
    vm.showInfo = function (evt, id) {
        vm.user= vm.users[id];
        map.showInfoWindow('marker-info', this);
      };
  };

  
})();