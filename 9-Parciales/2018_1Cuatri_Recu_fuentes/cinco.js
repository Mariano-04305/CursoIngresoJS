/*  PREPARCIAL OCTAVIO VILLEGAS
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

5-solo para alumnos que crean sus propios desafíos
m- inventate uno
n- se creativo en este
o- uno facil 
p- uno dificil
*/

function mostrar()
{
    
}

/*
      let seguir;
    let nombreIngresado;
    let lugarIngresado;
    let temporadaIngresada;
    let diasIngresados;
    let importeViaje;
    let alturaPasajero;
    let pesoPasajero;
    let sexoPasajero;
    let equipajeManoRespuesta;
    let metodoPagoIngresado;

    do 
    {
        nombreIngresado = prompt("Ingrese el nombre del pasajero: ");

        do{
            lugarIngresado = prompt("Ingrese el lugar de destino: ");
        } while (lugarIngresado != "Puerto Madryn" && lugarIngresado != "Villa Gessel" && lugarIngresado != "Córdoba");

        do{
            temporadaIngresada = prompt("Viaja en temporada alta o baja?: ");
        } while (temporadaIngresada != "alta" && temporadaIngresada != "baja");

        do{
            diasIngresados = prompt("Cuantos dias durará el viaje?: ");
            diasIngresados = parseInt(diasIngresados);
        } while(isNaN(diasIngresados) || diasIngresados < 0)

        do{
            importeViaje = prompt("Cual será el importe del viaje?: ");
            importeViaje = parseInt(importeViaje);
        } while(isNaN(importeViaje) || importeViaje < 0)

        do{
            pesoPasajero = prompt("peso del pasajero?: ");
            pesoPasajero = parseInt(pesoPasajero);
        } while(isNaN(pesoPasajero) || pesoPasajero < 0)

        do{
            alturaPasajero = prompt("altura del pasajero EN CM?: ");
            alturaPasajero = parseInt(alturaPasajero);
        } while(isNaN(alturaPasajero) || alturaPasajero < 3)

        do{
            sexoPasajero = prompt("sexo del pasajero: ");
        } while(sexoPasajero != "f" && sexoPasajero != "nb" && sexoPasajero != "m");

        do{
            equipajeManoRespuesta = prompt("viaja con equipaje de mano?: ");
        } while(equipajeManoRespuesta != "si" && equipajeManoRespuesta != "no");

        do{
            metodoPagoIngresado = prompt("Ingrese metodo de pago: ");
        } while(metodoPagoIngresado != "tarjeta" && metodoPagoIngresado != "efectivo" && metodoPagoIngresado != "mercado");

*/

