/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
 	let mensajeEstadoCivil;
	let sueldoIngresado;
	let numeroLegajoIngresado;
	let nacionalidadIngresada;
	let nacionalidad;

	do 
	{	
		edadIngresada = prompt("Ingrese su edad: ")
		edadIngresada = parseInt(edadIngresada);

	} while (isNaN(edadIngresada) || (edadIngresada < 18 || edadIngresada > 90));
	
	do 
	{
		sexoIngresado = prompt("Ingrese si es 'F' o 'M': ")
	} while (sexoIngresado != "M" && sexoIngresado != "F");
			// para q sea TRUE, y el bucle se siga haciendo, solo 1 de las 2 tiene q ser FALSE
	do
	{
		estadoCivilIngresado = prompt("ingrese su estado civil; 1 para 'soltero' 2 para 'casado' 3 para 'divorciado' o 4 para 'viudo'");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	} while ((isNaN(estadoCivilIngresado)) || ((estadoCivilIngresado > 4) || (estadoCivilIngresado < 1)) );
										   
	switch (estadoCivilIngresado)
	{
		case 1:
			mensajeEstadoCivil = "Es soltero";
			break;
		case 2:
			mensajeEstadoCivil = "Casado";
			break;
		case 2:
			mensajeEstadoCivil = "Divorciado";
			break;
		case 4:
			mensajeEstadoCivil = "Viudo...";
			break;
	}

	do
	{
		sueldoIngresado = prompt("Ingrese su sueldo bruto: ");
		sueldoIngresado = parseInt(sueldoIngresado);
	} while (isNaN(sueldoIngresado) || (sueldoIngresado < 8000));

	do 
	{
		numeroLegajoIngresado = prompt ("Ingrese numero de 4 digitos: ");
		numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
	} while(isNaN(numeroLegajoIngresado) || (numeroLegajoIngresado < 1000 || numeroLegajoIngresado > 10000));
	

	nacionalidadIngresada = prompt("Ingrese su nacionalidad EN MAYÚSCULA; “A” para argentinos, “E” para extranjeros, “N” para nacionalizados: ");
	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt("DATO INVÁLIDO!!!. Ingrese su nacionalidad EN MAYÚSCULA; “A” para argentinos, “E” para extranjeros, “N” para nacionalizados: ");
	}

	switch (nacionalidadIngresada)
	{
		case "A":
			nacionalidad = "Argentino";
			break;
		case "E":
			nacionalidad = "Extranjeros";
			break;
		case "N":
			nacionalidad = "Nacionalizado";

	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoIngresado;
	document.getElementById("txtIdLegajo").value = numeroLegajoIngresado;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
