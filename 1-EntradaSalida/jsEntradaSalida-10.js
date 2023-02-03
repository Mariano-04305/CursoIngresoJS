/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numeroUno
	let resultado
	
	numeroUno = document.getElementById("txtIdImporte").value;
	numeroUno = parseInt(numeroUno);

	resultado = numeroUno - (numeroUno / 100 * 25) ;

	document.getElementById("txtIdResultado").value = resultado
}
