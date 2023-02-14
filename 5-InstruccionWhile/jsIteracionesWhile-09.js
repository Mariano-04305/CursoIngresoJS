/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
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
	
}//ENTREGADO