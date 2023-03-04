/*EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar 
datos de perros con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El mas pesados de los galgos.
b)El importe total a pagar,y  con descuento (solo si corresponde)
Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
c)promedio de peso entre cada raza de perros ingresada
d)Nombre, raza y edad del perro más viejo ingresado
*/

function mostrar()
{
    let seguir;
    let razaIngresada;
    let nombreIng;
    let edadIng;
    let pesoIng;
    let precioConsultaIng;

    let contadorShar = 0;
    let acumuladorPesoShar = 0;
    let contadorGalgo = 0;
    let acumuladorPesoGalgo = 0;
    let contadorPastor = 0;
    let acumuladorPesoPastor = 0;
    let promedioPesoShar;
    let promedioPesoGalgo;
    let promedioPesoPastor;

    let contadorPerrosTotal = 0;
    let porcentaje;
    let acumuladorPrecioConsultas = 0;
    let precioConsultaConDescuento;
    let descuento;

    let masPesadoGalgo;
    let nombreGalgoMasPesado;
    let banderaPesoGalgo = true;

    let razaMasViejo;
    let masViejo;
    let nombreMasViejo;
    let banderaEdad = true;
    
    do
    {   
        do 
        {
            razaIngresada = prompt("raza del perro: ");
        } while(razaIngresada != "sharpei" && razaIngresada != "pastor" && razaIngresada != "galgo");
        
        do
        {
            nombreIng = prompt("Nombre: ");
        } while (nombreIng == "" || !isNaN(nombreIng));
     
        do
        {
            edadIng = prompt("Edad: ");
            edadIng = parseInt(edadIng);
        } while (isNaN(edadIng) || (edadIng < 1 || edadIng > 25));

        do
        {
            pesoIng = prompt("Peso: ");
            pesoIng = parseInt(pesoIng);
        } while (isNaN(pesoIng) || pesoIng < 1 );

        do
        {
            precioConsultaIng = prompt("Precio x consulta: ");
            precioConsultaIng = parseInt(precioConsultaIng);
        } while (isNaN(precioConsultaIng) || (precioConsultaIng < 500 || precioConsultaIng > 1500));

        contadorPerrosTotal++;
        acumuladorPrecioConsultas += precioConsultaIng;

        switch (razaIngresada)
        {
            case "sharpei":
                contadorShar++;
                acumuladorPesoShar += pesoIng;
                break;
            case "pastor":
                contadorPastor++;
                acumuladorPesoPastor += pesoIng;
                break;
            default:
                contadorGalgo++;
                acumuladorPesoGalgo += pesoIng;

                if (banderaPesoGalgo == true || pesoIng > masPesadoGalgo) 
                {
                    banderaPesoGalgo = false;
                
                    masPesadoGalgo = pesoIng;
                    nombreGalgoMasPesado = nombreIng;
                }
        }

        if (banderaEdad == true || edadIng > masViejo) 
        {
            banderaEdad = false;
        
            masViejo = edadIng;
            nombreMasViejo = nombreIng;
            razaMasViejo = razaIngresada;
        }
        
        seguir = confirm("Desea ingresar otro perro?: ");
    } while(seguir == true)
    
    if (contadorPerrosTotal < 2)
    {
        porcentaje = 0;
    }
    else
    {
        if (contadorPerrosTotal < 4)
        {
            porcentaje = 0.05;
        }
        else
        {
            porcentaje = 0.10;
        }
    }

    descuento = acumuladorPrecioConsultas * porcentaje
    precioConsultaConDescuento = acumuladorPrecioConsultas - descuento;
    
    promedioPesoShar = acumuladorPesoShar / contadorShar;
    promedioPesoPastor = acumuladorPesoPastor / contadorPastor;
    promedioPesoGalgo = acumuladorPesoGalgo / contadorGalgo;
    
    document.write("El mas pesados de los galgos: " + nombreGalgoMasPesado + "<br>");

    if (porcentaje == 0)
    {
        document.write("No obtuvo descuento. Su importe final a pagar es de: " + precioConsultaConDescuento + "<br>");    
    }
    else
    {
        document.write("Obtuvo descuento de: " + descuento + ". Su precio final es de: " + precioConsultaConDescuento + "<br>");
    }

    if (contadorShar != 0)
    {
        document.write("promedio de peso Sharpie: " + promedioPesoShar + "<br>");
    }
    if (contadorPastor != 0)
    {
        document.write("promedio de peso Pastor: " + promedioPesoPastor + "<br>");
    }
    if (contadorGalgo != 0)
    {
        document.write("promedio de peso Galgo: " + promedioPesoGalgo + "<br>");
    }

    document.write("Del perro mas viejo de todos: Nombre: " + nombreMasViejo + ". Edad: " + masViejo + ". Raza: " + razaMasViejo);
}


