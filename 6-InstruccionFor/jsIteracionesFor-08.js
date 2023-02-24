function mostrar()
{
    let numeroIngresado;
    let mensaje;
    let divisor;
    let cantidadDivisores;

    cantidadDivisores = 0;

    do
    {
        numeroIngresado = prompt("Ingresa un numero: ");
        numeroIngresado = parseInt(numeroIngresado);
    } while(isNaN(numeroIngresado) || numeroIngresado < 0);
    
    for (divisor = 0 ; divisor <= 10 ; divisor ++)
    {
        if (numeroIngresado % divisor == 0)
        {
            cantidadDivisores ++;
        }
    }

    if (cantidadDivisores > 2)
    {
        mensaje = "El numero no es primo";
    }
    else
    {
        mensaje = "El numero es primo";
    }

    alert(mensaje); 
}//FIN DE LA FUNCIÓN