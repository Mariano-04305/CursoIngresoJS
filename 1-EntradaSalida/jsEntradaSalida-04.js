/*
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.
*/

function mostrar()
{
    let seguir;
    let nombreIngresado;
    let nacionalidadIngresada;
    let posicionIngresada;
    let rojasRecibidasIngresada;
    let golesMarcadosIngresados;
    let banderaGoles;
    let maximoGoleador;
    let nombreMaximoGoleador;
    let banderaRojas;
    let minimoExpulsado;
    let nombreMinimoExpulsado; 
    let contadorJugadoresTotales;
    let jugadoresIngleses;
    let porcentajeIngleses;

    banderaGoles = true;
    banderaRojas = true;
    contadorJugadoresTotales = 0;
    jugadoresIngleses = 0;

    do
    {
        nombreIngresado = prompt("Ingrese el nombre del jugador: "); 
        
        nacionalidadIngresada = prompt("Ingrese la nacionalidad del jugador: ");
       
        do
        {
            posicionIngresada = prompt("Ingrese la posicion del jugador: ");
        } while(posicionIngresada != "Arquero" && posicionIngresada != "Defensor" && posicionIngresada != "Mediocampista" && posicionIngresada != "Delantero");

        do
        {
            rojasRecibidasIngresada = prompt("Ingrese cuantas tarjetas rojas recibió el jugador: ");
            rojasRecibidasIngresada = parseInt(rojasRecibidasIngresada);
        } while(isNaN(rojasRecibidasIngresada) || rojasRecibidasIngresada < 0)

        do
        {
            golesMarcadosIngresados = prompt("Ingrese cuantos goles marcó el jugador: ");
            golesMarcadosIngresados = parseInt(golesMarcadosIngresados);
        } while(isNaN(golesMarcadosIngresados) || golesMarcadosIngresados < 0)

        contadorJugadoresTotales ++;
    /*
        while(banderaGoles == true)
        {
            banderaGoles = false;

            maximoGoleador = golesMarcadosIngresados;
            nombreMaximoGoleador = nombreIngresado;
        }

        if (golesMarcadosIngresados > maximoGoleador)
        {
            maximoGoleador = golesMarcadosIngresados;
            nombreMaximoGoleador = nombreIngresado;
        }
    */
        if (golesMarcadosIngresados > maximoGoleador || banderaGoles == true) // ENTRA SI O SI POR LA BANDERA. Con '||' va a entrar aunque 1 solo sea true
        {
            banderaGoles = false;

            maximoGoleador = golesMarcadosIngresados;
            nombreMaximoGoleador = nombreIngresado;
        }

        switch (nacionalidadIngresada)
        {
            case "Argentino":
                if(banderaRojas == true)
                {
                    banderaRojas = false;

                    minimoExpulsado = rojasRecibidasIngresada;
                    nombreMinimoExpulsado = nombreIngresado;
                }
                else
                {
                    if (rojasRecibidasIngresada < minimoExpulsado)
                    {
                        minimoExpulsado = rojasRecibidasIngresada;
                        nombreMinimoExpulsado = nombreIngresado;

                    }
                }

                /*
                if (rojasRecibidasIngresada < minimoExpulsado || banderaRojas == true)
                {
                    banderaRojas = false;

                    minimoExpulsado = rojasRecibidasIngresada;
                    nombreMinimoExpulsado = nombreIngresado;
                }
                */

                break;
            case "Ingles":
                jugadoresIngleses ++;
                break;
        }

        seguir = confirm("Desea ingresar otro jugador?");
    } while (seguir == true);

    porcentajeIngleses = (jugadoresIngleses * 100) / contadorJugadoresTotales;

    document.write("NOMBRE DEL GOLEADOR DEL TORNEO: " + nombreMaximoGoleador + "<br>");
    if (banderaRojas == false)  // solo muestra la bandera si tiene algun valor
    {
        document.write("NOMBRE DEL ARGENTINO CON MENOS ROJAS RECIBIDAS: " + nombreMinimoExpulsado + "<br>");
    }
    document.write("POCENTAJE TOTAL DE JUGADORES INGLESES EN LA PREMIER: " + porcentajeIngleses + "%.");
}



/*

//Al presionar el  botón, 
//se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"


function mostrar()
{
    alert("Esto funciona de maravilla");  //alert () sirve para ejecutar algo. Una variable, texto, lo que sea. 
                                        //Se ejecuta lo que está entre paréntesis, en una ventanita emergente
}

*/