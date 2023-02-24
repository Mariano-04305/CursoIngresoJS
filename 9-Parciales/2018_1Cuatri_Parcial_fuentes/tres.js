function mostrar()
{
    let precioIngresado;
    let descuentoIngresado;
    let precioFinal;

    do
    { 
        precioIngresado = prompt("Ingrese el precio");
        precioIngresado = parseInt(precioIngresado);

    } while (isNaN(precioIngresado) || (precioIngresado < 1));

    do 
    {
        descuentoIngresado = prompt("Ingrese el descuento que le quiere asignar al precio previo:");
        descuentoIngresado = parseInt(descuentoIngresado);

    } while (isNaN(descuentoIngresado) || (descuentoIngresado > 100 || descuentoIngresado < 1)) 

    precioFinal = precioIngresado - ((precioIngresado / 100) * descuentoIngresado);

    document.getElementById("elPrecioFinal").value = "El precio con descuento será de: " + precioFinal;
}
