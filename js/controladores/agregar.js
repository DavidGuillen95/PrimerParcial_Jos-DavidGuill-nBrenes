angular.module("myApp.controladores")

.controller('agregarCtrl',
	['$scope'/*, 'servicioBaseDatos'*/, 

		function ($scope/*, servicioBaseDatos*/){
			/*$scope.movimientoNuevo = {};

			var getListaMovimientos =  function () {
				return servicioBaseDatos.getAll();
			}

			$scope.getId= function () {
				var id;
				if(localStorage.getItem("idSetter")!=null && localStorage.getItem("idSetter")!="NAN"){
					id= Number(localStorage.getItem("idSetter"));
				}else{
					id=1;
				}
				return id;
			}
			
			$scope.agregarMovimiento= function () {
				$scope.movimientoNuevo.id=$scope.getId();
				servicioBaseDatos.agregarMovimiento($scope.movimientoNuevo);
				$scope.updateId();
				$scope.movimientoNuevo={};
			}

			$scope.updateId= function () {
				var newId= ($scope.getId())+1;
				localStorage.setItem("idSetter", newId);
			}

			$scope.updateDone= function(actividad){
				servicioBaseDatos.updateDone(actividad);
			};

			$scope.init= function () {
				$scope.nuevoMovimiento= getListaMovimientos();
			}

			$scope.init();*/

	}
]);