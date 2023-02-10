function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 dias"; // Poner el mensaje o lo q sea AL FINAL de los varios casos q sean iguales
			break;

		default:
				mensaje = "Este mes tiene 30 dias";
	}
alert(mensaje);
}//ENTREGADO



/*	USANDO IF

	switch (mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;

		default:

			if (mesDelAño == "Enero" || mesDelAño == "Marzo" || mesDelAño == "Mayo" || mesDelAño == "Julio" ||mesDelAño == "Agosto" || mesDelAño == "Octubre" || mesDelAño == "Diciembre")
			{
				mensaje = "Este mes tiene 31 dias";
			}
			else
			{
				mensaje = "Este mes tiene 30 dias";
			}
	}
*/