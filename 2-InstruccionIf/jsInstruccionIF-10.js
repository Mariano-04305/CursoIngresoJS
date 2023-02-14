function mostrar()
{
	let numeroRandom;
	let mensaje;

	numeroRandom = Math.floor(Math.random() * (11 - 1) + 1); 

	
	if (numeroRandom <= 10 && numeroRandom > 8)
	{
		mensaje = "nota: " + numeroRandom + "   calificacion: EXCELENTE";
	} 
	else 
	{
		if (numeroRandom <= 8 && numeroRandom > 4)
		{
			mensaje = "nota: " + numeroRandom + "   calificacion: APROBÓ";
		}
		else
		{
			mensaje = "nota: " + numeroRandom + "   REPROBÓ... SUERTE LA PROXIMA";
		}
	}
	
	alert(mensaje);

}//ENTREGADO

/*	DATO DATO DATO

	aprobo = [5, 6, 7, 8];	LE ASIGNO VARIOS VALORES A LA VARIABLE
	alert(aprobo[2]);		CON EL 0, MOSTRARIA EL 5, 1 = 6, 2 = 7...etc.
	
*/



/* POR QUÉ NO FUNCIONA???

	let numeroRandom;
	let excelente;
	let aprobo;
	let reprobo;

	numeroRandom = Math.round(Math.random()*10);

	excelente = "9" + "10";
	excelente = parseInt(excelente);
	aprobo = [5, 6, 7, 8];
	aprobo = parseInt(aprobo);

	if (numeroRandom == excelente)
	{
		alert("nota: " + numeroRandom + "   calificacion: EXCELENTE");
	} 
	else if (numeroRandom == aprobo)
	{
		alert("nota: " + numeroRandom + "   calificacion: APROBÓ");
	}
	else
	{
		alert("nota: " + numeroRandom + "   REPROBÓ... SUERTE LA PROXIMA")
	}
*/

