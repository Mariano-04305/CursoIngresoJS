function mostrar()
{
	let destinoElegido;
	let mensajeNorteYSur;
	let mensajeEsteYOeste;

	destinoElegido = document.getElementById("txtIdDestino").value;

	switch (destinoElegido)
	{
		case "Bariloche":
			mensajeEsteYOeste = "al OESTE";
		case "Ushuaia":
			mensajeNorteYSur = "al SUR";	
			break;

		case "Cataratas":
			mensajeNorteYSur = "al NORTE";
		case "Mar del plata":
			mensajeEsteYOeste = "al ESTE";
			break;
	}
/*
  LO HICE ASI A PROPOSITO. NO SE SI ESTÁ BIEN.
  Aunque ponga undefined en algunas, mi idea era señalar en bariloche y cataratas, tanto 
  latitud como altitud, porque quedan al sur/norte y al este/oeste, en cambio, las otras 2, 
  quedan al este/oeste, pero no al norte/sur.
*/
	alert("Su destino está: " + mensajeNorteYSur + " Y tambien: " + mensajeEsteYOeste);

} // ENTREGADO