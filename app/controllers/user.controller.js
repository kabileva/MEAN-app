(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('userController', Controller);
    
    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams', 'mapService', 'NgMap'];
    
    function Controller($scope, $rootScope, userService, $state, $stateParams, mapService, NgMap) {
        $scope.users = [];
        
        
        if ($state.current.name == "users") {
                console.log("listing");
            $rootScope.Title = "User Listing";
            userService.getUsers().then(function(res) {
                $scope.users = res.data;
            }).catch(function(err) {
                console.log(err);
            });
            
            $scope.deleteUser = function(id) {
                if (confirm('Are you sure to delete?')) {
                    userService.deleteUser(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("users", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit User";
            var id = $stateParams.id;
            userService.getUser(id).then(function(res) {
                $scope.user = res.data;
            }).catch(function(err) {
                console.log(err);
            });
            
            $scope.saveData = function(user) {
                if ($scope.userForm.$valid) {
                    userService.updateUser(user).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("users");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "create") {
            $rootScope.Title = "Create User";
            $scope.saveData = function(user) {
                $scope.IsSubmit = true;
                if ($scope.userForm.$valid) {
                    userService.createUser(user).then(function(res) {
                        if (res.data == "created") {
                            $state.go("users");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        }
        
        $scope.clicked = function(id) {
            var map;
            var user;
            map = mapService.getMap();
            user= $scope.users[id];
            console.log("clicked");
            console.log(map);
            NgMap.getGeoLocation(user.address).then(function(latlng) {

                map.setCenter(latlng);
            });
            //map.setCenter(new google.maps.LatLng(0, 0));
        }
    }
   })();