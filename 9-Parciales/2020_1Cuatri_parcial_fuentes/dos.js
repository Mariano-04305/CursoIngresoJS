function mostrar()
{
    let respuesta;              //PEDIR
    let materialIngresado;         //PEDIR
    let cantidadBolsasIngresadas;   //PEDIR
    let precioPorBolsaIngresado;    //PEDIR
    let acumuladorBolsas;       //A Y B                             
    let descuento;                  //A Y B
    let descuentoSobreElPrecio; //A Y B
    let precioConDescuento;     //A Y B
    let acumuladorPrecioBolsas; //A
    let precioAPagarSinDescuento;   //A
    let acumuladorBolsasCal;      //D
    let acumuladorBolsasArena;  //D
    let acumuladorBolsasCemento;    //D
    let tipoConMasCantidadDeBolsas; //D
    let tipoMasCaro;   //F
    let precioMaximo;   //F
    let banderaDelPrimero;  //F
    
    acumuladorPrecioBolsas = 0;
    acumuladorBolsasCal = 0;
    acumuladorBolsasArena = 0;
    acumuladorBolsasCemento = 0;
    precioAPagarSinDescuento = 0;
    acumuladorPrecio = 0;
    acumuladorBolsas = 0;
    contador = 0;
    banderaDelPrimero = true;

    do
    {      
        do
        {
            materialIngresado = prompt("Ingrese un material: ");
        } while(materialIngresado != "cal" && materialIngresado != "arena" && materialIngresado != "cemento");

        do
        {
            cantidadBolsasIngresadas = prompt("Cuantas bolsas del material anterior desea comprar?");
            cantidadBolsasIngresadas = parseInt(cantidadBolsasIngresadas);

        } while (isNaN(cantidadBolsasIngresadas) || cantidadBolsasIngresadas < 0)

        do
        {
            precioPorBolsaIngresado = prompt("Ingresa el precio de cada bolsa del material comprado anteriormente: ");
            precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);

        } while (isNaN(precioPorBolsaIngresado) || precioPorBolsaIngresado < 1)

        acumuladorPrecioBolsas = cantidadBolsasIngresadas * precioPorBolsaIngresado;    //acumulo el precio de cada cantidad de bolsa con su precio
        precioAPagarSinDescuento += acumuladorPrecioBolsas;

        acumuladorBolsas += cantidadBolsasIngresadas;
        acumuladorPrecio += precioPorBolsaIngresado;

        while (banderaDelPrimero == true) // f; hago el tipo mas caro por bolsa, no por el que pagó mas, xq puede haber pagado mas pero el precio por bolsa es menor
        {
            banderaDelPrimero = false;

            precioMaximo = precioPorBolsaIngresado;
            tipoMasCaro = materialIngresado;
        }

        if (precioPorBolsaIngresado > precioMaximo)
        {
            precioMaximo = precioPorBolsaIngresado;
            tipoMasCaro = materialIngresado;
        }

        switch (materialIngresado)     // d
        {
            case "cal":
                acumuladorBolsasCal += cantidadBolsasIngresadas
                break;
            case "arena":
                acumuladorBolsasArena += cantidadBolsasIngresadas;
                break;
            case "cemento":
                acumuladorBolsasCemento += cantidadBolsasIngresadas;
                break;
        }


        respuesta = confirm("Quiere ingresar otro material?: ");
    } while (respuesta == true)


    if (acumuladorBolsas > 30)
    {
        descuento = 0.25;
    }
    else
    {
        if (acumuladorBolsas > 10)
        {
            descuento = 0.15;
        }
        else
        {
            descuento = 0;
        }
    }

    descuentoSobreElPrecio = precioAPagarSinDescuento * descuento;

    precioConDescuento = precioAPagarSinDescuento - descuentoSobreElPrecio;

    if (acumuladorBolsasCal > (acumuladorBolsasArena && acumuladorBolsasCemento)) // d
    {
        tipoConMasCantidadDeBolsas = "Cal"
    }
    else
    {
        if (acumuladorBolsasArena > (acumuladorBolsasCal && acumuladorBolsasCemento))
        {
            tipoConMasCantidadDeBolsas = "Arena";
        }
        else
        {
            tipoConMasCantidadDeBolsas = "Cemento";
        }
    }

    descuentoSobreElPrecio = precioAPagarSinDescuento * descuento;

    alert("El precio total de las bolsas compradas es de: " + precioAPagarSinDescuento);

    if(descuento > 0)
    {   
        precioConDescuento = precioAPagarSinDescuento - descuentoSobreElPrecio;

        alert("El precio total de las bolsas compradas MENOS EL DESCUENTO es de: " + precioConDescuento);    
    }
    alert("El tipo de material con mas cantidad de bolsas es: " + tipoConMasCantidadDeBolsas);
    alert("El tipo de material con el precio mas caro es: " + tipoMasCaro);
}
