/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	let numeroUno;
	let resultado;
	
	numeroUno = document.getElementById("txtIdSueldo").value;
	numeroUno = parseInt(numeroUno);

	resultado = numeroUno + (numeroUno / 100 * 10) ;

	document.getElementById("txtIdResultado").value = resultado;
}
