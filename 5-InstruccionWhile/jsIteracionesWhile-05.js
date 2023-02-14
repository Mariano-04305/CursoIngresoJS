/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.


VALIDAR DATO: LA CONDICION MIENTRAS, SE EJECUTA INFINITAMENTE MIENTRAS EL DATO INGRESADO
NO CUMPLA CON LA CONDICION REQUERIDA.
*/

function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f o m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Ingrese sexo nuevamente, lo que ingresó no es valido");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//ENTREGADO