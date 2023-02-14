/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let contador;
	let acumulador;
	let numerosIngresados;
	let respuesta;

	//respuesta = "si";
	//rta = "no";
	contador = 0;
	acumulador = 0;

	numerosIngresados = prompt("Ingresa el/los numero/s que quiera");
	numerosIngresados = parseInt(numerosIngresados);

	while (!(isNaN(numerosIngresados))) // isNaN(variable), se da cuando en el prompt pone una letra o deja vacío
	{	
		contador ++;
		acumulador += numerosIngresados;

		numerosIngresados = prompt("Ingresa el/los numero/s que quiera");
		numerosIngresados = parseInt(numerosIngresados);
	}

/*	FORMA CON rta = "si"

	while(respuesta == "si") // FORMA CON "SI"
	{
		numerosIngresados = prompt("Ingresa el numero que quiera");
		numerosIngresados = parseInt(numerosIngresados);

		while (isNaN(numerosIngresados))
		{
			numerosIngresados = prompt("Eso no es un numero")
			numerosIngresados = parseInt(numerosIngresados);
		}

		contador ++;
		acumulador += numerosIngresados;

		respuesta = prompt("Desea continuar ingresando numeros? 'si' para seguir")
	}
*/

	document.getElementById("txtIdSuma").value = acumulador;

	promedio = acumulador / contador;
	document.getElementById("txtIdPromedio").value = promedio;
}//ENTREGADO