/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

let numeroSecreto;
let numeroIngresado;
let intentos;

intentos = 0;

function comenzar()
{
    numeroSecreto = Math.floor(Math.random() * (101 - 1) + 1);

    alert("Se ha generado un NUMERO random entre 1 y 100. Intenta adivinarlo presionando el botón verificar!");
    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresado = parseInt(numeroIngresado);
}

function verificar()
{
    let mensaje;
    
    if (isNaN(numeroSecreto))
    {
        alert("No hay numero secreto aun!!! Presiona 'comenzar' antes de verificar");
    }
    else
    {   
        intentos ++;
        document.getElementById("txtIdIntentos").value = intentos;

        if (numeroIngresado > numeroSecreto)
        {
            mensaje = "Se pasó";
        }
        else
        {
            if (numeroIngresado < numeroSecreto)
            {
                mensaje = "Falta";
            }
            else
            {
                mensaje = "Ganaste!! Y en solo: " + intentos + " intentos."
            }
        }
        alert(mensaje);
    }
   

	
}