angular.module("myApp", ['ngRoute', 'servicioBaseDatos'])

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
	        templateUrl: 'html/agregar.html',
	        controller: 'agregarCtrl' 
	    })
	    .when('/usuario/movimiento/detalle', {
	    	templateUrl: 'html/detalle.html',
	    	controller: 'detalleCtrl'
	    })
	    .when('/usuario/resumen', {
	        templateUrl: 'html/resumen.html',
	        controller: 'resumenCtrl'
	    })
	    .otherwise({redirectTo: '/inicio'});
	}
)

.directive("passwordVerify", function() {
   return {
      require: "ngModel",
      scope: {
        passwordVerify: '='
      },
      link: function(scope, element, attrs, ctrl) {
        scope.$watch(function() {
            var combined;

            if (scope.passwordVerify || ctrl.$viewValue) {
               combined = scope.passwordVerify + '_' + ctrl.$viewValue; 
            }                    
            return combined;
        }, function(value) {
            if (value) {
                ctrl.$parsers.unshift(function(viewValue) {
                    var origin = scope.passwordVerify;
                    if (origin !== viewValue) {
                        ctrl.$setValidity("passwordVerify", false);
                        return undefined;
                    } else {
                        ctrl.$setValidity("passwordVerify", true);
                        return viewValue;
                    }
	                });
	            }
	        });
	     }
	   };
});
