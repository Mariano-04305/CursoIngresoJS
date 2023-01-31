/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//opc 1 
	
	let nombre;
	let edad;
	let resultado

	nombre = document.getElementById("txtIdNombre").value;	//tomas el dato por ID
	edad = document.getElementById("txtIdEdad").value;

	resultado = "Usted se llama " + nombre + " y tiene " + edad + " años"
	alert (resultado);

	//opc 2
/*
	let nombre;
	let edad;
	
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	alert ("Usted se llama " + nombre + " y tiene " + edad + " años");
*/
}

