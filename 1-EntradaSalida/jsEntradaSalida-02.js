/*
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.

*/

function mostrar()
{
    let seguir;
    let nombreIngresado;
    let edadIngresada;
    let tipoIngresado;
    let pesoIngresado;
    let diagnósticoIngresado;
    let tieneVacunaIngresado;
    let banderaVacunaSi;
    let masViejaConVacuna;
    let nombremasViejaConVacuna;
    let contadorSinVacunaYConParasitos;
    let gatoContadorDigestivos;
    let perroContadorDigestivos;
    let hamsterContadorDigestivos;
    let nombreTipoConMasProblemaDigestivo;
    let banderaJoven;
    let edadmascotaMasJoven;
    let nombreMasJoven;
    let diagnósticoMasJóven;
    let contadorPerroOtitis;

    banderaVacunaSi = true;    
    contadorSinVacunaYConParasitos = 0;
    gatoContadorDigestivos = 0;
    perroContadorDigestivos = 0;
    hamsterContadorDigestivos = 0;
    banderaJoven = true;
    contadorPerroOtitis = 0;

    do
    {
        nombreIngresado = prompt("Ingresa el mombre de la mascota: ");

        do
        {
            edadIngresada = prompt("Ingresa la edad de la mascota (1 a 20)");
            edadIngresada = parseInt(edadIngresada);
        } while(isNaN(edadIngresada) || (edadIngresada < 1 || edadIngresada > 20));
        
        do
        {
            tipoIngresado = prompt("Ingrese el tipo de mascota que tiene: ");
        } while(tipoIngresado != "gato" && tipoIngresado != "perro" && tipoIngresado != "hamster");

        do
        {
            pesoIngresado = prompt("Ingrese el peso de la mascota: ");
            pesoIngresado = parseInt(pesoIngresado);
        } while (isNaN(pesoIngresado) || pesoIngresado < 0)

        do
        {
            diagnósticoIngresado = prompt("Ingresa el diagnostico: ");
        } while (diagnósticoIngresado != "problemas digestivos" && diagnósticoIngresado != "otitis" && diagnósticoIngresado != "alergias en la piel" && diagnósticoIngresado != "parasitos" && diagnósticoIngresado != "picazon de abeja");

        do
        {
            tieneVacunaIngresado = prompt("Su mascota tiene vacuna antirrábica?: ");
        } while (tieneVacunaIngresado != "si" && tieneVacunaIngresado != "no");

        switch (tieneVacunaIngresado)
        {
            case "si":
                while (banderaVacunaSi == true)
                {
                    banderaVacunaSi = false;

                    masViejaConVacuna = edadIngresada;
                    nombremasViejaConVacuna = nombreIngresado;
                }

                if (edadIngresada > masViejaConVacuna)
                {
                    masViejaConVacuna = edadIngresada;
                    nombremasViejaConVacuna = nombreIngresado;
                }
                break;
            case "no":
                nombremasViejaConVacuna = "No hay mascotas que SI tengan vacuna";
                if (diagnósticoIngresado == "parasitos")
                {
                    contadorSinVacunaYConParasitos ++;
                }
        }

        if (diagnósticoIngresado == "problemas digestivos")
        {
            switch (tipoIngresado)
            {
                case "gato":
                    gatoContadorDigestivos ++;
                    break;
                case "perro":
                    perroContadorDigestivos ++;
                    break;
                case "hamster":
                    hamsterContadorDigestivos ++;
                    break;
            }
        }
        
        while (banderaJoven == true)
        {
            banderaJoven = false;

            edadmascotaMasJoven = edadIngresada;
            nombreMasJoven = nombreIngresado;
            diagnósticoMasJóven = diagnósticoIngresado;
        }

        if (edadIngresada < edadmascotaMasJoven)
        {
            edadmascotaMasJoven = edadIngresada;
            nombreMasJoven = nombreIngresado;
            diagnósticoMasJóven = diagnósticoIngresado;
        }

        if (tipoIngresado == "perro")
        {
            if (diagnósticoIngresado == "otitis")
            {
                contadorPerroOtitis ++;
            }
        }

        seguir = confirm("Desea ingresar otra mascota?: ");
    } while(seguir == true);

    if (gatoContadorDigestivos > perroContadorDigestivos && gatoContadorDigestivos > hamsterContadorDigestivos)
    {
        nombreTipoConMasProblemaDigestivo = "gato";
    }
    else
    {
        if (perroContadorDigestivos > gatoContadorDigestivos && perroContadorDigestivos > hamsterContadorDigestivos)
        {
            nombreTipoConMasProblemaDigestivo = "perro";
        }
        else
        {
            if (hamsterContadorDigestivos > gatoContadorDigestivos && hamsterContadorDigestivos > perroContadorDigestivos)
            {
                nombreTipoConMasProblemaDigestivo = "hamster";
            }
            else
            {
                nombreTipoConMasProblemaDigestivo = "no hay un tipo de animal con + problemas digestivos que los otros dos";
            }
        }
    }

    document.write("NOMBRE MASCOTA MAS VIEJA CON VACUNA ANTIRRABICA: " + nombremasViejaConVacuna + "<br>");
    document.write("Cantidad de mascotas sin vacuna antirrábica y con parásitos: " + contadorSinVacunaYConParasitos + "<br>");
    document.write("El tipo de mascota con más ingresos por problemas digestivos: " + nombreTipoConMasProblemaDigestivo + "<br>");
    document.write("MASCOTA MAS JOVEN INGRESADA. Nombre: " + nombreMasJoven + ". Edad: " + edadmascotaMasJoven + ". Diagnostico: " + diagnósticoMasJóven + "<br>");
    document.write("Cantidad de perros ingresados por otitis: " + contadorPerroOtitis);
}



/*

    Debemos lograr tomar un nombre con 'prompt' 
	y luego mostrarlo por 'alert' al presionar el botón  'mostrar'

function mostrar()
{
    let nombre;
    nombre = prompt ("Ingresa tu nombre");	//VALOR DE ASIGNACION = Así, una variable, nombre en este caso, obtiene el valor
    alert(nombre);							//el prompt es una pedida de datos al usuario
}

*/