function mostrar()
{
    let numeroIngresadoUno;
    let numeroIngresadoDos;
    let mensaje;

    do
    {
        numeroIngresadoUno = prompt("Ingresa un numero");
        numeroIngresadoUno = parseInt(numeroIngresadoUno);

    } while (isNaN(numeroIngresadoUno));

    do
    { 
        numeroIngresadoDos = prompt("Ingresa otro numero");
        numeroIngresadoDos = parseInt(numeroIngresadoDos);

    } while(isNaN(numeroIngresadoDos));
    
    if (numeroIngresadoUno == numeroIngresadoDos)
    {  
        numeroIngresadoUno = numeroIngresadoUno.toString(); // para convertir numero a string
        numeroIngresadoDos = numeroIngresadoDos.toString();

        mensaje = numeroIngresadoUno + numeroIngresadoDos; 
    }
    else
    {
        if (numeroIngresadoUno > numeroIngresadoDos)
        {
            mensaje = numeroIngresadoUno - numeroIngresadoDos;
        }
        else
        {
            mensaje = numeroIngresadoUno + numeroIngresadoDos;
        }

        if (mensaje > 10)
        {
            mensaje = (numeroIngresadoUno + numeroIngresadoDos) + "   La suma es mayor a 10";
        }
    }
    alert(mensaje);
}
