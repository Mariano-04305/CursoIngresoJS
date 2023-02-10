/*
Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento 
del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento 
del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 
10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	let estacionDelAño;
	let localidadParaVacacionar;
	let precioBase;
	let porcentaje;
	let cuentaPorcentaje;
	let precioFinal;

	estacionDelAño = document.getElementById("txtIdEstacion").value;
	localidadParaVacacionar = document.getElementById("txtIdDestino").value;

	precioBase = 15000;

	switch (estacionDelAño)
	{
		case "Invierno":
			switch (localidadParaVacacionar)
			{
				case "Bariloche": 
					porcentaje = 0.20;
					break;

				case "Cataratas":
				case "Cordoba":
					porcentaje = -0.10;
					break;
				
				case "Mar del plata":
					porcentaje = -0.20;	//Poner porcentaje en negativo, implicaria que en la cuenta luego, en vez de 
										//sumar un 20%, lo reste.
			}
			break;

		case "Verano":
			switch (localidadParaVacacionar)
			{
				case "Bariloche":
					porcentaje = -0.20;
					break;

				case "Cataratas":
				case "Cordoba":
					porcentaje = 0.10;
					break;
				
				case "Mar del plata":
				{	
					porcentaje = 0.20;
					break;
				}
			}
			break;
		default:
			switch (localidadParaVacacionar)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 0.10;
					break;
				
				default:
					porcentaje = 0;
			}
	}

	cuentaPorcentaje = precioBase * porcentaje;

	precioFinal = precioBase + cuentaPorcentaje;
		
	alert ("Usted viaja a: " + localidadParaVacacionar + " En: " + estacionDelAño + ".   El precio final de su viaje es: " + precioFinal);

}// ENTREGADO