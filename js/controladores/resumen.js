angular.module("myApp")

.controller('resumenCtrl',
	['$scope'/*,'servicioBaseDatos', '$routeParams'*/, 
		function ($scope/*, servicioBaseDatos, $routeParams*/){

			/*$scope.listaMovimientos = servicioBaseDatos.getAll();

			$scope.route= Number($routeParams.id);

			$scope.movimiento= (function () {
				$scope.movimiento= servicioBaseDatos.getAll().filter(function (item) {
					return item.id== $scope.route;
				})
				return $scope.movimiento[0];
			})();*/

			$scope.nuevoMovimiento = [
				{fecha: new Date("October 13, 2014 11:13:00"), detalle:'Venta de la casa', monto:'50400'},
				{fecha: new Date(), detalle:'Pago del carro', monto:'-5000'},
				{fecha: new Date("October 23, 2015 11:13:00"), detalle:'Pago del Nintendo 3DS', monto:'-100'},
				{fecha: new Date("October 13, 2015 11:13:00"), detalle:'Pago de la carrera', monto:'-500'},
				{fecha: new Date("October 02, 2015 11:13:00"), detalle:'Pago del recibo de luz', monto:'-80'},
				{fecha: new Date(), detalle:'Venta de comidas', monto:'30'},
				{fecha: new Date(), detalle:'Pago del recibo del agua', monto:'-50'},
				{fecha: new Date("febrary 13, 2012 11:13:00"), detalle:'Pago del seguro', monto:'-100'},
				{fecha: new Date("april 19, 2012 11:13:00"), detalle:'Pago del recibo del cable', monto:'-40'},
				{fecha: new Date("febrary 13, 2012 11:13:00"), detalle:'Pago del internet', monto:'-40'},
				{fecha: new Date(), detalle:'Venta del celular', monto:'40' }
			];

			$scope.formVisibility=false;

			$scope.MostrarBusqueda=function(){
				$scope.formVisibility=true;
			}

			$scope.OcultarBusqueda=function(){
				$scope.formVisibility=false;
			}

			$scope.ordenarPor = function(orden){
				$scope.ordenSeleccionado = orden;
			}
		}
	]
);