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
} while (isNaN(x));

do
{
    cantidadBolsas = prompt("");
    cantidadBolsas = parseInt(cantidadBolsas);
} while (isNaN(cantidadBolsas) || cantidadBolsas < 0);


// Maximo y minimo
let acumuladorAlcohol = 0;
let acumuladorBarbi = 0;
let acumuladorJabon = 0;
let maximoAcumUnidadesNombre;

if (acumuladorAlcohol > acumuladorBarbi && acumuladorAlcohol > acumuladorJabon)
    {
        maximoAcumUnidadesNombre = "Alcohol";
        promedioUnidadesMaximo = acumuladorAlcohol / contadorAlcohol; // esto es solo si tmb tenes q hacer promedio con cada uno de los tipos
    }
    else
    {
        if (acumuladorBarbi > acumuladorJabon)
        {
            maximoAcumUnidadesNombre = "Barbijo";
            promedioUnidadesMaximo = acumuladorBarbi / contadorBarbi; // esto es solo si tmb tenes q hacer promedio con cada uno de los tipos
        }
        else
        {
            maximoAcumUnidadesNombre = "Jabon";
            promedioUnidadesMaximo = acumuladorJabon / contadorJabon; // esto es solo si tmb tenes q hacer promedio con cada uno de los tipos
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