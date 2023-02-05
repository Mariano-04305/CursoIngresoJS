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
}

//opc 2
/*
	let nombre;
	let edad;
	
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	alert ("Usted se llama " + nombre + " y tiene " + edad + " años");
*/






//EJERCICIO 1 DE CLASE SABADO 1
/*
function mostrar()
{	
	let razonSocialEmpresa;
	let fechaInicio;
	let nombreTitular;
	let dniIngresado;
	let cuit;
	let aleatorio; 

	razonSocialEmpresa = prompt("Ingrese la razón social de la empresa");

	nombreTitular = prompt("Ingrese el nombre del titular");

	fechaInicio  = document.getElementById("txtIdNombre").value;

	dniIngresado  = document.getElementById("txtIdNombre").value;

	fechaInicio  = document.getElementById("txtIdEdad").value;

	aleatorio = Math.round(Math.random()*9);

	cuit = "30" + "-" + dniIngresado + "-" + aleatorio;

	alert("RAZÓN SOCIAL DE LA EMPRESA: " + razonSocialEmpresa + "   FECHA DE INICIO DE ACTIVIDADES: " + fechaInicio); 
	alert("NOMBRE DEL TITURLAR: " + nombreTitular + "   DNI: " + dniIngresado + "   CUIT: " + cuit);
}
*/