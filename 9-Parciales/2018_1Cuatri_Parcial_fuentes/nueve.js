function mostrar()
{
    let marcaIngresada;
    let pesoIngresado;
    let temperaturaIngresada;
    let respuesta;
    let banderaDelPrimero;

    banderaDelPrimero = true;

    do 
    {
        marcaIngresada = prompt("Ingrese el nombre de la marca del producto: ");

        do
        {
            pesoIngresado = prompt("Ingrese el peso del producto: ");
            pesoIngresado = parseInt(pesoIngresado);

        } while (isNaN(pesoIngresado) || (pesoIngresado < 1 || pesoIngresado > 100))
        
        do
        {
            temperaturaIngresada = prompt("Ingrese la temperatura del producto: ")
            temperaturaIngresada = parseInt(temperaturaIngresada);
            
        } while (isNaN(temperaturaIngresada) || (temperaturaIngresada < -30 || temperaturaIngresada > 30))


        respuesta = confirm("Desea continuar ingresando datos?");
    } while (respuesta == true)

}
