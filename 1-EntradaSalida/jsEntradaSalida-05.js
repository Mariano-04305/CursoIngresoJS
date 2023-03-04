/*
En una partida de todos contra todos de CS-GO (Juego de disparos) un grupo 
de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:
Nombre del jugador.
Edad del jugador - Mayor de edad.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR
A) Nombre del jugador más joven.
B) El jugador que más bajas tuvo.
C) El jugador que menos muertes tuvo.
D) El promedio de bajas.
E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
F) El nombre y edad del jugador que más muertes tuvo.
*/

function mostrar()
{
    let nombreIngresado;
    let edadIngresada;
    let bajasIngresadas;
    let muertesIngresadas;

    let vueltas = 0;

    let edadMasJoven;
    let nombreEdadMasJoven;
    let banderaEdad = true;

    
    let maximoBajas;
    let nombreMaximoBajas;
    let banderaBajas = true;

    let banderaMuertes = true;
    let muertesMaximo;
    let muertesMinimo;
    let nombreMuertesMinimo;
    let nombreMuertesMaximo;
    let edadMuertesMinimo;

    let contadorJugadores = 0;
    let acumuladorBajas = 0;
    let promedioBajas;

    let contadorPlayersRangoKills = 0;

    do
    {
        do
        {
            nombreIngresado = prompt("Nombre:");
        } while (nombreIngresado == "" || !isNaN(nombreIngresado));

        do
        {
            edadIngresada = prompt("Edad: ");
            edadIngresada = parseInt(edadIngresada);
        } while (isNaN(edadIngresada) || edadIngresada < 18 );
    
        do
        {
            bajasIngresadas = prompt("Bajas: ");
            bajasIngresadas = parseInt(bajasIngresadas);
        } while (isNaN(bajasIngresadas) || bajasIngresadas < 0 );

        do
        {
            muertesIngresadas = prompt("Muertes: ");
            muertesIngresadas = parseInt(muertesIngresadas);
        } while (isNaN(muertesIngresadas) || muertesIngresadas < 0 );

        contadorJugadores ++;
        acumuladorBajas += bajasIngresadas;

        if (banderaEdad == true || edadIngresada < edadMasJoven) 
        {
            banderaEdad = false;
        
            edadMasJoven = edadIngresada;
            nombreEdadMasJoven = nombreIngresado;
        }

        if (banderaBajas == true || bajasIngresadas > maximoBajas) 
        {
            banderaBajas = false;

            maximoBajas = bajasIngresadas;
            nombreMaximoBajas = nombreIngresado;
        }

        if (banderaMuertes == true)
        {
            banderaMuertes = false;
        
            muertesMaximo = muertesIngresadas;
            muertesMinimo = muertesIngresadas;
            nombreMuertesMaximo = nombreIngresado;
            nombreMuertesMinimo = nombreIngresado;
            edadMuertesMinimo = edadIngresada;
        }
        else
        {
            if (muertesIngresadas > muertesMaximo)
            {
                muertesMaximo = muertesIngresadas;
                nombreMuertesMinimo = nombreIngresado;
            }
            else
            {
                if (muertesIngresadas < muertesMinimo)
                {
                    muertesMinimo = muertesIngresadas;
                    nombreMuertesMaximo = nombreIngresado;
                }
            }
        }
        
        if (edadIngresada > 19 && edadIngresada < 31)
        {
            if (bajasIngresadas > 9 && bajasIngresadas < 16)
            {
                contadorPlayersRangoKills++;
            }
        }


        /*
     
        D) El promedio de bajas.
        E) Cantidad de jugadores que tienen entre 20 y 30 años 
        cuyas bajas están entre 10 y 15.
       
        */
        vueltas ++;
    } while(vueltas < 2);

    promedioBajas = acumuladorBajas / contadorJugadores;

    document.write("Nombre del jugador más joven: " + nombreEdadMasJoven + "<br>");
    document.write("El jugador que más bajas tuvo: " + nombreMaximoBajas + "<br>");
    document.write("El jugador que menos muertes tuvo: " + nombreMuertesMinimo + "<br>");
    document.write("El promedio de bajas: " + promedioBajas + "<br>");
    document.write("Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15: " + contadorPlayersRangoKills + "<br>");
    document.write("El nombre y edad del jugador que más muertes tuvo. Nombre: " + nombreMuertesMaximo + ". Edad: " + edadMuertesMinimo);
}