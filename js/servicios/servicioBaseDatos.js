angular.module('servicioBaseDatos', [])


.factory('servicioGuardar', [function ()  {
   var guardarDatos = {};
      
       guardarDatos.saved= localStorage.getItem("nuevoMovimiento"); 

		if(localStorage.getItem("nuevoMovimiento")!=null){
			guardarDatos.nuevoMovimiento=JSON.parse(guardarDatos.saved);	
		}else{
			guardarDatos.nuevoMovimiento=[];
		}

       guardarDatos.agregarMovimiento= function(objNuevoMovimiento){
			guardarDatos.nuevoMovimiento.push(objNuevoMovimiento);	
			guardarDatos.updateStorage();
		}

		guardarDatos.updateStorage= function(){
			localStorage.setItem('nuevoMovimiento', JSON.stringify(guardarDatos.nuevoMovimiento));
		}

		guardarDatos.eliminarMovimiento= function(id){
			 guardarDatos.nuevoMovimiento = guardarDatos.nuevoMovimiento.filter(function (item){
			 	return item.id!=id;
			});
			 	guardarDatos.updateStorage();
			 	return guardarDatos.getAll();
		}

		guardarDatos.getAll= function(){
			return guardarDatos.nuevoMovimiento;
		};
		
		return guardarDatos;
	}]);