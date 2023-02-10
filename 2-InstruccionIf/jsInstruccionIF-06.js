function mostrar()
{ 
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18)
	{
		mensaje = "Usted es mayor de edad";
	}
	else
	{
		if (edad < 18 && edad > 12)
		{
			mensaje = "Usted es adolescente";
		}
		else
		{
			mensaje = "Usted es un niño";
		}
	}

	alert(mensaje);
	
}

/*
	if (edad <= 3)
	{
		alert("sos un bebito")
	}
	else
	{
		if (edad >= 4 && edad <= 10)
		{
			alert("sos un niño")
		}
		else
		{
			if (edad > 10 && edad < 13)
			{
				alert("sos un preadolescente")
			}
			else
			{
				if (edad >= 13 && edad <= 17)
				{
					alert("sos un adolescente")
				}
				else 
				{
					if (edad >= 18 && edad <= 29)
					{
						alert("sos un jóven adulto")
					}
					else
					{
						if (edad > 29 && edad < 46)
						{
							alert("sos un adulto")
						}
						else
						{
							if (edad > 45 && edad <= 65)
							{
								alert("usted es un señor")
							}
							else
							{
								if (edad > 65)
								{
									alert("usted es un jubilado")
								}
							}
						}
					}
				}
			}
		}
	}
	
}
*/
/*	CONSIGNA REAL
if (edad <= 12) {

	alert ("usted es un niño")

} else if (edad >= 13  && edad <= 17) {

	alert("usted es adolescente")

} else {
	
	alert ("usted es mayor de edad")
}
*/


/*	OTRA OPCION, SIN ELSE IF

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad <= 12) 
	{
		alert("uste e niñoou");
	} 
	else 
	{
		if (edad >= 13 && edad <= 17) 
		{
			alert("ud es adoles");
		}	
		else 
		{
			alert("u e adulttto");
		}
	}
}

*/

	
