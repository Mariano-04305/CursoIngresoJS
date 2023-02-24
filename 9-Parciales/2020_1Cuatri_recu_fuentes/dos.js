function mostrar()
{
    let respuesta;  // bucle y pedido de datos
    let materialIngresado;
    let cantidadBolsasIngresadas;
    let precioPorBolsaIngresado;
    let precioTotalSindescuento;
    let acumuladorPrecioTotalSindescuento;    // C
    let banderaPrimerPrecioFinal;
    let precioTotalSindescuentoMasCaro;
    let tipoMasCaro;
    let acumuladorBolsasCal;  // acumuladores de c/u
    let acumuladorBolsasArena;
    let acumuladorBolsasCemento;  
    let acumuladorBolsas;
    let descuento;   // A
    let porcentaje;       
    let precioTotalCondescuento;
    let tipoConMayorCantidadBolsas;  // B
    let mensaje; // DESCEUTNOS;
    let mensajeDescuento;

    banderaPrimerPrecioFinal = true;
    acumuladorBolsas = 0;
    acumuladorBolsasCal = 0;
    acumuladorBolsasArena = 0;
    acumuladorBolsasCemento = 0;
    acumuladorPrecioTotalSindescuento = 0;

    do
    {
        do
        {
            materialIngresado = prompt("Ingrese el tipo de material: (cal, arena o cemento): ");
        } while(materialIngresado != "cal" && materialIngresado != "arena" && materialIngresado != "cemento");

        do
        {
            cantidadBolsasIngresadas = prompt("Ingrese la cantidad de bolsas a comprar del material anterior: ");
            cantidadBolsasIngresadas = parseInt(cantidadBolsasIngresadas);
        } while(isNaN(cantidadBolsasIngresadas) || (cantidadBolsasIngresadas < 1));
        
        do
        {
            precioPorBolsaIngresado = prompt("Ingrese el precio por bolsa del material: ");
            precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);
        } while(isNaN(precioPorBolsaIngresado) || (precioPorBolsaIngresado < 1))

        acumuladorBolsas += cantidadBolsasIngresadas;

        precioTotalSindescuento = cantidadBolsasIngresadas * precioPorBolsaIngresado;
        acumuladorPrecioTotalSindescuento += precioTotalSindescuento;

        while (banderaPrimerPrecioFinal == true)
        {
            banderaPrimerPrecioFinal = false;

            precioTotalSindescuentoMasCaro = precioTotalSindescuento;
            tipoMasCaro = materialIngresado;
        }

        if (precioTotalSindescuento > tipoMasCaro)
        {
            precioTotalSindescuentoMasCaro = precioTotalSindescuento;
            tipoMasCaro = materialIngresado;
        }

        switch(materialIngresado)
        {
            case "cal":
                acumuladorBolsasCal += cantidadBolsasIngresadas;
                break;
            case "arena":
                acumuladorBolsasArena += cantidadBolsasIngresadas;
                break;
            case "cemento":
                acumuladorBolsasCemento += cantidadBolsasIngresadas;
                break;
        }

        respuesta = confirm("Desea seguir ingresando materiales?: ");
    } while (respuesta == true);

    if (acumuladorBolsas > 30)
    {
        porcentaje = 0.25;
    }
    else
    {
        if (acumuladorBolsas > 10)
        {
            porcentaje = 0.10;
        }
        else
        {
            porcentaje = 0;
        }
    }

    if (porcentaje == 0)
    {
        mensaje = "Su precio final es de: " + acumuladorPrecioTotalSindescuento;
        mensajeDescuento = "No hay descuento en este caso";
    }
    else
    {
        descuento = acumuladorPrecioTotalSindescuento * porcentaje;
        precioTotalCondescuento = acumuladorPrecioTotalSindescuento - descuento;

        mensaje = "Su precio sin descuento es de: " + acumuladorPrecioTotalSindescuento;
        mensajeDescuento = "Su precio con descuento es de: " + precioTotalCondescuento;
    }

    if (acumuladorBolsasCal > acumuladorBolsasArena &&  acumuladorBolsasCal > acumuladorBolsasCemento)
    {
        tipoConMayorCantidadBolsas = "Cal";
    }
    else
    {
        if (acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento)
        {
            tipoConMayorCantidadBolsas = "Arena";
        }
        else
        {
            tipoConMayorCantidadBolsas = "Cemento";
        }
    }

    alert(mensaje);
    alert(mensajeDescuento);
    alert("El tipo con mas cantidad de bolsas en el total de la compra. " + tipoConMayorCantidadBolsas);
    alert("El tipo mas caro es: " + tipoMasCaro);
}
