/*
En una carga indefinida de datos (hasta que el usuario quiera) se
desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:
Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
Cantidad de BTC o ETH minado ese día - Número positivo.
Cotización diaria en USD - Número positivo inclusive 0.
INFORMAR
A) Nombre y cantidad de la criptomoneda más minada.
B) Nombre de la criptomoneda que mayor cotización tuvo.
C) Cantidad total de ingreso bruto en USD de cada criptomoneda.
D) Sabiendo que el coste de electricidad para:
BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.
E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la
 cotización de 1 USD a ARS es de $337.
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
*/

function sumar()
{
    let nombreCriptoIngresado;
    let cantidadDeBitcOEther;
    let cotizacionDiaria;

    let precioCantidadCripto;
    let acumuladorPrecioBit = 0;
    let acumuladorPrecioEthe = 0;
    let aumento;

    let acumuladorBitMinado = 0;
    let acumuladorEtheMinado = 0;
    let maximAcumulado;
    let cantidadMaxMinado;

        
    let cotizacionMaxima;
    let nombreCotizMaxima;
    let banderaCotizacion = true;


    do  
    {
        do 
        {
            nombreCriptoIngresado = prompt("Nombre de la cripto: ");
        } while(nombreCriptoIngresado != "ethereum" && nombreCriptoIngresado != "bitcoin");
        
        do
        {
            cantidadDeBitcOEther = prompt("Cantidad de cripto minada: ");
            cantidadDeBitcOEther = parseInt(cantidadDeBitcOEther);
        } while (isNaN(cantidadDeBitcOEther) || cantidadDeBitcOEther < 1 );
        
        do
        {
            cotizacionDiaria = prompt("Cotizacion diaria de esa moneda:");
            cotizacionDiaria = parseInt(cotizacionDiaria);
        } while (isNaN(cotizacionDiaria) || cotizacionDiaria < 0 );
        
        precioCantidadCripto = cantidadDeBitcOEther * cotizacionDiaria;

        switch(nombreCriptoIngresado) //A
        {
            case "bitcoin":
                acumuladorBitMinado += cantidadDeBitcOEther;
                acumuladorPrecioBit += precioCantidadCripto;
                aumento = precioCantidadCripto + (precioCantidadCripto * 0.07);
                break;
            case "ethereum":
                acumuladorEtheMinado += cantidadDeBitcOEther;
                acumuladorPrecioEthe += precioCantidadCripto;
                aumento = precioCantidadCripto + (precioCantidadCripto * 0.04);
                break;
    
        }
            
        if (banderaCotizacion == true || precioCantidadCripto < cotizacionMaxima) //B
        {
            banderaCotizacion = false;

            cotizacionMaxima = precioCantidadCripto;
            nombreCotizMaxima = nombreCriptoIngresado;
        }


        /*
        A) Nombre y cantidad de la criptomoneda más minada.
        B) Nombre de la criptomoneda que mayor cotización tuvo.
        C) Cantidad total de ingreso bruto en USD de cada criptomoneda.

        D) Sabiendo que el coste de electricidad para:
        BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.
        E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la
        cotización de 1 USD a ARS es de $337.
        Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
        "El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
        Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
        */
        seguir = confirm("Quiere ingresar otra?: ");
    } while(seguir == true)

    if (acumuladorBitMinado > acumuladorEtheMinado )
    {
        maximAcumulado = "Bitcoin";
        cantidadMaxMinado = acumuladorBitMinado;    
    }
    else
    {
        maximAcumulado = "Ethereum";
        cantidadMaxMinado = acumuladorEtheMinado;
    }


    document.write("Nombre y cantidad de la criptomoneda más minada. NOMBRE: " + maximAcumulado + ". CANTIDAD: " + cantidadMaxMinado + "<br>");
    document.write("Nombre de la criptomoneda que mayor cotización tuvo: " + nombreCotizMaxima + "<br>");
    document.write("Cantidad total de ingreso bruto en USD de cada criptomoneda. BITCOIN: " + acumuladorPrecioBit + ". ETHEREUM: " + acumuladorPrecioEthe + "<br>");
    document.write(".I." + "<br>");
    document.write("" + "<br>");
    document.write("" + "<br>");
    document.write("" + "<br>");
}

