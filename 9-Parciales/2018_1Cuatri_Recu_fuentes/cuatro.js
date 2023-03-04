function mostrar()
{ 
    let cantidadFilas;
    let asteriscoVisual;
    let contador;

    contador = 0;
    asteriscoVisual = "";

    cantidadFilas = prompt("Ingrese la cantidad de filas que desea que aparezcan en consola: ");
    cantidadFilas = parseInt(cantidadFilas);

    while (contador != cantidadFilas)
    {
        asteriscoVisual += "*";
        contador ++;
        document.write(asteriscoVisual + "<br>");
    } 
}
//\n
// PIRAMIDE RECTA 

/*
    let cantidadFilas;
    let asteriscoVisual;
    let contador;

    contador = 0;
    asteriscoVisual = "";

    cantidadFilas = prompt("Ingrese la cantidad de filas que desea que aparezcan en consola: ");
    cantidadFilas = parseInt(cantidadFilas);

    while (contador != cantidadFilas)
    {
        asteriscoVisual += "*";
        contador ++;
        document.write(asteriscoVisual + "<br>");
    } 
*/

