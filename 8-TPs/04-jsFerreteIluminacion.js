/*
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio () 
{
   let lamparasCantidad;
   let marca;
   let precioLamparas;
   let porcentaje;
   let porcentajeTotal;
   let iva;
   let precioConDescuento;
   
   lamparasCantidad = document.getElementById("txtIdCantidad").value;
   lamparasCantidad = parseInt(lamparasCantidad);

   marca = document.getElementById("Marca").value;
   
   precioLamparas = 35 * lamparasCantidad;

   if (isNaN(lamparasCantidad))
   {
        alert("Ingrese un numero"); 
   }
   else
   {
        if (lamparasCantidad < 3)
        {
            porcentaje = 0;
        }
        else
        {
            switch (lamparasCantidad)
            {
                case 3:
                    switch (marca)
                    {
                        case "ArgentinaLuz":
                            porcentaje = 0.15;
                            break;
                        case "FelipeLamparas":
                            porcentaje = 0.10;
                            break;
                        default:
                            porcentaje = 0.05;
                    }
                    break;
                case 4:
                    switch (marca)
                    {
                        case "ArgentinaLuz":
                        case "FelipeLamparas":
                            porcentaje = 0.25;
                            break;
                        default:
                            porcentaje = 0.20;
                    }
                    break;
                case 5: 
                    switch (marca)
                    {
                        case "ArgentinaLuz":
                            porcentaje = 0.40;
                            break;
                        default:
                            porcentaje = 0.30;
                    }
                    break;
                default:
                    switch (marca)
                    {
                        default:
                            porcentaje = 0.50;
                    }
            }
        }
   }
   

   porcentajeTotal = precioLamparas * porcentaje;

   precioConDescuento = precioLamparas - porcentajeTotal;

   if (precioConDescuento >= 120)
   {
        iva = precioConDescuento * 0.10;
        precioConDescuento = precioConDescuento + iva;
        alert ("EN IIBB: " + iva);
   }
   
   document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}





/*  ESTÁ BIEN HECHO CON IF (con comentarios dentro, puede ser confuso)

    let lamparasCompradas;
    let precioLamparas;
    let precioLamparasCompradas;
    let precioConDescuento;
    let marca;
    let iva;
    let descuento;
    let porcentaje; //El porcentaje lo asigno 1 vez y su valor se lo doy SEGUN EL CASO, para no crear valores innecesarios.
/*
ej: si hubiese hecho todas las variables de descuento separadas;
  let descuento50;
  let descuento40;

  1 de esas 2 variables, no se usara, xq no se dan 2 casos al mismo tiempo.

  tampoco sirve hacer las cuentas dentro del if; 

    if (marca == "ArgentinaLuz")
        {
            precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.15)
        }

  Porque no es que esté mal, pero es codigo innecesario. Lo optimo es asignar a cada if el valor del descuento,
  y al final de todo, hacer la cuenta precio * descuento.
  LO QUE SE REPITE SIEMPRE LO PUEDO SIMPLIFICAR Y HACER UNA VEZ 
*/


/*
precioLamparas = 35;
    
lamparasCompradas = document.getElementById("txtIdCantidad").value;
lamparasCompradas = parseInt(lamparasCompradas);

marca = document.getElementById("Marca").value;

precioLamparasCompradas = lamparasCompradas * precioLamparas;

if (lamparasCompradas >= 6)
{
    porcentaje = 50;
}
else
{
    if (lamparasCompradas == 5)
    {
        if (marca == "ArgentinaLuz")
        {
            porcentaje = 40;  
        }
        else
        {
           porcentaje = 30;
        }
    }
    else 
    {   
        if (lamparasCompradas == 4)
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 25;
            }
            else
            {
                porcentaje = 20;
            }
        }
        else
        {
            if (lamparasCompradas == 3)
            {
                if (marca == "ArgentinaLuz")
                {
                   porcentaje = 15; 
                }
                else
                {
                    if(marca == "FelipeLamparas")
                    {
                        porcentaje = 10;
                    }
                    else
                    {
                        porcentaje = 5;
                    }
                }
            }
            if (lamparasCompradas < 3)
            {
               
                porcentaje = 0;
            }
        }
    } 
}

descuento = precioLamparasCompradas / 100 * porcentaje;
precioConDescuento = precioLamparasCompradas - descuento;

iva = (precioConDescuento * 0.10);

if (precioConDescuento >= 120)
{
    precioConDescuento = precioConDescuento + iva;

    alert("IIBB Usted pago: " + iva);
}

document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
*/



















