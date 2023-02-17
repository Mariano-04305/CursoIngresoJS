/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let banderaDelPrimero; // Para hacer algo por primera vez 
	let respuesta;
	
	banderaDelPrimero = true;

	do 
	{
		do 
		{
			numeroIngresado = prompt("Ingrese un valor numérico:");
			numeroIngresado = parseInt(numeroIngresado);

		} while (isNaN(numeroIngresado));

		if (banderaDelPrimero == true) //IF no WHILE xq se tiene que ejecutar 1 vez, es al pedo un while
		{
			banderaDelPrimero = false;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

		}
		else
		{
			if (numeroIngresado >= numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if (numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}
		respuesta = confirm("desea ingresar otro numero?") // pide "aceptar", true o "cancelar", false

	} while (respuesta == true);

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
	
}//ENTREGADO

/*	SIN DO WHILE	

	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let bandera; 
	let respuesta;
	
	respuesta = "si";
	bandera = true;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Ese valor no es numerico. Inrese un numero:");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (bandera == true)
		{
			bandera = false;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}

		if (numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else
		{
			if (numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta = prompt("'si' en caso de querer ingresar un nuevo número:");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

*/






/*	SIN BANDERA Y CON NaN

	let numerosIngresados;
	let numeroMaximo;
	let numeroMinimo;
	let primerNumero;
	
	numerosIngresados = prompt("Ingrese un numero");
	numerosIngresados = parseInt(numerosIngresados);

	primerNumero = numerosIngresados;
	numeroMaximo = primerNumero;
	numeroMinimo = primerNumero;

	while(!isNaN(numerosIngresados))
	{
		if (numerosIngresados > numeroMaximo)
		{
			numeroMaximo = numerosIngresados;
		}
		else
		{
			if (numerosIngresados < numeroMinimo)
			{
				numeroMinimo = numerosIngresados;
			}
		}
		numerosIngresados = prompt("Ingrese otro numero, si así lo desea");
		numerosIngresados = parseInt(numerosIngresados);
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

*/