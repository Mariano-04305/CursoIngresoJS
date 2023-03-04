//CODIGO AYUDA

// 5 VUELTAS
let vueltas = 0;
do
{
    vueltas ++;
} while(vueltas < 5);

// SEGUIR
do
{

    seguir = confirm("");
} while(seguir == true)


//VALIDACION
do 
{
    x = prompt("");
} while(x != "barbijo" && x != "jabón" && x != "alcohol");


do
{
    x = prompt("");
} while (x == "" || !isNaN(x));

do
{
    x = prompt("");
    x = parseInt(x);
} while (isNaN(x) || (x < 100 || x > 300));

do
{
    x = prompt("");
    x = parseInt(x);
} while (isNaN(x) || x < 1 );

do
{
    x = prompt("");
    x = parseInt(x);
} while (isNaN(x));


// Maximo CON PROMEDIO
let acumuladorAlcohol = 0;
let acumuladorBarbi = 0;
let acumuladorJabon = 0;
let maximoAcumUnidadesNombre;

if (acumuladorAlcohol > acumuladorBarbi && acumuladorAlcohol > acumuladorJabon)
    {
        maximoAcumUnidadesNombre = "Alcohol";
        promedioUnidadesMaximo = acumuladorAlcohol / contadorAlcohol; 
    }
    else
    {
        if (acumuladorBarbi > acumuladorJabon)
        {
            maximoAcumUnidadesNombre = "Barbijo";
            promedioUnidadesMaximo = acumuladorBarbi / contadorBarbi; 
        }
        else
        {
            maximoAcumUnidadesNombre = "Jabon";
            promedioUnidadesMaximo = acumuladorJabon / contadorJabon; 
        }
    }

    
// Maximo SIN PROMEDIO
if (acumuladorAlcohol > acumuladorBarbi && acumuladorAlcohol > acumuladorJabon)
    {
        maximoAcumUnidadesNombre = "Alcohol";    
    }
    else
    {
        if (acumuladorBarbi > acumuladorJabon)
        {
            maximoAcumUnidadesNombre = "Barbijo";
        }
        else
        {
            maximoAcumUnidadesNombre = "Jabon";
        }
    }


// MAXIMO CONTEMPLANDO Q UNO NO TIENE MAS Q EL OTRO

if (acumuladorAlcohol > acumuladorBarbi && acumuladorAlcohol > acumuladorJabon)
{
    maximoAcumUnidadesNombre = "Alcohol";    
}
else
{
    if (acumuladorBarbi > acumuladorJabon && acumuladorBarbi > acumuladorAlcohol)
    {
        maximoAcumUnidadesNombre = "Barbijo";
    }
    else
    {
        if(acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbi)
        {
            maximoAcumUnidadesNombre = "Jabon";
        }
        else
        {
            maximoAcumUnidadesNombre = "NO HAY UNO QUE TENGA MAS QUE AMBOS"
        }
    }
}

// BANDERA Una condicion
let precioIngresado;
let nombreIngresadoAlcohol;
let masBaratoAlco;
let nombreAlcoholMasBarato;
let banderaAlcohol = true;

if (banderaAlcohol == true || precioIngresado < masBaratoAlco) 
{
    banderaAlcohol = false;

    masBaratoAlco = precioIngresado;
    nombreAlcoholMasBarato = nombreIngresadoAlcohol;
}


// BANDERA Dos condiciones
let numeroIngresado;
let nombreIngresado;
let bandera = true;
let numeroMaximo;
let numeroMinimo;
let nombreNumeroMaximo;
let nombreNumeroMinimo;
  
if (bandera == true)
{
    bandera = false;

    numeroMaximo = numeroIngresado;
    numeroMinimo = numeroIngresado;
    nombreNumeroMinimo = nombreIngresado;
    nombreNumeroMaximo = nombreIngresado;
}
else
{
    if (numeroIngresado > numeroMaximo)
    {
        numeroMaximo = numeroIngresado;
        nombreNumeroMaximo = nombreIngresado;
    }
    else
    {
        if (numeroIngresado < numeroMinimo)
        {
            numeroMinimo = numeroIngresado;
            nombreNumeroMinimo = nombreIngresado;
        }
    }
}


// PROMEDIO
let acumuladorNotas;
let contadorNotasExamen;
let promedioNotas;

promedioNotas = acumuladorNotas / contadorNotasExamen;


// PORCENTAJE ¿Que porcentaje de notas aprobé?
let notaIngresada;
let contadorNotas;
let contadorNotaAprobada;
let porcentajetNotasAprobadas;

contadorNotas++;

if (notaIngresada >= 6)
{
    contadorNotaAprobada++;
}

porcentajetNotasAprobadas = (contadorNotaAprobada * 100) / contadorNotas;


// Doc

document.write("" + "<br>");


// SI X NO ES 0, PARA QUE NO TE DE NAN EN PROMEDIO

if (contadorSuperRaras != 0)
{
    document.write("El promedio de precio de 'X': " + promedioPrecioSRaras + "<br>");
}
else
{
    document.write("NO se puede hacer el promedio de 'X'porque no se ingreso ninguno de ese tipo" + "<br>");
}


// SI MAXIMO O MINIMO DE BANDERA ES UNDEFINED...

if (x != undefined)
{
    document.write("de 'x', el menor es: " + nombreMenorKporCaja + "<br>");
}
else
{
    document.write("No se ingresó ningun 'x'. no hay menor" + "<br>");
}