/*  FORMA 1

    function mostrar()
{
    let seguir;     //PEDIR DATOS
    let nombreIngresado;
    let lugarIngresado;
    let temporadaIngresada;
    let cantidadDiasIngresados;
    let importeViajeIngresado;
    let alturaPasajeroIngresada;
    let pesoPasajeroIngresado;
    let sexoPasajeroIngresado;
    let equipajeManoSiNo;
    let metodoPagoIngresado;    // 1
    let cantidadPersonasPorTemporada;
    let pesoAcumuladoGessel;
    let acumuladorImportes;
    let banderaPeso;    // 2
    let pasajeroMasPesado;
    let pasajeroMasLiviano;
    let nombreMasLiviano;
    let nombreMasPesado;
    let banderaLugar;
    let lugarMasCaro;
    let nombreLugarMasCaro;
    let banderaMujer;
    let mujerMasAlta;
    let nombreMujerAlta;
    let contadorMp;     // 3
    let contadorEfectivo;
    let contadorTarjeta;
    let formaPagoMasUsada;
    let contadorAlta;
    let contadorBaja;
    let temporadaMasViajada;
    let contadorGessel;
    let contadorMadryn;
    let contadorCordoba;
    let lugarMasViajado;
    let contadorVueltasTotales;  // 4
    let contadorEquiManoSi; 
    let cuentaEquipaje;
    let contadorHombres;
    let contadorMujeres;
    let contadorNb;
    let porcentajeNb;
    let porcentajeF;
    let porcentajeM;

    cantidadPersonasPorTemporada = 0;
    pesoAcumuladoGessel = 0;
    acumuladorImportes = 0;
    banderaPeso = true;
    banderaLugar = true;
    banderaMujer = true;
    contadorMp = 0;
    contadorEfectivo = 0;
    contadorTarjeta = 0;
    contadorAlta = 0;
    contadorBaja = 0;
    contadorGessel = 0;
    contadorMadryn = 0;
    contadorCordoba = 0;
    contadorVueltasTotales = 0;
    contadorEquiManoSi = 0;
    contadorMujeres = 0;
    contadorHombres = 0;
    contadorNb = 0;
    porcentajeF = 0;
    porcentajeM = 0;
    porcentajeNb = 0;

    do
    {
        nombreIngresado = prompt("Ingrese el nombre del pasajero: ");       //PEDIDO Y VALIDACION DATOS

        do  
        {
            lugarIngresado = prompt("Ingrese el destino del viaje: ");
        } while(lugarIngresado != "Puerto Madryn" && lugarIngresado != "Villa Gessel" && lugarIngresado != "Córdoba");


        do
        {
            temporadaIngresada = prompt("Viaja en temporada alta o baja?: ");
        } while (temporadaIngresada != "alta" && temporadaIngresada != "baja");

        do 
        {
            cantidadDiasIngresados = prompt("Ingrese la cantidad de dias del viaje: ");
            cantidadDiasIngresados = parseInt(cantidadDiasIngresados);         
        } while (isNaN(cantidadDiasIngresados) || cantidadDiasIngresados < 1)

        do
        {
            importeViajeIngresado = prompt("Ingrese el importe total a pagar del viaje: ");
            importeViajeIngresado = parseInt(importeViajeIngresado);
        } while(isNaN(importeViajeIngresado) || importeViajeIngresado < 1)

        do
        {
            alturaPasajeroIngresada = prompt("Ingrese la altura del pasajero, en CM: ");
            alturaPasajeroIngresada = parseInt(alturaPasajeroIngresada);
        } while(isNaN(alturaPasajeroIngresada) || alturaPasajeroIngresada < 3);

        do
        {
            sexoPasajeroIngresado = prompt("Ingrese el sexo del pasajero (f, m o nb)");
        } while (sexoPasajeroIngresado != "f" && sexoPasajeroIngresado != "m" && sexoPasajeroIngresado != "nb");

        do
        {
            equipajeManoSiNo = prompt("Viaja con equipaje de mano?");
        } while (equipajeManoSiNo != "si" && equipajeManoSiNo != "no");

        do
        {
            metodoPagoIngresado = prompt("Cual será el metodo de pago del viaje? (mp, efectivo o tarjeta)");
        } while (metodoPagoIngresado != "mp" && metodoPagoIngresado != "tarjeta" && metodoPagoIngresado != "efectivo");

        cantidadPersonasPorTemporada ++;    // 1
        acumuladorImportes += importeViajeIngresado;
        contadorVueltasTotales ++;
        if (lugarIngresado == "Villa Gessel")
        {
            pesoAcumuladoGessel += pesoPasajeroIngresado;
        }

        while (banderaPeso == true) // 2
        {
            banderaPeso = false;

            pasajeroMasLiviano = pesoPasajeroIngresado;
            pasajeroMasPesado = pesoPasajeroIngresado;
            nombreMasLiviano = nombreIngresado;
            nombreMasPesado = nombreIngresado;
        }

        if (pesoPasajeroIngresado > pasajeroMasPesado)
        {
            pasajeroMasPesado = pesoPasajeroIngresado;
            nombreMasPesado = nombreIngresado;
        }
        else
        {
            if (pesoPasajeroIngresado < pasajeroMasLiviano)
            {
                pasajeroMasLiviano = pesoPasajeroIngresado;
                nombreMasLiviano = nombreIngresado;

            }
        }

        while(banderaLugar == true)
        {
            banderaLugar = false;

            lugarMasCaro = importeViajeIngresado;
            nombreLugarMasCaro = lugarIngresado;
        }

        if (importeViajeIngresado > lugarMasCaro)
        {
            lugarMasCaro = importeViajeIngresado;
            nombreLugarMasCaro = lugarIngresado;
        }


        if (sexoPasajeroIngresado == "f")
        {
            while(banderaMujer == true)
            {
                banderaMujer = false;

                mujerMasAlta = alturaPasajeroIngresada;
                nombreMujerAlta = nombreIngresado;
            }

            if (alturaPasajeroIngresada > mujerMasAlta)
            {
                mujerMasAlta = alturaPasajeroIngresada;
                nombreMujerAlta = nombreIngresado;
            }
        }
        
        switch (metodoPagoIngresado)    // 3
        {
            case "efectivo":
                contadorEfectivo ++;
                break;
            case "mp":
                contadorMp ++;
                break;
            case "tarjeta":
                contadorTarjeta ++;
                break;
        }

        switch (temporadaIngresada)
        {
            case "alta":
                contadorAlta ++;
                break;
            case "baja":
                contadorBaja ++;
                break;
        }

        switch (lugarIngresado)
        {
            case "Puerto Madryn":
                contadorMadryn ++;
                break;
            case "Villa Gessel":
                contadorGessel ++;
                break;
            case "Córdoba":
                contadorCordoba ++;
                break;
        }

        switch (equipajeManoSiNo)
        {
            case "si":
                contadorEquiManoSi ++;
                break;
        }

        switch (sexoPasajeroIngresado)
        {
            case "f":
                contadorMujeres ++;
                break;
            case "nb":
                contadorNb ++;
                break;
            case "m":
                contadorHombres ++;
        }


        seguir = confirm("Desea continuar ingresando otro pasajero?");
    } while (seguir == true)

    if (contadorEfectivo > contadorMp && contadorEfectivo > contadorTarjeta)  // 3 bis
    {
        formaPagoMasUsada = "La forma de pago mas usada fue: efectivo";
    }
    else
    {
        if (contadorMp > contadorEfectivo && contadorMp > contadorTarjeta)
        {
            formaPagoMasUsada = "La forma de pago mas usada fue: Mercado Pago";
        }
        else
        {
            if (contadorTarjeta > contadorMp && contadorTarjeta > contadorEfectivo)
            {
                formaPagoMasUsada = "La forma de pago mas usada fue: Tarjeta";
            }
            else
            {
                formaPagoMasUsada = "No hay UN SOLO METODO mas usado que los otros 2";
            }
        }
    }   

    if (contadorAlta == contadorBaja)
    {
        temporadaMasViajada = "Se viajo igual en ambas";
    }
    else
    {   
        if (contadorAlta > contadorBaja)
        {
            temporadaMasViajada = "Se viajo mas en temporada ALTA";
        }
        else 
        {
            temporadaMasViajada = "Se viajó mas en temporada BAJA";
        }
    }

    if (contadorMadryn > contadorGessel && contadorMadryn > contadorCordoba)  
    {
        lugarMasViajado = "El lugar al que mas se viajó es: MADRYN";
    }
    else
    {
        if (contadorCordoba > contadorGessel && contadorCordoba > contadorMadryn)
        {
            lugarMasViajado = "El lugar al que mas se viajó es: CORDOBA";
        }
        else
        {
            if (contadorGessel > contadorCordoba && contadorGessel > contadorMadryn)
            {
                lugarMasViajado = "El lugar al que mas se viajó es: GESSEL";
            }
            else
            {
                lugarMasViajado = "NO hubo un lugar al que se haya viajado mas que los otros 2";
            }
        }
    }   

    cuentaEquipaje = (contadorEquiManoSi * 100) / contadorVueltasTotales;

    porcentajeNb = (contadorNb * 100) / contadorVueltasTotales;
    porcentajeF = (contadorMujeres * 100) / contadorVueltasTotales;
    porcentajeM = (contadorHombres * 100) / contadorVueltasTotales;

    document.write("La cantidad de personas que viaja por temporada es: " + cantidadPersonasPorTemporada + "<br>");
    document.write("el peso acumulado de todos los que viajan a villa gessel: " + pesoAcumuladoGessel + "<br>");
    document.write("el lugar con la mayor cantidad de días acumulados: " + "xxx" + "<br>");
    document.write("la suma de todos los importes: " + acumuladorImportes + "<br>");
    document.write("el nombre del más pesado de los pasajeros: " + nombreMasPesado + ". Y el del más liviano: " + nombreMasLiviano + "<br>");
    document.write("el lugar donde se pagó el mayor importe: " + nombreLugarMasCaro + "<br>");
    document.write("el nombre de la mujer más alta: " + nombreMujerAlta + "<br>");
    document.write(formaPagoMasUsada + "<br>");
    document.write(temporadaMasViajada + "<br>");
    document.write(lugarMasViajado + "<br>");
    document.write("el porcentaje de pasajeros que usa equipaje de mano es de: " + cuentaEquipaje + "%" +"<br>");
    document.write("Porcentaje de pasajeros: HOMBRES: " + porcentajeM + "%.  MUJERES: " + porcentajeF + "%.  NOBINARIO: " + porcentajeNb + "%." + "<br>");
}
*/