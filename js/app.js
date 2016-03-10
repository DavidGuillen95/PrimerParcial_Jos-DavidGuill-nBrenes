angular.module("myApp", ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	    $routeProvider
	    	.when('/inicio', {
	            templateUrl: 'html/inicio.html',
	        })
	        .when('/agregar', {
	            templateUrl: 'html/agregar.html',
	        })
	        .when('/detalle', {
	            templateUrl: 'html/detalle.html',
	        })
	        .when('/registro', {
	            templateUrl: 'html/registro.html',
	        })
	        .when('/resumen', {
	            templateUrl: 'html/resumen.html',
	        })
	        .otherwise({redirectTo: '/inicio'});
	}])
;
