function mostrar()
{
    let numeroIngresado;
    let divisor;
    let cantidadDivisores;
    let concatenadorDeDivisores;

    cantidadDivisores = 0;

    do
    {
        numeroIngresado = prompt("Ingresa un numero: ");
        numeroIngresado = parseInt(numeroIngresado);
    } while(isNaN(numeroIngresado) || numeroIngresado < 0);

    for (divisor = 0 ; divisor <= numeroIngresado ; divisor ++)
    {
        if (numeroIngresado % divisor == 0)
        {
            cantidadDivisores ++;

            document.write(divisor + "-")

        }
    }
    document.write("<br>" + "La cantidad de divisores del numero ingresado es de: " + cantidadDivisores);

}//FIN DE LA FUNCIÓN