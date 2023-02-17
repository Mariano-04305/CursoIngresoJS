/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{	
	let acumuladorPositivos;
	let acumuladorNegativos;
	let numsIngres;
	let respuesta;
	let bandera;	// suele inizializar contadores o valores como numero maximo o minimo

	bandera = true;
	acumuladorPositivos = 0;
	acumuladorNegativos = 1; 
	negativos = false;
	//respuesta = "si";

	do 
	{ // Sirve para VALIDAR. Se ejecuta minimo 1 vez, x lo que no hace falta repetir codigo/inicializar variables
		do 
		{
			numsIngres = prompt("Ingrese un valor numérico:");
			numsIngres = parseInt(numsIngres);
		} while (isNaN(numsIngres));

		if (numsIngres > 0)
		{
			acumuladorPositivos += numsIngres;
		}
		else
		{
			negativos = true; //si no entra a menor a 0, = false. Si entra
			acumuladorNegativos *= numsIngres;
		}
		respuesta = confirm("Desea volver a ingresar un numero?");

	} while (respuesta == true );

	if (negativos) // == true NO HACE FALTA, ya q el if devuelve true o false, si la variable es true, entra al "if"
				   // si no, entra al "else"
	{	
		document.getElementById("txtIdProducto").value = acumuladorNegativos;
	}
	else
	{
		document.getElementById("txtIdProducto").value = "NO existen numeros negativos";
	}

	document.getElementById("txtIdSuma").value = acumuladorPositivos;
}

/* OTRA FORMA DE MOSTRAR SI NO SE INGRESARON NUMS NEGATIVOS

function mostrar()
{
    let numerosIngresados;
    let acumuladorPositivos;
    let acumuladorNegativos;
	let respuesta = "si";
	
	acumuladorPositivos = 0;
	acumuladorNegativos = 1;

	while (respuesta == "si")
	{
		numerosIngresados = prompt("Ingresa un numero:");
		numerosIngresados = parseInt(numerosIngresados);

		while (isNaN(numerosIngresados))
		{
			numerosIngresados = prompt("!!! Eso no es un número. INGRESE UN NUMERO:");
			numerosIngresados = parseInt(numerosIngresados);
		}

		if (numerosIngresados >= 0)
		{	
			acumuladorPositivos += numerosIngresados;
		} 
		else
		{
			acumuladorNegativos *= numerosIngresados;
		}

		respuesta = prompt("Quere ingresar otro numero? 'si' para continuar: ")
	}
	if (acumuladorNegativos == 1)
	{
		acumuladorNegativos = "No hay nums negativos";
	}

	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;
}
*/

/*	SIN DO WHILE
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

*/


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
	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;
*/


	
//ENTREGADO

/*
	variable == undefined, undefined sería el botón cancelar del prompt
*/