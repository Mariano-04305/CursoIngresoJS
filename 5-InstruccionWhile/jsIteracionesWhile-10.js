/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{ 
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadNegativos=0;
	let cantidadPositivos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioNegativos;
	let promedioPositivos;
	let diferencia;
	let respuesta;

	do 
	{
		do
		{
			numeroIngresado = prompt("Ingrese un valor numérico");
			numeroIngresado = parseInt(numeroIngresado);
		} while(isNaN(numeroIngresado));

		if ((numeroIngresado % 2) == 0)
		{
			cantidadPares ++;
		}

		if (numeroIngresado == 0)
		{
			cantidadCeros ++;
			cantidadPares ++;
		}
		else
		{
			if (numeroIngresado > 0)
			{
				cantidadPositivos ++;
				sumaPositivos += numeroIngresado;
			}
			else
			{
				cantidadNegativos ++;
				sumaPositivos += numeroIngresado;
			}
		}
		
		respuesta = confirm("Desea ingresar otro numero?");
	} while(respuesta == true);

	promedioPositivos = sumaNegativos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es: "+ sumaNegativos);
	document.write("La suma de los positivos es: " + sumaPositivos);
	document.write("Cantidad positivos: " + cantidadPositivos);
	document.write("Cantidad negativos: " + cantidadNegativos);
	document.write("Cantidad ceros: " + cantidadCeros);
	document.write("Cantidad pares: " + cantidadPares);
	document.write("Promedio de positivos: " + promedioPositivos);
	document.write("Promedio de positivos: " + promedioPositivos);
	document.write("Promedio de negativos: "+ promedioNegativos);
	document.write("La resta de los positivos por los negativos es: " + diferencia);

}//ENTREGADO


/*	SIN DO WHILE

	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadNegativos=0;
	let cantidadPositivos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioNegativos;
	let promedioPositivos;
	let diferencia;

	let respuesta;

	numeroIngresado = prompt("Ingresa un numero:");
	numeroIngresado = parseInt(numeroIngresado);

	do 
	{

	} while(respuesta == true);

	while (!isNaN(numeroIngresado))
	{	
		switch (numeroIngresado % 2)
		{
			case 0:
				cantidadPares += 1 ;
		}

		if(numeroIngresado == 0)
		{
			cantidadCeros++;
			cantidadPares += 1;
			cantidadPositivos++;
		}
		else
		{
			if (numeroIngresado > 0)
			{
				sumaPositivos += numeroIngresado;
				cantidadPositivos++;
				
			}
			else
			{
				sumaNegativos += numeroIngresado;
				cantidadNegativos++;
			}
		}

		numeroIngresado = prompt("Ingresa otro numero, si así lo desea:");
		numeroIngresado = parseInt(numeroIngresado);
	}
	promedioNegativos = sumaNegativos / cantidadNegativos;
	promedioPositivos = sumaPositivos / cantidadPositivos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("la suma de negativos es: "+ sumaNegativos+ ". La suma de los positivos es: " + sumaPositivos);
	document.write("la cantidad de negativos es: " + cantidadNegativos+ ". La cantidad de positivos es: " + cantidadPositivos+". La cantidad de '0' es: " + cantidadCeros);
	document.write("cantidad de numeros pares: " + cantidadPares + ". Promedio de positivos: " + promedioPositivos +". Promedio de negativos: "+ promedioNegativos);
	document.write("La resta de los positivos por los negativos es: " + diferencia);

}//ENTREGADO

*/