function mostrar()
{
	let nombreIngresado;	// pedir datos
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresada;
	let respuesta;
	let banderaPrimeraTemperatura; // punto a
	let temperaturaMaxima;
	let nombreDeMayorTemperatura;
	let contadorMayoresViudos;	// puntos b y c
	let contadorHombresViudosOSolteros;
	let contadorHombresSolteros;		// punto e
	let acumuladorEdadHombresSolteros;
	let promedioEdadHombresSolteros;
	let contadorViejosFiebre;	// punto d

	banderaPrimeraTemperatura = true;
	contadorMayoresViudos = 0;
	contadorHombresViudosOSolteros = 0;
	contadorHombresSolteros = 0;
	acumuladorEdadHombresSolteros = 0;
	contadorViejosFiebre = 0;

	do
	{
		nombreIngresado = prompt("Ingrese el nombre del pasajero:");

		do
		{
			edadIngresada = prompt("Ingrese la edad del pasajero: ");
			edadIngresada = parseInt(edadIngresada);
		} while(isNaN(edadIngresada));
		
		do
		{
			sexoIngresado = prompt("Ingrese el sexo del pasajero (f o m): ");
		} while (sexoIngresado != "f" && sexoIngresado != "m");
		
		do
		{
			estadoCivilIngresado = prompt("Ingrese el estado civil del pasajero (soltero, casado o viudo): ");
		} while (estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo");
				

		do
		{
			temperaturaCorporalIngresada = prompt("Ingrese su temperatura corporal (en grados c°): ");
			temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		} while(isNaN(temperaturaCorporalIngresada));
		
		while (banderaPrimeraTemperatura == true)
		{
			banderaPrimeraTemperatura = false;

			temperaturaMaxima = temperaturaCorporalIngresada;
		}

		if (temperaturaCorporalIngresada > temperaturaMaxima)
		{
			temperaturaMaxima = temperaturaCorporalIngresada;
			nombreDeMayorTemperatura = nombreIngresado;
		}

		if (edadIngresada > 17)
		{
			if (estadoCivilIngresado == "viudo")
			{
				contadorMayoresViudos ++;
			}

			if (edadIngresada >= 60)
			{
				if (temperaturaCorporalIngresada > 38)
				{
					contadorViejosFiebre ++;
				}
				
			}
		}

		if (sexoIngresado == "m")
		{
			switch (estadoCivilIngresado)
			{	
				case "viudo":
					contadorHombresViudosOSolteros;
					break;
				case "soltero":
					contadorHombresViudosOSolteros ++;
					contadorHombresSolteros ++;
					acumuladorEdadHombresSolteros += edadIngresada;
					break;
			}
		}

		respuesta = confirm("Desea ingresar los datos de otro pasajero?");
	} while (respuesta == true);

	promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;

	alert("El nombre de la persona con mayor temperatura del vuelo es de: " + nombreDeMayorTemperatura);
	alert("La cantidad de mayores de edad (+18) que están viudos es de: " + contadorMayoresViudos);
	alert("La cantidad de hombres que están o solteros o viudos es de: " + contadorHombresViudosOSolteros);
	alert("La cantidad de ancianos (+ 60) que tienen +38 grados de temperatura corporal es de: " + contadorViejosFiebre);
	alert("El promedio de edad entre los hombres solteros es de: " + promedioEdadHombresSolteros);
}
