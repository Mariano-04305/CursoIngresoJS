function mostrar()
{
	let hora;
	let mensaje;

	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	switch (hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde";
			break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			mensaje = "Es de noche";
			break;

		default:
			mensaje = "Esta hora NO existe";
	}

	alert(mensaje);

}// ENTREGADO



/*	CON IF

	let hora;
	let mensaje;

	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	switch (hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;

		default:
			if (hora > 11 && hora < 20)
			{
				mensaje = "Es de tarde";
			}
			else
			{
				if ((hora > 19 && hora < 25) || (hora >= 0 && hora < 7))
				{
					mensaje = "Es de noche";
				}
				else
				{
					mensaje = "Esta hora no existe";
				}
			}
	}
	alert(mensaje);
*/