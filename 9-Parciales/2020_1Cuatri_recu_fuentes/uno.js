function mostrar()
{
	let bucleCincoVueltas;		//bucle y pedir datos
	let tipoProductoIngresado;
	let precioProductoIngresado;
	let cantidadUnidadesDelProductoIngresado;
	let marcaIngresada;
	let fabricanteIngresado;
	let banderaJabon;	// A
	let jabonMasCaro;
	let unidadesDeJabonMasCaro;
	let fabricanteDeJabonMasCaro;
	let acumuladorJabon;	// B
	let contadorJabon;
	let acumuladorBarbijos;
	let contadorBarbijos;
	let acumuladorAlcohol;
	let contadorAlcohol;
	let promedioMasUnidades;

	bucleCincoVueltas = 1;
	banderaJabon = true;
	acumuladorJabon = 0;
	contadorJabon = 0;
	acumuladorBarbijos = 0;
	contadorBarbijos = 0;
	acumuladorAlcohol = 0;
	contadorAlcohol = 0;

	do
	{
		do
		{
			tipoProductoIngresado = prompt("Debe ingresar 5 productos. Este es su: " + bucleCincoVueltas + " producto.   Ingrese un producto: ");
		} while (tipoProductoIngresado != "jabón" && tipoProductoIngresado != "alcohol" && tipoProductoIngresado != "barbijo");

		do 
		{
			precioProductoIngresado = prompt("Ingrese el precio del producto anterior: ");
			precioProductoIngresado = parseInt(precioProductoIngresado);
		} while (isNaN(precioProductoIngresado) || (precioProductoIngresado < 100 || precioProductoIngresado > 300));

		do
		{
			cantidadUnidadesDelProductoIngresado = prompt("Cuantas cantidades del producto anterior compró?: ");
			cantidadUnidadesDelProductoIngresado = parseInt(cantidadUnidadesDelProductoIngresado);
		} while (isNaN(cantidadUnidadesDelProductoIngresado) || (cantidadUnidadesDelProductoIngresado < 0 || cantidadUnidadesDelProductoIngresado > 1000));

		marcaIngresada = prompt("Ingrese la marca del producto anterior: ");
		fabricanteIngresado = prompt("Ingrese el fabricante del producto anterior: ");

		switch (tipoProductoIngresado)
		{
			case "jabón":
				acumuladorJabon += cantidadUnidadesDelProductoIngresado;
				contadorJabon ++;
				while(banderaJabon == true)
				{
					banderaJabon = false;

					jabonMasCaro = precioProductoIngresado;
				}

				if (precioProductoIngresado > jabonMasCaro)
				{
					jabonMasCaro = precioProductoIngresado;

					unidadesDeJabonMasCaro = cantidadUnidadesDelProductoIngresado;
					fabricanteDeJabonMasCaro = fabricanteIngresado;
				}
				break;
			case "barbijo":
				acumuladorBarbijos += cantidadUnidadesDelProductoIngresado;
				contadorBarbijos ++;
				break;
			case "alcohol":
				acumuladorAlcohol += cantidadUnidadesDelProductoIngresado;
				contadorAlcohol ++;
		}

		bucleCincoVueltas ++;
	} while (bucleCincoVueltas < 6);

	if (acumuladorJabon > acumuladorBarbijos && acumuladorJabon > acumuladorAlcohol)
	{
		promedioMasUnidades = acumuladorJabon / contadorJabon; 
	}
	else
	{
		if (acumuladorBarbijos > acumuladorJabon && acumuladorBarbijos > acumuladorAlcohol)
		{
			promedioMasUnidades = acumuladorBarbijos / contadorBarbijos;
		}
		else
		{
			if (acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabon)
			{
				promedioMasUnidades = acumuladorAlcohol / contadorAlcohol;
			}
		}
	}

	document.write("Del más caro de los jabones, la cantidad de unidades es: " + unidadesDeJabonMasCaro + ". Y el fabricante es: " + fabricanteDeJabonMasCaro + "<br>");
	document.write("Del tipo de producto con más unidades en total de la compra, el promedio por compra: " + promedioMasUnidades + "<br>");
	document.write("La cantidad de barbijos que se compraron fue de: " + contadorBarbijos);
}
