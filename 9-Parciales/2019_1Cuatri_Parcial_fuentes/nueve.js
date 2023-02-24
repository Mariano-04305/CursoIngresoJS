function mostrar()
{
    let respuesta;
    let nombrePaisIngresado;
    let habitantesIngresados;
    let temperaturaIngresada;

    let contadorTemperaturasPares;

    let banderaPrimerPais;
    let paisMenosHabitantes;
    let nombrePaisMenosHabitantes;

    let banderaPrimeraTemperatura;
    let paisTemperaturaMasBaja;
    let nombrePaisMenorTemperatura;

    let acumuladorHabitantesPaises;
    let contadorPaises;
    let promedioHabitantesPaises;
    let contadorPaisesCalidos;
    acumuladorHabitantesPaises = 0;
    contadorPaises = 0;

    contadorTemperaturasPares = 0;

    banderaPrimerPais = true;
    banderaPrimeraTemperatura = true;
    contadorPaisesCalidos = 0;

    do 
    {
        nombrePaisIngresado = prompt("Ingrese el nombre del país: ");

        do
        {
            habitantesIngresados = prompt("Ingrese EN MILLONES, la cantidad de habitantes del país (1 a 7000): ");
            habitantesIngresados = parseInt(habitantesIngresados);
        } while (isNaN(habitantesIngresados) || (habitantesIngresados < 1 || habitantesIngresados > 7000));

        do
        {
            temperaturaIngresada = prompt("Ingrese la temperatura del pais (-50 a 50): ");
            temperaturaIngresada = parseInt(temperaturaIngresada);
        } while(isNaN(temperaturaIngresada) || (temperaturaIngresada < -50 || temperaturaIngresada > 50));

        contadorPaises ++;
        acumuladorHabitantesPaises += habitantesIngresados;

        if (temperaturaIngresada % 2 == 0)
        {
            contadorTemperaturasPares ++;
        }   
        
        if (temperaturaIngresada > 39)
        {
            contadorPaisesCalidos ++;
        }

        while(banderaPrimerPais == true)
        {
            banderaPrimerPais = false;

            paisMenosHabitantes = habitantesIngresados;
            nombrePaisMenosHabitantes = "El nombre del pais con menos habitantes es: " + nombrePaisIngresado;
        }

        if (habitantesIngresados < paisMenosHabitantes)
        {
            paisMenosHabitantes = habitantesIngresados;
            nombrePaisMenosHabitantes = "El nombre del pais con menos habitantes es: " + nombrePaisIngresado;
        }

        while(banderaPrimeraTemperatura == true)
        {
            banderaPrimeraTemperatura = false;

            paisTemperaturaMasBaja = temperaturaIngresada;
            nombrePaisMenorTemperatura = nombrePaisIngresado;
        }

        if (habitantesIngresados < paisMenosHabitantes)
        {
            paisTemperaturaMasBaja = "La temperatura minima ingresada es de: " + temperaturaIngresada;
            nombrePaisMenorTemperatura = "El nombre del país con temperatura mas baja es: " + nombrePaisIngresado;
        }

        respuesta = confirm("Desea ingresar los datos de otro pais mas?: ");
    } while (respuesta == true)

    promedioHabitantesPaises = "El promedio de habitantes de los paises ingresados es: " + (acumuladorHabitantesPaises / contadorPaises);

    document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares + "<br>");
    document.write(nombrePaisMenosHabitantes + "<br>");
    document.write("La cantidad de paises con temperatura minima +40 es de: " + contadorPaisesCalidos + "<br>");
    document.write(promedioHabitantesPaises + "<br>");
    document.write(paisTemperaturaMasBaja + nombrePaisMenorTemperatura);
}