// 2 parcial 2021

/*
EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:

A) El nombre y rareza  de la carta tipo "trampa" con mayor precio.
B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.
C) El promedio de precio de las cartas de por tipo.
*/

function mostrar()
{
    let seguir;
    let nombreCartaIngr;
    let tipoCartaIngr;
    let rarezaCartaIngr;
    let precioCartaIngr;

    let rarezaTrampaMasCara;
    let masCaraTrampa;
    let nombreTrampaMasCara;
    let banderaTrampa = true;
    
    let contadorUltraRaraYMagiOMonst = 0;

    let contadorRaras = 0;
    let contadorUltraRaras = 0;
    let contadorSuperRaras = 0;
    let acumuladorRaras = 0;
    let acumuladorUltraRaras = 0;
    let acumuladorSuperRaras = 0;
    let promedioPrecioRaras;
    let promedioPrecioURaras;
    let promedioPrecioSRaras;

    do
    {
        do
        {
            nombreCartaIngr = prompt("Nombre de la carta: ");
        } while (nombreCartaIngr == "" || !isNaN(nombreCartaIngr));
        
        do 
        {
            tipoCartaIngr = prompt("Tipo carta: ");
        } while(tipoCartaIngr != "monstruo" && tipoCartaIngr != "magica" && tipoCartaIngr != "trampa");
        
        do 
        {
            rarezaCartaIngr = prompt("Rareza carta: ");
        } while(rarezaCartaIngr != "ultra rara" && rarezaCartaIngr != "super rara" && rarezaCartaIngr != "rara");
        
        do
        {
            precioCartaIngr = prompt("Precio de la carta: ");
            precioCartaIngr = parseInt(precioCartaIngr);
        } while (isNaN(precioCartaIngr) || precioCartaIngr < 1 );
        
        if (tipoCartaIngr == "trampa")
        {
                if (banderaTrampa == true || precioCartaIngr > masCaraTrampa) 
                {
                    banderaTrampa = false;
                
                    masCaraTrampa = precioCartaIngr;
                    nombreTrampaMasCara = nombreCartaIngr;
                    rarezaTrampaMasCara = rarezaCartaIngr;
                }       
        }

        switch (rarezaCartaIngr)
        {
            case "rara":
                contadorRaras++;
                acumuladorRaras += precioCartaIngr;
                break;
            case "super rara":
                contadorSuperRaras++;
                acumuladorSuperRaras += precioCartaIngr;
                break;
            default:
                contadorUltraRaras++;
                acumuladorUltraRaras += precioCartaIngr;

                switch (tipoCartaIngr)
                {
                    case "magica":
                    case "monstruo":
                        contadorUltraRaraYMagiOMonst++;
                        break;
                }
        }
      
        seguir = confirm("Desea ingresar otra carta?: ");
    } while(seguir == true)
    
    promedioPrecioRaras = acumuladorRaras / contadorRaras;
    promedioPrecioURaras = acumuladorUltraRaras / contadorUltraRaras;
    promedioPrecioSRaras = acumuladorSuperRaras / acumuladorSuperRaras;

    document.write("El nombre y rareza  de la carta tipo 'trampa' con mayor precio. Nombre: " + nombreTrampaMasCara + ". Rareza: " + rarezaTrampaMasCara + "<br>");
    document.write("Cuantas cartas de rareza ultra rara y de tipo magica o monstruo fueron vendidas: " + contadorUltraRaraYMagiOMonst + "<br>");
    
    if (contadorRaras != 0)
    {
        document.write("El promedio de precio de las cartas RARAS: " + promedioPrecioRaras + "<br>");
    }
    else
    {
        document.write("NO se puede hacer el promedio de 'RARAS' porque no se ingreso ninguno de ese tipo" + "<br>");
    }

    if (contadorSuperRaras != 0)
    {
        document.write("El promedio de precio de las cartas RARAS: " + promedioPrecioSRaras + "<br>");
    }
    else
    {
        document.write("NO se puede hacer el promedio de 'SUPER RARAS' porque no se ingreso ninguno de ese tipo" + "<br>");
    }
    
    if (contadorUltraRaras != 0)
    {
        document.write("El promedio de precio de las cartas RARAS: " + promedioPrecioURaras + "<br>");
    }
    else
    {   
        document.write("NO se puede hacer el promedio de 'ULTRA RARAS' porque no se ingreso ninguno de ese tipo" + "<br>");
    }
}


