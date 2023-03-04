/*
3. Se debe llevar a cabo el registro de ingresos a un parque
de diversiones.  Dicho parque se caracteriza por su variedad 
de montañas rusas. Se pide el ingreso del nombre del visitante, 
la edad (mayores a 12 años), tipo de pasaporte (sin pasaporte, convencional, premium), 
tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%). Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.
Los visitantes sin pasaporte, abonan al momento de subir al juego. 
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada.
Los visitantes con pasaporte premium, no abonan nada.
Se necesita saber: 
La recaudación en efectivo por las tres montañas rusas.
Porcentaje de visitantes que se subieron a cada montaña rusa.
Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)

*/

function mostrar ()
{
    let seguir;
    let nombreIngresado;
    let edadIngresada; 
    let tipoPasaporteIngresado;
    let tipoMontañaRusa;

    let precio;
    let acumuladorEfectivo = 0;

    let contadorFantas = 0;
    let contadorAdrenali = 0;
    let contadorAcuati = 0;
    let contadorGeneral = 0;
    let porcentajeAdrena;
    let porcentajeFantas;
    let porcentajeAcua;

    let contadorPasapSin = 0;
    let contadorPasapConvenc = 0;
    let contadorPasapPremium = 0;
    let pasapMasUsado;

    do  
    {
        do
        {
            nombreIngresado = prompt("Nombre del visitante:");
        } while (nombreIngresado == "" || !isNaN(nombreIngresado));

        do
        {
            edadIngresada = prompt("edad: ");
            edadIngresada = parseInt(edadIngresada);
        } while (isNaN(edadIngresada) || edadIngresada < 12 );

        do 
        {
            tipoPasaporteIngresado = prompt("Tipo pasaporte: ");
        } while(tipoPasaporteIngresado != "sin pasaporte" && tipoPasaporteIngresado != "convencional" && tipoPasaporteIngresado != "premium");

        do 
        {
            tipoMontañaRusa = prompt("Tipo montaña rusa: ");
        } while(tipoMontañaRusa != "fantasma" && tipoMontañaRusa != "acuatica" && tipoMontañaRusa != "adrenalina");

        contadorGeneral ++;

        switch (tipoPasaporteIngresado)
        {
            case "sin pasaporte":
                contadorPasapSin++;
                precio = 500;
                break;
            case "convencional":
                contadorPasapConvenc++;
                precio = 500 - (500 * 0.30);
                break;
            default:
                contadorPasapPremium++;
                precio = 0;
        }

        acumuladorEfectivo += precio;

        switch (tipoMontañaRusa)
        {
            case "fantasma":
                contadorFantas++;
                break;
            case "adrenalina":
                contadorAdrenali++;
                break;
            default:
                contadorAcuati++;
        }

        seguir = confirm("Desea ingresar otro pasajero?: ");
    } while(seguir == true)

    porcentajeFantas = (contadorFantas * 100) / contadorGeneral;
    porcentajeAdrena = (contadorAdrenali * 100) / contadorGeneral;
    porcentajeAcua = (contadorAcuati * 100) / contadorGeneral;

    if (contadorPasapPremium > contadorPasapConvenc && contadorPasapPremium > contadorPasapSin)
    {
        pasapMasUsado = "Pasaporte premium";
    }
    else
    {
        if (contadorPasapSin > contadorPasapConvenc)
        {
            pasapMasUsado = "Sin pasaporte";
        }
        else
        {
            pasapMasUsado = "Pasaporte convencional";
        }
    }

    document.write(" La recaudación en efectivo por las tres montañas rusas es de: " + acumuladorEfectivo + "<br>");
    document.write("Porcentaje de visitantes que se subieron a cada montaña rusa. Fantasma: " + porcentajeFantas + "%. Adrenalina: " + porcentajeAdrena + "%. Acuatica: " + porcentajeAcua + "<br>");
    document.write("Cuál es el tipo de pasaporte que mas se utilizo: " + pasapMasUsado);
}





























/*
    -
2. Una librería que se especializa en venta de libros importados 
desea calcular ciertas métricas en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.

-


function mostrar()
{
    let seguir;
    let tituloIngresado;
    let generoIngresado;
    let materialTapaIngresado;
    let importeDelLibroIngresado;

    let contadorLibros = 0;

    let contadorDrama = 0;
    let contadorTerror = 0;
    let contadorFiccion = 0;
    let porcentajeTerror;
    let porcentajeDrama;
    let porcentajeFiccion;

    let banderaDrama = true;
    let tituloPrimerDramaVendido;
    let importeDramaMasBarato;
    let tituloImporteDramaMasBarato;

    do
    {
        do
        {
            tituloIngresado = prompt("Titulo: ");
        } while (tituloIngresado == "" || !isNaN(tituloIngresado));

        do 
        {
            generoIngresado = prompt("Genero: ");
        } while(generoIngresado != "ciencia ficcion" && generoIngresado != "drama" && generoIngresado != "terror");

        do 
        {
            materialTapaIngresado = prompt("Material de la tapa: ");
        } while(materialTapaIngresado != "rustica" && materialTapaIngresado != "tapa dura");

        do
        {
            importeDelLibroIngresado = prompt("Precio del libro: ");
            importeDelLibroIngresado = parseInt(importeDelLibroIngresado);
        } while (isNaN(importeDelLibroIngresado) || (importeDelLibroIngresado < 0 || importeDelLibroIngresado > 30000));

        contadorLibros ++;

        switch (generoIngresado)
        {
            case "drama":
                if (banderaDrama == true) 
                {
                    banderaDrama = false;

                    tituloPrimerDramaVendido = tituloIngresado;
                    importeDramaMasBarato = importeDelLibroIngresado;
                    tituloImporteDramaMasBarato = tituloIngresado;
                }
                else
                {
                    if (importeDelLibroIngresado < importeDramaMasBarato) 
                    {
                        importeDramaMasBarato = importeDelLibroIngresado;
                        tituloImporteDramaMasBarato = tituloIngresado;
                    }
                }
                contadorDrama++;
                break;
            case "terror":
                contadorTerror++;
                break;
            default:
                contadorFiccion++;
        }

        seguir = confirm("Desea ingresar otro libro?: ");
    } while(seguir == true)

    porcentajeFiccion = (contadorFiccion * 100) / contadorLibros;
    porcentajeDrama = (contadorDrama * 100) / contadorLibros;
    porcentajeTerror = (contadorTerror * 100) / contadorLibros;

    document.write("El más barato de los libros de drama es: " + tituloImporteDramaMasBarato + ". Su importe es: " + importeDramaMasBarato + "<br>");
    document.write("Qué porcentaje de cada género se vendió: ficcion: " + porcentajeFiccion + "%. drama: " + porcentajeDrama + "%. terror: " + porcentajeTerror + "%." + "<br>");
    document.write("El título del primer libro de drama que se vendió: " + tituloPrimerDramaVendido);
}
*/