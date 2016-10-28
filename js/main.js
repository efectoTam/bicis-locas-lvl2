function validateForm(){
	/* Escribe tú código aquí */
	var nombre= document.getElementById('name').value;
	var apellido= document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var contrasena= document.getElementById('input-password').value;
	var indice = document.getElementsByTagName('select')[0].selectedIndex;

	//Todos los campos son obligatorios, excepto los dos últimos.
	function camposRellenados(){
		if(nombre==null || nombre.length==0 || /^\s+$/.test(nombre)){
			//alert("ERROR: El campo nombre no debe ir vacío.");
			var containerAlertaNombre = document.getElementsByClassName("name-container")[0];
			var contenedorErrorNombre = document.createElement("span");
			var nodoAlerta = document.createTextNode("ERROR: El campo nombre no debe ir vacío.");
			contenedorErrorNombre.appendChild(nodoAlerta);
			containerAlertaNombre.appendChild(contenedorErrorNombre);
			return false;
		}

		else if(apellido==null || apellido.length==0 || /^\s+$/.test(apellido)){
			//alert("ERROR: El campo apellido no debe ir vacío.");
			var containerAlertaNombre = document.getElementsByClassName("lastname-container")[0];
			var contenedorErrorNombre = document.createElement("span");
			var nodoAlerta = document.createTextNode("ERROR: El campo apellido no debe ir vacío.");
			contenedorErrorNombre.appendChild(nodoAlerta);
			containerAlertaNombre.appendChild(contenedorErrorNombre);
			return false;
		}

		else if(!(/\S+@\S+\.\S+/.test(correo))){ //Validar que el campo email tenga un formato válido. Ej: name@domain.com.
			alert("ERROR: Debe escribir un correo válido valido. Ejemplo: name@domain.com");
			return false;
		}

		else if(contrasena==null || contrasena.length==0 || /^\s+$/.test(contrasena)){
			alert("ERROR: El campo contraseña no debe ir vacío.");
			return false;
		}

		else if(indice == null || indice == 0) { //El valor seleccionado de bicis, debe ser una de las opciones presentadas.
			alert("ERROR: Debes seleccionar un elemento de la lista.");
	  		return false;
		}
		else{
			return true;
		}
 	}camposRellenados();

 	//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
 	function validaSoloTextoNombre(nombre){
  		var patronNombre = /^[a-zA-Z]*$/;
  		if(!nombre.search(patronNombre)){
  			return true;
  		} else{
  			alert("ERROR: Solo se permitir caracteres de la a-z");

  		    return false;
  		}
	}validaSoloTextoNombre(nombre);

	function validaSoloTextoApellido(apellido){
  		var patronApellido = /^[a-zA-Z]*$/;
  		if(!apellido.search(patronApellido)){
  			return true;
  		} else{
  			alert("ERROR: Solo se permitir caracteres de la a-z");
  		    return false;
  		}
	}validaSoloTextoApellido(apellido);

	//Para los campos nombre y apellido la primera letra debe ser mayúscula.
	function mayusculaNombre(nombre){
		//Hacer que todas las letras queden en minúscula por si el usuario puso algo en mayúscula
		var nombreMinuscula= document.getElementById('name').value.toLowerCase();
		document.getElementById('name').value=nombreMinuscula;
		//Hacer que la primera letra sea mayúscula, reservar dato
		var primeraMayusculaN= nombre.substr(0,1).toUpperCase();
		//Hacer que las letras de la palabra sean un arreglo
		var nombreChico= document.getElementById('name').value;
		var arregloNombre=nombreChico.split("");
		//Quitar el primer elemento del arreglo
		var sinPrimeraLetraN= arregloNombre.shift();
		//Agregar la primera letra pero en mayúscula
		var conPrimeraLetraN= arregloNombre.unshift(primeraMayusculaN);
		//Unir los elementos del array en una palabra
		var nombreListo= arregloNombre.join("");
		document.getElementById('name').value=nombreListo;
	}mayusculaNombre(nombre);

	function mayusculaApellido(apellido){
		//Hacer que todas las letras queden en minúscula por si el usuario puso algo en mayúscula
		var apellidoMinuscula= document.getElementById('lastname').value.toLowerCase();
		document.getElementById('lastname').value=apellidoMinuscula;
		//Hacer que la primera letra sea mayúscula, reservar dato
		var primeraMayusculaA=apellido.substr(0,1).toUpperCase();
		//Hacer que las letras de la palabra sean un arreglo
		var apellidoChico= document.getElementById('lastname').value;
		var arregloApellido=apellidoChico.split("");
		//Quitar el primer elemento del arreglo
		var sinPrimeraLetraA= arregloApellido.shift();
		//Agregar la primera letra pero en mayúscula
		var conPrimeraLetraA=arregloApellido.unshift(primeraMayusculaA);
		//Unir los elementos del array en una palabra
		var apellidoListo=arregloApellido.join("");
		document.getElementById('lastname').value=apellidoListo;
	}mayusculaApellido(apellido);

	//El campo password debe tener al menos 6 caracteres.
	function seisCaracteres(contrasena){
		if (contrasena.length < 6){
			alert("ERROR: La contraseña debe tener al menos 6 caracteres.")
			return false;
    	} else{
    		return true;
    	}
	}seisCaracteres(contrasena);

	//El campo password no puede ser igual a "password" ó "123456" ó "098754"
	function noPermitido(contrasena){
		if(contrasena=="password"){
			alert("ERROR: El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		} 
		else if(contrasena==123456){
			alert("ERROR: El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		}
		else if(contrasena==098754){
			alert("ERROR: El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		}
		else{
			return true;
		}
	}noPermitido(contrasena);
}