/* INTENTO 1 - MAL (CUENTAS DENTRO DE LOS IF)

    function CalcularPrecio () 
{
    let lamparasCompradas;
    let precioLamparas;
    let precioLamparasCompradas;
    let precioConDescuento;
    let marca;
    let iva;

    precioLamparas = 35
    
    lamparasCompradas = document.getElementById("txtIdCantidad").value;
    lamparasCompradas = parseInt(lamparasCompradas);

    marca = document.getElementById("Marca").value;

    precioLamparasCompradas = lamparasCompradas * precioLamparas;

    if (lamparasCompradas >= 6)
    {
        precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.50);
        // precioConDescuento = precioLamparasCompradas;
    }
    else if (lamparasCompradas == 5)
    {   
        if (marca == "ArgentinaLuz")
        {
            precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.40);
        }
        else
        {
            precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.30);
        }
    }
    else if (lamparasCompradas == 4)
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.25);
        }
        else
        {
            precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.20);
        }
    }
    else if (lamparasCompradas == 3)
    {
        if (marca == "ArgentinaLuz")
        {
            precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.15)
        }
        else if (marca == "FelipeLamparas")
        {
            precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.10)
        }
        else
        {
            precioConDescuento = precioLamparasCompradas - (precioLamparasCompradas * 0.05)
        }
    }

    iva = (precioConDescuento * 0.10);

    if (precioConDescuento >= 120)
    {
        precioConDescuento = precioConDescuento + (precioConDescuento * 0.10);

        alert("IIBB Usted pago: " + iva);
    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}

*/



/*  OPCION 3, SI, PERO CON IF ELSE ;( (hay algunos lenguajes con "if else", pero no todos lo tienen)

        function CalcularPrecio () 
{
    let lamparasCompradas;
    let precioLamparas;
    let precioLamparasCompradas;
    let precioConDescuento;
    let marca;
    let iva;
    let descuento;

    precioLamparas = 35;
    
    lamparasCompradas = document.getElementById("txtIdCantidad").value;
    lamparasCompradas = parseInt(lamparasCompradas);

    marca = document.getElementById("Marca").value;

    precioLamparasCompradas = lamparasCompradas * precioLamparas;

    if (lamparasCompradas >= 6)
    {
        descuento = 0.50;
        precioConDescuento = precioLamparasCompradas * descuento;
    }

    else if (lamparasCompradas == 5)
    {   
        if (marca == "ArgentinaLuz")
        {
            descuento = 0.40;
        }
        else
        {
            descuento = 0.30;
        }
    }
    
    else if (lamparasCompradas == 4)
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            descuento = 0.25;
        }
        else
        {
            descuento = 0.20;
        }
    }

    else if (lamparasCompradas == 3)
    {
        if (marca == "ArgentinaLuz")
        {
            descuento = 0.15; 
        }
        else if (marca == "FelipeLamparas")
        {
            descuento = 0.10;
        }
        else
        {
            descuento = 0.05;
        }
    }

    precioConDescuento = precioLamparasCompradas * descuento;

    iva = (precioConDescuento * 0.10);

    if (precioConDescuento >= 120)
    {
        precioConDescuento = precioConDescuento + iva;

        alert("IIBB Usted pago: " + iva);
    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}


*/