function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	if (edad >= 13  && edad <= 17) 
	{
		alert("usted es adolescente")
	}
}

/*	IF ANIDADOS
	if (edad < 18) 
	{
		if (edad >= 13) 
		{
			alert("es adolescente")
		}
	}
*/
