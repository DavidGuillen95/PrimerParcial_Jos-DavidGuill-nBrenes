angular.module("myApp")

.controller('agregarCtrl',
		['$scope', 
			function ($scope){
			$scope.tipoMoneda = ['Colones','Dólares'],
			$scope.tipoMovimiento = ['Ahorros','Corriente']
			}
		]
);