// EJ 3 PARCIAL 2021

/*
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar:
*marca del producto
* Tipo de galletita : "con sal", "sin sal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"
Se pide informar por document.write:
a) el tipo con la mayor cantidad de cajas.
b) de las galletitas de origen nacional, la que menos kilos tiene por caja.
c) que porcentaje de cajas hay sobre el total de cada origen 
[ej: 30% nacional ,30% mercosur, 40% resto del mundo ( debe sumar 100)]
*/

function mostrar()
{
	let vueltas = 0;
    let marcaIngr;
    let tipoGalleInge;
    let cantCajasIngre;
    let cantKilosPorCajaIngre;
    let nombreProveedorIngre;
    let origenIngre;

    let masCantidadCajas;
    let nombreMasCantCajas;
    let banderaCantCajas = true;

    let menorCantKPorCaja;
    let nombreMenorKporCaja;
    let banderaNacionalMenosKPorCaja = true;

    let contadorTotal = 0;
    let contadorNacio = 0;
    let contadorMerco = 0;
    let contadorResto = 0;
    let porcentajeResto;
    let porcentajeMerco;
    let porcentajeNacio;

    do
    {
        do
        {
            marcaIngr = prompt("Marca de la galletita:");
        } while (marcaIngr == "" || !isNaN(marcaIngr));

        do 
        {
            tipoGalleInge = prompt("Tipo de galle:");
        } while(tipoGalleInge != "con sal" && tipoGalleInge != "sin sal" && tipoGalleInge != "dulces");

        do
        {
            cantCajasIngre = prompt("Cantidad de cajas: ");
            cantCajasIngre = parseInt(cantCajasIngre);
        } while (isNaN(cantCajasIngre) || cantCajasIngre < 1 );
    
        do
        {
            cantKilosPorCajaIngre = prompt("Cantidad de kilos por caja: ");
            cantKilosPorCajaIngre = parseInt(cantKilosPorCajaIngre);
        } while (isNaN(cantKilosPorCajaIngre) || cantKilosPorCajaIngre < 1 );
        
        do
        {
            nombreProveedorIngre = prompt("Nombre del proveedor:");
        } while (nombreProveedorIngre == "" || !isNaN(nombreProveedorIngre));

        do 
        {
            origenIngre = prompt("Origen: ");
        } while(origenIngre != "mercosur" && origenIngre != "resto del mundo" && origenIngre != "nacional");
        
        contadorTotal++;
        
        if (banderaCantCajas == true || cantCajasIngre > masCantidadCajas) 
        {
            banderaCantCajas = false;
        
            masCantidadCajas = cantCajasIngre;
            nombreMasCantCajas = tipoGalleInge;
        }

        switch (origenIngre)
        {
            case "nacional":
                if (banderaNacionalMenosKPorCaja == true || cantKilosPorCajaIngre < menorCantKPorCaja) 
                {
                    banderaNacionalMenosKPorCaja = false;
                
                    menorCantKPorCaja = cantKilosPorCajaIngre;
                    nombreMenorKporCaja = tipoGalleInge;
                }
                contadorNacio++;
                break;
            case "mercosur":
                contadorMerco++;
                break;
            default:
                contadorResto++;
        }

        vueltas ++;
    } while(vueltas < 2);

    porcentajeResto = (contadorResto * 100) / contadorTotal;
    porcentajeNacio = (contadorNacio * 100) / contadorTotal;
    porcentajeMerco = (contadorMerco * 100) / contadorTotal; 

    document.write("el tipo con la mayor cantidad de cajas: " + nombreMasCantCajas + "<br>");
    if (nombreMenorKporCaja != undefined)
    {
        document.write("de las galletitas de origen nacional, la que menos kilos tiene por caja es: " + nombreMenorKporCaja + "<br>");
    }
    else
    {
        document.write("No hay galletitas de origen nacional." + "<br>");
    }
    document.write("que porcentaje de cajas hay sobre el total de cada origen. MERCOSUR: " + porcentajeMerco + "%. RESTO MUNDO: " + porcentajeResto + "%. NACIONAL: " + porcentajeNacio);
}
