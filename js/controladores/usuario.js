angular.module("myApp.controladores")

.controller('usuarioCtrl',
	['$scope',
		function ($scope){
			$scope.usuarios = [
				{nombre:'David Guillen', correo:'maiden8-8@hotmail.com', tipoMoneda:'Dolar'}
			];
		}
	]
);