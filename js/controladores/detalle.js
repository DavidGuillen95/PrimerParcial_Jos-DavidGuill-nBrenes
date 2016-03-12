angular.module("myApp.controladores")

.controller('detalleCtrl',
	['$scope',
		function ($scope){
			$scope.movimientos = [
				{id: '213', fecha: new Date("October 13, 2014 11:13:00"), detalle:'Venta de la casa',  tipoMovimiento:'Corriente', monto:'50400'}
			];
		}
	]
);