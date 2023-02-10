function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace FRIO";
			break;

		case "Cataratas":
		case "Mar del plata":
			mensaje  = "Hace CALOR";
	}
	alert(mensaje);
}//ENTREGADO