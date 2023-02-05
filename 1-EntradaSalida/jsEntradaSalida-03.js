/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	let nombreIngresado;
	nombreIngresado = txtIdNombre.value;
	alert(nombreIngresado);
}




//EJERCICIO 2 DE CLASE SABADO 1
/*
	function mostrar()
{
	let valorCompra;
	let iva;
	let valorConIva;
	let descuento;
	let valorMenosDescuento;

	valorCompra = document.getElementById("txtIdNombre").value;

	valorCompra = parseInt(valorCompra);
	iva = parseInt(iva);
	valorConIva = parseInt(valorConIva);
	descuento = parseInt(descuento);
	valorMenosDescuento = parseInt(valorMenosDescuento);

	iva = (valorCompra / 100) * 21;

	valorConIva = valorCompra + iva;

	descuento = valorConIva * 0.05;

	valorMenosDescuento = valorConIva - descuento;
	
	alert("IMPORTE BRUTO: " + valorCompra + "   IVA: " + iva + "   IMPORTE CON IVA: " + valorConIva);
	alert("VALOR DEL DESCUENTO: " + descuento + "   TOTAL A PAGAR: " + valorMenosDescuento);
}
*/



