/*
A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo

1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes

2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo
*/

function mostrarAumento()
{
    let seguir;
    let nombreIngresado;
    let lugarIngre;
    let tempIngre;
    let cantDiasViaje;
    let importeViajeIngre;
    let alturaIngre;
    let pesoIngre;
    let sexoIngre;
    let equipManoIngre;
    let metodoPagoIngre;

    let contadorAlta = 0;
    let contadorBaja = 0;

    let acumuladorPesoGessel = 0;
    let acumuladorTodosImportes = 0;

    let acumuladorDiasGessel = 0;
    let acumDiasCord = 0;
    let acumDiasMadryn = 0;
    let maximoAcumDias;

    let banderaPeso = true;
    let pesoMaximo;
    let pesoMinimo;
    let nombrePesoMaximo;
    let nombrePesoMinimo;
      
    let importeMasCaro;
    let nombreImporteMasCaro;
    let banderaMayorImporte = true;

    let mujerMasAlta;
    let nombreMujerMasAlta;
    let banderaMujeresAltura = true;
    
    let contadorMp = 0;
    let contadorCaja = 0;
    let contadorTarje = 0;
    let formaPagoMasUsada;

    let temporadaMasViajada;

    let contadorPasajerosGesel = 0;
    let contadorPasMadryn = 0;
    let contadorPasCord = 0;
    let lugarConMasPasajeros;

    let contadorGeneral = 0;
    let contadorEquiManoSi = 0;
    let contEquiManoNo = 0;
    let porcentajeEquiManoSi;
    let porcentajeEquiManoNo;

    let contadorF = 0;
    let contadorM = 0;
    let porcentajeF;
    let porcentajeM;

    do
    {
        do
        {
            nombreIngresado = prompt("Nombre pasajero: ");
        } while (nombreIngresado == "" || !isNaN(nombreIngresado));

        do 
        {
            lugarIngre = prompt("A que lugar irá?: ");
        } while(lugarIngre != "Puerto Madryn" && lugarIngre != "Villa Gessel" && lugarIngre != "Córdoba");

        do 
        {
            tempIngre = prompt("Temporada: ");
        } while(tempIngre != "alta" && tempIngre != "baja");
        
        do
        {
            cantDiasViaje = prompt("Cant dias del viaje: ");
            cantDiasViaje = parseInt(cantDiasViaje);
        } while (isNaN(cantDiasViaje) || cantDiasViaje < 1 );
        
        do
        {
            importeViajeIngre = prompt("Importe del viaje: ");
            importeViajeIngre = parseInt(importeViajeIngre);
        } while (isNaN(importeViajeIngre) || importeViajeIngre < 1 );

        do
        {
            alturaIngre = prompt("Altura: ");
            alturaIngre = parseInt(alturaIngre);
        } while (isNaN(alturaIngre) || alturaIngre < 1 );

        do
        {
            pesoIngre = prompt("Peso: ");
            pesoIngre = parseInt(pesoIngre);
        } while (isNaN(pesoIngre) || pesoIngre < 1 );
        
        do 
        {
            sexoIngre = prompt("sexo: ");
        } while(sexoIngre != "f" && sexoIngre != "m");
        
        do 
        {
            equipManoIngre = prompt("Equipaje de mano?: ");
        } while(equipManoIngre != "si" && equipManoIngre != "no");
        
        do 
        {
            metodoPagoIngre = prompt("metodo pago: ");
        } while(metodoPagoIngre != "mercado pago" && metodoPagoIngre != "tarjeta" && metodoPagoIngre != "efectivo");
        
        acumuladorTodosImportes += importeViajeIngre;
        contadorGeneral++;

        switch (tempIngre)
        {
            case "alta":
                contadorAlta++;
                break;
            default:
                contadorBaja++;
        }

        switch(lugarIngre)
        {
            case "Villa Gessel":
                acumuladorPesoGessel += pesoIngre;
                acumuladorDiasGessel += cantDiasViaje;
                contadorPasajerosGesel++;
                break;
            case "Puerto Madryn":
                acumDiasMadryn += cantDiasViaje;
                contadorPasMadryn++;
                break;
            default: 
                acumDiasCord += cantDiasViaje;
                contadorPasCord++;
        }

        if (banderaPeso == true)
        {
            banderaPeso = false;
        
            pesoMaximo = pesoIngre;
            pesoMinimo = pesoIngre;
            nombrePesoMinimo = nombreIngresado;
            nombrePesoMaximo = nombreIngresado;
        }
        else
        {
            if (pesoIngre > pesoMaximo)
            {
                pesoMaximo = pesoIngre;
                nombrePesoMaximo = nombreIngresado;
            }
            else
            {
                if (pesoIngre < pesoMinimo)
                {
                    pesoMinimo = pesoIngre;
                    nombrePesoMinimo = nombreIngresado;
                }
            }
        }

        if (banderaMayorImporte == true || importeViajeIngre > importeMasCaro) 
        {
            banderaMayorImporte = false;
        
            importeMasCaro = importeViajeIngre;
            nombreImporteMasCaro = lugarIngre;
        }
        
        switch (sexoIngre)
        {
            case "f":
                contadorF++;
                if (banderaMujeresAltura == true || alturaIngre > mujerMasAlta) 
                {
                    banderaMujeresAltura = false;
                
                    mujerMasAlta = alturaIngre;
                    nombreMujerMasAlta = nombreIngresado;
                }
                break;
            default:
                contadorM++;
        }

        if (equipManoIngre == "si")
        {
            contadorEquiManoSi++;
        }
        else
        {
            contEquiManoNo++;
        }

        switch(metodoPagoIngre)
        {
            case "mercado pago":
                contadorMp++;
                break;
            case "tarjeta":
                contadorTarje++;
                break;
            default:
                contadorCaja++;
        }

        seguir = confirm("Desea ingresar otro pasajero?:");
    } while(seguir == true)

    if (acumuladorDiasGessel > acumDiasMadryn && acumuladorDiasGessel > acumDiasCord)
    {
        maximoAcumDias = "Gessel";    
    }
    else
    {
        if (acumDiasMadryn > acumDiasCord)
        {
            maximoAcumDias = "Madryn";
        }
        else
        {
            maximoAcumDias = "Cordoba";
        }
    }

    if (contadorCaja > contadorMp && contadorCaja > contadorTarje)
    {
        formaPagoMasUsada = "Efectivo";    
    }
    else
    {
        if (contadorMp > contadorTarje)
        {
            formaPagoMasUsada = "Mercado pago";
        }
        else
        {
            formaPagoMasUsada = "Tarjeta";
        }
    }

    if (contadorAlta > contadorBaja)
    {
        temporadaMasViajada = "Alta";    
    }
    else
    {
        temporadaMasViajada = "Baja";
    }
    
    if (contadorPasajerosGesel > contadorPasMadryn && contadorPasajerosGesel > contadorPasCord)
    {
        lugarConMasPasajeros = "Gessel";    
    }
    else
    {
        if (contadorPasMadryn > contadorPasCord)
        {
            lugarConMasPasajeros = "Madryn";
        }
        else
        {
            lugarConMasPasajeros = "Cordoba";
        }
    }

    porcentajeEquiManoSi = (contadorEquiManoSi * 100) / contadorGeneral;
    porcentajeEquiManoNo = (contEquiManoNo * 100) / contadorGeneral;

    porcentajeF = (contadorF * 100) / contadorGeneral;
    porcentajeM = (contadorM * 100) / contadorGeneral;

    document.write("cantidad de personas que viajan en cada temporada. ALTA: " + contadorAlta + ". BAJA: " + contadorBaja + "<br>");
    document.write("el peso acumulado de todos los que viajan a villa gessel: " + acumuladorPesoGessel + "<br>");
    document.write("el lugar con la mayor cantidad de días acumulados: " + maximoAcumDias + "<br>");
    document.write("la suma de todos los importes: " + acumuladorTodosImportes + "<br>");

    document.write("el nombre del más pesado de los pasajeros: " + nombrePesoMaximo + ". y el del más liviano: " + nombrePesoMinimo + "<br>");
    document.write("el lugar donde se pagó el mayor importe: " + nombreImporteMasCaro + "<br>");
    document.write("el nombre de la mujer más alta: " + nombreMujerMasAlta + "<br>");

    document.write("Cuál fue la forma de pago más utilizada: " + formaPagoMasUsada + "<br>");
    document.write("en qué temporada se viajó más: " + temporadaMasViajada + "<br>"); document.write("" + "<br>");
    document.write("qué lugar tuvo más pasajeros: " + lugarConMasPasajeros + "<br>");

    document.write("qué porcentaje usa equipaje de mano: " + porcentajeEquiManoSi + "%. Los que no: " + porcentajeEquiManoNo + "%." + "<br>");
    document.write("que porcentaje hay de cada sexo. F: " + porcentajeF + "%. M: " + porcentajeM + "%"); 
}