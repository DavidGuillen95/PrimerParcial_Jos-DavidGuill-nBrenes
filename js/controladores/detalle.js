angular.module("myApp")

.controller('detalleCtrl',
	['$scope',
		function ($scope){
			$scope.movimientos = [
				{transaccion: '213', fecha:'2323', detalle: '12312', tipoMovimiento:'comer', monto:'3434'}
			];
		}
	]
);