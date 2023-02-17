/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{	
	let acumuladorPositivos;
	let acumuladorNegativos;
	let numsIngres;
	//let respuesta;
	let bandera;	// suele inizializar contadores o valores como numero maximo o minimo

	bandera = true;
	//respuesta = "si";
	contador = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 0; 

	numsIngres = prompt("Ingrese un numero");
	numsIngres = parseInt(numsIngres);
	
	if (numsIngres < 0)
	{
		primerNumeroNegativo = numsIngres;
	}

	while (!(isNaN(numsIngres))) 
	{	
		if (numsIngres >= 0)
		{
			acumuladorPositivos += numsIngres;
		}
		else
		{
			while (bandera == true)
			{
				acumuladorNegativos ++;
				bandera = false;
			}

			acumuladorNegativos *= numsIngres;
		}
			
		numsIngres = prompt("Ingrese otro numero, si lo desea");
		numsIngres = parseInt(numsIngres);
	}

/*	CON respuesta == "si" (doble validacion)

	while (respuesta == "si")
	{	
		numsIngres = prompt("Ingrese un numero");
		numsIngres = parseInt(numsIngres);

		while (isNaN(numsIngres))
		{
			numsIngres = prompt("Eso no es un numero, ingrese uno valido antes de seguir: ");
			numsIngres = parseInt(numsIngres);
		}

		if (numsIngres >= 0)
		{
			acumuladorPositivos += numsIngres;
		}
		else
		{
			acumuladorNegativos *= numsIngres;
		}

		respuesta = prompt("Desea seguir ingresando numeros? 'si' para continuar?");
	}
*/


	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;
}//ENTREGADO

/*
	variable == undefined, undefined sería el botón cancelar del prompt
*/