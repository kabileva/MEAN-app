(function() {
'use strict';
var app = angular.module('app');

app.controller('CircleSimpleCtrl', Controller);

function Controller($scope, $rootScope, userService, $state, $stateParams) {
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
  };
  
})();