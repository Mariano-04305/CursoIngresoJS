function mostrar()
{
	let numeroRandom;
	
	numeroRandom = Math.round(Math.random()*10);

	
	if (numeroRandom <= 10 && numeroRandom > 8)
	{
		alert("nota: " + numeroRandom + "   calificacion: EXCELENTE");
	} 
	else if (numeroRandom <= 8 && numeroRandom > 4)
	{
		alert("nota: " + numeroRandom + "   calificacion: APROBÓ");
	}
	else 
	{
		alert("nota: " + numeroRandom + "   REPROBÓ... SUERTE LA PROXIMA")
	}
}

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
	reprobo = [1, 2, 3, 4];

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

