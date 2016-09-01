angular.module('Presentacion', ['ngMaterial', 'ngRoute','Angular'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('amber');
})
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "angular/angular.html",
        controller : "AngularController"
    })
    .when("/modulos", {
        templateUrl : "modulos/modulos.html"
    })
    .when("/controlador", {
        templateUrl : "controlador/controlador.html"
    })
    .when("/vista", {
        templateUrl : "vista/vista.html"
    })
    .when("/ejemplo", {
        templateUrl : "ejemplo/ejemplo.html"
    });
})
.controller('ListCtrl', function($scope, $location) {
  $scope.goRoute = function(ruta){
    $location.path( ruta );
  }
});
