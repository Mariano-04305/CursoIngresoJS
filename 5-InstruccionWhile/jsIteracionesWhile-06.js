function mostrar()
{
	let numerosIngresados;
	let contador;
	let acumulador;
	let promedio;

	contador = 0;
	acumulador = 0;

	while (contador < 5)
	{
		contador++;

		numerosIngresados = prompt("Ingresa 5 numeros");
		numerosIngresados = parseInt(numerosIngresados);

		while (isNaN(numerosIngresados))	//una vez que pide numero, validá que ese numero sea numero y no NaN, 
											//xq si no, con 1 de los 5 numeros NaN, ya te dá todo NaN.
		{
			numerosIngresados = prompt("ERROR!!! Ingresa un numero válido");
			numerosIngresados = parseInt(numerosIngresados);
		}
		acumulador += numerosIngresados; // a un acumulador que es 0, le sumo el numero ingresado que pone en cada while
	}

	document.getElementById("txtIdSuma").value = acumulador;

	promedio = acumulador / contador;
	document.getElementById("txtIdPromedio").value = promedio;
}//ENTREGADO