angular.module("myApp", ['ngRoute'])

	.config(function($routeProvider) {
	    $routeProvider
	    	.when('/inicio', {
	            templateUrl: 'html/inicio.html'
	        })
	        .when('/registrar', {
	            templateUrl: 'html/registrar.html'
	        })
	        .when('/ingresar', {
	            templateUrl: 'html/ingresar.html'
	        })
	        .when('/usuario/agregar', {
	            templateUrl: 'html/agregar.html'
	        })
	        .when('/usuario/detalle', {
	            templateUrl: 'html/detalle.html',
	            controller: 'detalleCtrl'
	        })
	        .when('/usuario/registro', {
	            templateUrl: 'html/registro.html'
	        })
	        .when('/usuario/resumen', {
	            templateUrl: 'html/resumen.html',
	            controller: 'resumenCtrl'
	        })
	        .otherwise({redirectTo: '/inicio'});
	})

	.controller('registroCtrl',
		['$scope', 
			function ($scope){
		
			}
		]
	)

	.controller('agregarCtrl',
		['$scope', 
			function ($scope){
		
			}
		]
	)

	.controller('detalleCtrl',
		['$scope',
			function ($scope){
				$scope.detalles = [
				{transaccion: '213', fecha:'2323', detalle: '12312', monto:'3434'},
				{transaccion: '213', fecha:'2323', detalle: '12312', monto:'3434'},
				{transaccion: '213', fecha:'2323', detalle: '12312', monto:'3434'}
				];
			}
		]
	)

	.controller('resumenCtrl',
		['$scope', 
			function ($scope){
				$scope.resumenes = [
				{fecha: '213', detalle:'2323', monto:'3434'},
				{fecha: '213', detalle:'2323', monto:'3434'},
				{fecha: '213', detalle:'2323', monto:'3434'}
				];
			}
		]
	)
;
