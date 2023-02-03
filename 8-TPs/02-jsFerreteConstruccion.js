/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   
    //AREA/SUPERFICIE: El espacio dentro de la figura
    //PERÍMETRO: Es la suma de todos los lados
    let largoTerreno;
    let anchoTerreno;
    let cantidadAlambre;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    cantidadAlambre = ( (largoTerreno * 2) + (anchoTerreno * 2) ) *3

    alert("se necesitaran " + cantidadAlambre + " metros de alambre");
}
function Circulo () 
{   
    // RADIO: El radio es  la recta que va del centro a un extremo del circulo
	// DIAMETRO: El diámetro es la recta que pasa por el centro y toca dos puntos del borde de un círculo.
        //perímetro de circulo = pi * diametro
    let radioTerreno;
    let diametro;
    let perímetro;
    let alambre;
    radioTerreno = parseInt(document.getElementById("txtIdRadio").value);

    diametro = radioTerreno * 2;

    perímetro = Math.PI * diametro; 

    alambre = perímetro * 3;

    alert ("se necesitaran " + alambre + " metros de alambre")
}
function Materiales () 
{
    // 1m * 1m necesita 2 cemento 3 cal
	let largoTerreno;
    let anchoTerreno;
    let areaRectangulo;
    let cantidadCemento;
    let cantidadCal;
    

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    areaRectangulo = largoTerreno * anchoTerreno;

    cantidadCemento = areaRectangulo * 2 ;
    cantidadCal = areaRectangulo * 3;

    alert ("la cantidad de cemento que necesitarías es de: " + cantidadCemento + " y la cantidad de cal: " + cantidadCal) 
}