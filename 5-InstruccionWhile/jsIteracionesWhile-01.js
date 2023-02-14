/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	//EJERCICIO 1
	let variable;

	variable = 1;

	while (variable < 11)
	{
		alert(variable++);

	}
}

/*

	let numero;

	numero = 0;

	while (numero < 11)
	{
		numero = numero + 1;   //CONTADOR: Sumarle una constante (su propio 
							   //valor + uno cualquiera constantemente) a una variable 
		/* OTRAS FORMAS DE CONTADOR
			-numero ++ o --;  (solo 1)
			-numero += 1 o -=; (suma cualquier valor)

		Todo esto le suma a la variable, que inicialmente es 0, su propio valor +1.
		*/


		//alert(numero++); //Del 0 al 9 xq usa el numero y dsps le suma
		//alert(++numero) //Del 1 al 10 xq suma el numero y dsps lo usa, ya sumado
	//}
	
	//while (numero > 0)
	//{
		//console.log(10 - numero)	//Numero inicia en 0. Entra a while, hace la cuenta 10 - 0 y muestra en pantalla 10
									//dsps le suma 1 a numero y vuelve a hacer la cuenta, ahora 10 - 1 ; 9, y así.
		//numero++;
	//}