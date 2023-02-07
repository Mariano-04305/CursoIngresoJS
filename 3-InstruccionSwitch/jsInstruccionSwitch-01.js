function mostrar()
{
	//tomo el mes
	let mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)	//Si lo que está en los "" del case es igual a mesDelAño, se ejecuta.
	{
		case "Enero" : // EL ENERO TIENE QUE COINCIDIR CON EL STRING DEL HTML CORRESPONDOENTE.
		{
			alert("Arranca el año");	// break; evita que se ejecute el de abajo
			break;
		}
		case "Marzo" :
		{
			alert("Arrancan las clases");
			break;
		}
		case "Julio" :
		{
			alert("Vacaciones de invierno!");
			break;
		}
		case "Diciembre" :
		{
			alert("Felices fiestas!");
			break;
		}
	}
}//