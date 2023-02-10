function mostrar()
{

	
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Enero":		// No le pongo nada ni break a varios casos, y al ultimo del rango, si el mensaje, 
		case "Febrero":		// para ahorrar codigo.
		case "Marzo":	
		case "Abril":	
		case "Mayo":	
		case "Junio":
			mensaje = "falta para el invierno";
			break;

		case "Julio":
			mensaje = "Abrigate que hace frio";
			break;

		case "Agosto":
			mensaje = "Abrigate que hace frio";
			break;

		default:
			mensaje = "Ya pasamos el frío, ahora calor!!";
	}
alert(mensaje);
}// ENTREGADO

//FIN DE LA FUNCIÓN

/*	SITUACION 1. Usando if

	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Julio":
			mensaje = "Abrigate que hace frio";
			break;

		case "Agosto":
			mensaje = "Abrigate que hace frio";
			break;

		default:
			if (mesDelAño == "Enero" || mesDelAño == "Febrero" || mesDelAño == "Marzo" || mesDelAño == "Abril" || mesDelAño == "Mayo" || mesDelAño == "Junio")
			{
				mensaje = "falta para el invierno";
			}
			else
			{
				mensaje = "Ya pasamos el frio, ahora calor!!!";			
			}
	}
	alert(mensaje);	




	SITUACION 2; SIN CONFIRMAR.

	let mesDelAño;
	let mensaje;
	let antesDeInvierno;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	antesDeInvierno = "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio";
	
	switch (mesDelAño)
	{
		case antesDeInvierno:
			mensaje = "Falta para el invierno";
			break;

		case "Julio":
			mensaje = "Abrigate que hace frio";
			break;

		case "Agosto":
			mensaje = "Abrigate que hace frio";
			break;

		default:
			mensaje = "Ya pasamos el frío, ahora calor!!";
	}
alert(mensaje);
*/