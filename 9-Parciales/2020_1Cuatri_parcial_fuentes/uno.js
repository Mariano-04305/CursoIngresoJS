function mostrar()
{
    let productoIngresado;              //contador de vueltas y todos los datos que pido
    let precioDelProductoIngresado;
    let contadorDeProductos;
    let cantidadUnidadesIngresadas;
    let marcaIngresada;
    let fabricanteIngresado;  
    let banderaAlcoholBarato;       // alcohol mas barato, punto b
    let fabricanteAlcoholBarato;
    let unidadesAlcoholBarato;
    let contadorUnidades;         // tipo con mas unidades y cuenta de promedio
    let promedioUnidades;
    let tipoConMasUnidades;
    let acumuladorMasGrandeCuentaPromedio;  
    let acumuladorAlcohol;          //acumuladores según el caso
    let acumuladorJabon;
    let acumuladorBarbijos;
    let contadorUnidadesJabon;
    let contadorUnidadesAlcohol;
    let contadorUnidadesBarbijo;

    contadorUnidadesJabon = 0;
    contadorUnidadesAlcohol = 0;
    contadorUnidadesBarbijo = 0;
    acumuladorAlcohol = 0;
    acumuladorBarbijos = 0;
    acumuladorJabon = 0;
    contadorDeProductos = 0;
    banderaAlcoholBarato = true;

    do
    {
        contadorDeProductos ++
        
        do
        {
            productoIngresado = prompt("Debe ingresar 5 productos. Ud. está ingresamdo su: " + contadorDeProductos + ". producto.   Ingrese un producto:");

        } while (productoIngresado != "barbijo" && productoIngresado != "jabón" && productoIngresado != "alcohol");

        do
        {
            precioDelProductoIngresado = prompt("Ingrese el precio del producto previo");
            precioDelProductoIngresado = parseInt(precioDelProductoIngresado);

        } while ((isNaN(precioDelProductoIngresado)) || (precioDelProductoIngresado < 100 || precioDelProductoIngresado > 300));

        do
        {
            cantidadUnidadesIngresadas = prompt("Cuantas unidades del producto que ingresó desea comprar?");
            cantidadUnidadesIngresadas = parseInt(cantidadUnidadesIngresadas);

        } while (isNaN(cantidadUnidadesIngresadas) || (cantidadUnidadesIngresadas < 1 || cantidadUnidadesIngresadas > 999));

        marcaIngresada = prompt("Ingresa la marca del producto: ");
        fabricanteIngresado = prompt("Ingrese el fabricante del producto: ");

        switch (productoIngresado)
        {
            case "barbijo":
                acumuladorBarbijos += cantidadUnidadesIngresadas;
                contadorUnidadesBarbijo ++;
                break;
            case "jabón":
                acumuladorJabon += cantidadUnidadesIngresadas;
                contadorUnidadesJabon ++;
                break;
            case "alcohol":
                acumuladorAlcohol += cantidadUnidadesIngresadas;
                contadorUnidadesAlcohol ++;

                while (banderaAlcoholBarato == true)
                {
                    banderaAlcoholBarato = false;
        
                    precioMinimo = precioDelProductoIngresado;
                }
                 
                if (precioDelProductoIngresado < precioMinimo)
                {
                    precioMinimo = precioDelProductoIngresado;
                    unidadesAlcoholBarato = cantidadUnidadesIngresadas;
                    fabricanteAlcoholBarato = fabricanteIngresado;
                }
                break;
            case "barbijo":
                acumuladorBarbijos += cantidadUnidadesIngresadas;
                contadorUnidadesBarbijo ++;
                break;
        }

    } while (contadorDeProductos < 5);

    if (acumuladorAlcohol > (acumuladorBarbijos && acumuladorJabon))
    {
        tipoConMasUnidades = "alcohol";
        acumuladorMasGrandeCuentaPromedio = acumuladorAlcohol;
        contadorUnidades = contadorUnidadesAlcohol;
    }
    else
    {
        if (acumuladorBarbijos > (acumuladorAlcohol && acumuladorJabon))
        {
            tipoConMasUnidades = "barbijos";
            acumuladorMasGrandeCuentaPromedio = acumuladorBarbijos;
            contadorUnidades = contadorUnidadesBarbijo;
        }
        else
        {
            if (acumuladorJabon > (acumuladorAlcohol && acumuladorBarbijos))
            {
                tipoConMasUnidades = "jabón";
                acumuladorMasGrandeCuentaPromedio = acumuladorJabon;
                contadorUnidades = contadorUnidadesJabon;
            }
        }
    }
    
    promedioUnidades = acumuladorMasGrandeCuentaPromedio / contadorUnidades;

    alert("Del más barato de los alcohol, la cantidad de unidades compradas es de: " + unidadesAlcoholBarato + ". Y el fabricante es: " + fabricanteAlcoholBarato);
    alert("El tipo con mas unidades es: " + tipoConMasUnidades + ". El promedio por compra de este tipo es de: " + promedioUnidades);
    alert("Cantidad de jabones compradas en total: " + contadorUnidadesJabon);
}
