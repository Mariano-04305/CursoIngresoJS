/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
división o multiplicación) para realizar entre estos
dos números, estas operaciones también serán Random.
En el cuadro de texto resultado el jugador debe ingresar
el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

let numeroRandomUno;
let numeroRandomDos;
let operadorRandom;
let operadorQueSeMuestraEnPantalla;
let operacion;

function comenzar()
{
    numeroRandomUno = Math.floor(Math.random() * (11 - 1) + 1);
    numeroRandomDos = Math.floor(Math.random() * (11 - 1) + 1);

    operadorRandom = Math.floor(Math.random() * (5 - 1) + 1);

    switch (operadorRandom)
    {
        case 1:
            operadorQueSeMuestraEnPantalla = "+";
            operacion = numeroRandomUno + numeroRandomDos;
            break;
        case 2: 
            operadorQueSeMuestraEnPantalla = "-";
            operacion = numeroRandomUno - numeroRandomDos;
            break;
        case 3:
            operadorQueSeMuestraEnPantalla = "*";
            operacion = numeroRandomUno * numeroRandomDos;
            break;
        case 4:
            operadorQueSeMuestraEnPantalla = "/";
            operacion = numeroRandomUno / numeroRandomDos;
            break;
    }

    document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;
    document.getElementById("txtIdOperador").value = operadorQueSeMuestraEnPantalla;
    document.getElementById("txtIdSegundoNumero").value = numeroRandomDos;

	

}
function Responder()
{
	let respuestaIngresada;
    let mensaje;

    respuestaIngresada = document.getElementById("txtIdRespuesta").value;
    respuestaIngresada = parseInt(respuestaIngresada);

    if (isNaN(respuestaIngresada))
    {
        mensaje = "El dato ingresado no es numérico. Asegurate de ingresar un numero.";
    }
    else
    {
        if (respuestaIngresada == operacion)
        {
            mensaje = "Respuesta correcta!!";
        }
        else
        {
            mensaje = "Respuesta incorrecta. Intente de nuevo";
        }
    }
    alert(mensaje);
}
