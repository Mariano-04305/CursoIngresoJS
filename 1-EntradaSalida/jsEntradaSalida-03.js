/*
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.
*/

function mostrar()
{
    let seguir;
	let nombreMuebleIngresado;
    let materialMuebleIngresado;
    let pesoIngresado;
    let alturaIngresada;
    let anchuraIngresada;
    let precioIngresado;
    let acumuladorPreciosSinDescuento;
    let contadorMuebles;
    let promedioPrecioMueblesConDescuentoOAumento;
    let acumuladorMadera;
    let muebleMetalMasAlto;
    let nombreMuebleMetalMasAlto;
    let banderaAlto;
    let banderaLiviano;
    let muebleMasLiviano;
    let nombreMuebleMasLiviano;
    let contadorMueblesMadera;
    let contadorMueblesMetal;
    let contadorMueblesVidrio;
    let porcentajeMueblesMadera;
    let porcentajeMueblesMetal;
    let porcentajeMueblesVidrio;
    let porcentaje;
    let descuento;
    let precioConDescuentoOAumento;

    acumuladorPreciosSinDescuento = 0;
    contadorMuebles = 0;
    contadorMueblesMadera = 0;
    contadorMueblesMetal = 0;
    contadorMueblesVidrio = 0;
    acumuladorMadera = 0;
    banderaAlto = true;
    banderaLiviano = true;
 
    do
    {
        nombreMuebleIngresado = prompt("Ingrese el nombre del mueble: ");

        do
        {
            materialMuebleIngresado = prompt("Ingrese el material del mueble: ");
        } while(materialMuebleIngresado != "madera" && materialMuebleIngresado != "metal" && materialMuebleIngresado != "vidrio");

        do
        {
            pesoIngresado = prompt("Ingrese el peso del mueble: ");
            pesoIngresado = parseInt(pesoIngresado);
        } while(isNaN(pesoIngresado) || pesoIngresado < 0);

        do
        {
            alturaIngresada = prompt("Ingrese la altura del mueble: ");
            alturaIngresada = parseInt(alturaIngresada);
        } while(isNaN(alturaIngresada) || alturaIngresada < 0)

        do
        {
            anchuraIngresada = prompt("Ingrese la anchura del mueble: ");
        } while(isNaN(anchuraIngresada) || anchuraIngresada < 0);

        do
        {
            precioIngresado = prompt("Ingrese el precio del mueble: ");
            precioIngresado = parseInt(precioIngresado);
        } while(isNaN(precioIngresado) || precioIngresado < 0)

        acumuladorPreciosSinDescuento += precioIngresado;

        switch (materialMuebleIngresado)
        {
            case "madera":
                porcentaje = 0.15;
                descuento = precioIngresado * porcentaje;
                precioConDescuentoOAumento = precioIngresado + descuento;
                contadorMueblesMadera ++;
                acumuladorMadera += precioConDescuentoOAumento;
                break;
            default:
                porcentaje = 0.10;
                descuento = precioIngresado * porcentaje;
                precioConDescuentoOAumento = precioIngresado - descuento;

                if (materialMuebleIngresado == "metal")
                {
                    contadorMueblesMetal ++;
                    if (banderaAlto == true || alturaIngresada > muebleMetalMasAlto)
                    {
                        banderaAlto = false;
                        muebleMetalMasAlto = alturaIngresada;
                        nombreMuebleMetalMasAlto = nombreMuebleIngresado;
                    }
                }
                else
                {
                    contadorMueblesVidrio ++;
                }
        }
        contadorMuebles ++;
        

        if (banderaLiviano == true || pesoIngresado < muebleMasLiviano)
        {
            banderaLiviano = false;
            muebleMasLiviano = pesoIngresado;
            nombreMuebleMasLiviano = nombreMuebleIngresado;
        }

        seguir = confirm("Desea ingresar otro mueble?: ");
    } while (seguir == true)

    promedioPrecioMueblesConDescuentoOAumento = acumuladorPreciosSinDescuento / contadorMuebles;
    
    porcentajeMueblesMadera = (contadorMueblesMadera * 100) / contadorMuebles;
    porcentajeMueblesMetal = (contadorMueblesMetal * 100) / contadorMuebles;
    porcentajeMueblesVidrio = (contadorMueblesVidrio * 100) / contadorMuebles;

    document.write("PRECIO PROMEDIO POR MUEBLE VENDIDO SIN DESCUENTO: " + promedioPrecioMueblesConDescuentoOAumento + "<br>");
    document.write("CANTIDAD TOTAL DE MUEBLES DE MADERA: " + contadorMueblesMadera + "<br>");
    if (banderaAlto == false)
    {
        document.write("MUEBLE DE METAL MAS ALTO: " + nombreMuebleMetalMasAlto + "<br>");
    }   
    else
    {
        document.write("MUEBLE DE METAL MAS ALTO: No hay muebles de metal" + "<br>")
    }
    document.write("EL MUEBLE MAS LIVIANO: " + nombreMuebleMasLiviano + "<br>");
    document.write("PORCENTAJE MUEBLES DE CADA MATERIAL; MADERA: " + porcentajeMueblesMadera + "%. METAL: " + porcentajeMueblesMetal + "%. VIDRIO: " + porcentajeMueblesVidrio + "%." + "<br>");
    document.write("MONTO TOTAL ACUMULADO DE TODOS LOS MUEBLES SIN DESCUENTO: " + acumuladorPreciosSinDescuento + "<br>");
    document.write("MONTO TOTAL ACUMULADO DE MUEBLES DE MADERA, CON AUMENTO: " + acumuladorMadera);
}


/*
    let nombreIngresado;
	nombreIngresado = txtIdNombre.value;
	alert(nombreIngresado);
*/
//EJERCICIO 2 DE CLASE SABADO 1
/*
	function mostrar()
{
	let valorCompra;
	let iva;
	let valorConIva;
	let descuento;
	let valorMenosDescuento;

	valorCompra = document.getElementById("txtIdNombre").value;

	valorCompra = parseInt(valorCompra);
	iva = parseInt(iva);
	valorConIva = parseInt(valorConIva);
	descuento = parseInt(descuento);
	valorMenosDescuento = parseInt(valorMenosDescuento);

	iva = (valorCompra / 100) * 21;

	valorConIva = valorCompra + iva;

	descuento = valorConIva * 0.05;

	valorMenosDescuento = valorConIva - descuento;
	
	alert("IMPORTE BRUTO: " + valorCompra + "   IVA: " + iva + "   IMPORTE CON IVA: " + valorConIva);
	alert("VALOR DEL DESCUENTO: " + descuento + "   TOTAL A PAGAR: " + valorMenosDescuento);
}
*/



