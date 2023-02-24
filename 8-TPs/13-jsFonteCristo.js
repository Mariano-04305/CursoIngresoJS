/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

let numeroPositivoIngresado;
let paresHastaCero;
let mensaje;
let divisibles;
let divisor;
let primo;


function ComenzarIngreso () 
{
    numeroPositivoIngresado = document.getElementById("txtIdNumero").value;
    numeroPositivoIngresado = parseInt(numeroPositivoIngresado);
}

function NumerosPares()
{
    ComenzarIngreso () 

    if((isNaN(numeroPositivoIngresado)) || (numeroPositivoIngresado < 0))
    {
        mensaje = "El valor ingresado no es numérico, es menor a '0' o no es par. Intente devuelta:";
    }
    else
    {
    /*  
        Intentar cambiar esto por un while o algo asi
    */
        if ((numeroPositivoIngresado % 2) == 0)
        {
            paresHastaCero = 1 + (numeroPositivoIngresado / 2); // 1 + xq cuento a 0 como par
        }
        else
        {
            paresHastaCero = 1 + (numeroPositivoIngresado / 2) - 0.5;
        }
        mensaje = "La cantidad de PARES entre " + numeroPositivoIngresado + " y '0' es de:   " + paresHastaCero;
    }
    alert(mensaje);
}

function NumerosImpares()
{
    ComenzarIngreso () 

    if((isNaN(numeroPositivoIngresado)) || (numeroPositivoIngresado < 0))
    {
        mensaje = "El valor ingresado no es numérico, es menor a '0' o no es par. Intente devuelta:";
    }
    else
    {
        if ((numeroPositivoIngresado % 2) == 0)
        {
            paresHastaCero = numeroPositivoIngresado / 2;
        }
        else
        {
            paresHastaCero = 1 + (numeroPositivoIngresado / 2) - 0.5;
        }
        mensaje = "La cantidad de IMPARES entre " + numeroPositivoIngresado + " y '0' es de:   " + paresHastaCero;
    }
    alert(mensaje);
}

function NumerosDivisibles()
{
    divisibles = 0;
    divisor = 100;

    ComenzarIngreso () 
    
    if((isNaN(numeroPositivoIngresado)) || (numeroPositivoIngresado < 0))
    {
        mensaje = "El valor ingresado no es numérico, es menor a '0' o no es par. Intente devuelta:";
    }
    else
    {
        while (divisor > 0)
        {
            if ((numeroPositivoIngresado % divisor) == 0)
            {
                divisibles ++;
            }
            divisor --;
        }
        mensaje = "La cantidad de numeros del 1 al 100 por las que " + numeroPositivoIngresado + " se puede dividir es de:   " + divisibles;
    }
    alert(mensaje);
}

function VerificarPrimo()
{
    divisibles = 0;
    divisor = 10;

    ComenzarIngreso () 

    if((isNaN(numeroPositivoIngresado)) || (numeroPositivoIngresado < 0))
    {
        mensaje = "El valor ingresado no es numérico, es menor a '0' o no es par. Intente devuelta:";
    }
    else
    {
        while (divisor > 0)
        {
            if ((numeroPositivoIngresado % divisor) == 0)
            {
                divisibles ++;
            }
            divisor --;
        }

        if (divisibles > 2)
        {
            mensaje = "No es primo";
        }
        else
        {
            mensaje = "Es primo";
        }
    }
    alert(mensaje);
}

function NumerosPrimos()
{
    divisibles = 0;
    divisor = 10;

    ComenzarIngreso () 

    if((isNaN(numeroPositivoIngresado)) || (numeroPositivoIngresado < 0))
    {
        mensaje = "El valor ingresado no es numérico, es menor a '0' o no es par. Intente devuelta:";
    }
    else
    {
        while (divisor > 0)
        {
            if ((numeroPositivoIngresado % divisor) == 0)
            {
                divisibles ++;
            }
            divisor --;
        }   

        if (divisibles < 3)
        {   
            numeroPositivoIngresado = primo;
            do
            {
                divisor == 10;

                while (divisor > 0)
                {
                    if ((primo % divisor) == 0)
                    {
                        divisibles ++;
                    }
                    divisor --;
                }  

                if (divisibles < 3)
                {
                    primo += primo += "";
                }

                primo --;
            } while(primo > 0);
        }
    }
    alert(mensaje);
// AGREGAR STRING VACIO "" A NUMBER PARA CONVERTIRLO EN STRING Y CONCATENAR
}
