/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	let contraseña;
	let contraseñaIngresada;

	contraseña = "utn750";

	contraseñaIngresada = prompt("Ingrese su contraseña");

	while (contraseñaIngresada != contraseña)
	{
		alert("La contraseña es incorrecta, intente de nuevo");

		contraseñaIngresada = prompt("Ingrese su contraseña nuevamente");
	}
	alert("Has iniciado sesión");
	
}//ENTREGADO
