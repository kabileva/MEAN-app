(function() {
    'use strict';
    
    angular.module('app', [
    "ui.router",
    'ngMap'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("users", {
    url: "/",
    views: {
        'users': {
            templateUrl: "/views/user/index.html",
            controller: "userController"
        },
        'map': {
            templateUrl: "/views/map/map.html",
            controller: ""            
        }
    }
    
    //controller: "userController"
    }).state("create", {
    url: "/create",
    templateUrl: "/views/user/create.html",
    controller: "userController"
    }).state("edit", {
    url: "/edit/:id",
    templateUrl: "/views/user/create.html",
    controller: "userController"
    }).state("details", {
    url: "/details/:id",
    templateUrl: "/views/user/details.html",
    controller: "userController"
    }).state("map", {
        url: "/map",
        templateUrl: "/views/map/map.html",
        controller: "CircleSimpleCtrl"
    });
    })
    .constant("globalConfig", {
    apiAddress: 'http://localhost:3000/api'
    });
   })();