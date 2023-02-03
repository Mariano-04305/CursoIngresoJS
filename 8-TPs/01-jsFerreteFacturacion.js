/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultado = precio1 + precio2 + precio3
    
    alert("la suma de los 3 precios es: " + resultado)
}

function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultado = (precio1 + precio2 + precio3) / 3
    alert ("el promedio de los 3 precios es: " + resultado)
}

function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultadoSuma;
    let resultadoFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultadoSuma = precio1 + precio2 + precio3;

    resultadoFinal = resultadoSuma + (resultadoSuma / 100) * 21;

    alert ("el precio final de los 3 con el IVA es de: " + resultadoFinal);
}
