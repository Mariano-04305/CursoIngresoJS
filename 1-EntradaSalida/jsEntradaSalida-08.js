
function SacarResto()
{
    let vueltas = 0;
    let tipoProducto;
    let precioUnitarioIngre;
    let cantUnidadesPorVentaIngre;
    let nombreProducto;

    let precioPorVenta;
    let acumuladorVentas = 0;

    let contadorGolosinas = 0;
    let acumuladorUnidadesGolosinas = 0;
    let promedioUnidadesGolosinas;

    let precioUnitCigarroMasCaro;
    let cigarroMasCaro;
    let nombreCigarroMasCaro;
    let banderaCigarrillo = true;
    
    let contadorBebidas = 0;
    let porcentajeBebidas;

    do
    {
        do
        {
            nombreProducto = prompt("Ingresa nombre del producto");
        } while (nombreProducto == "" || !isNaN(nombreProducto));

        do 
        {
            tipoProducto = prompt("Que tipo de producto va a comprar?: ");
        } while(tipoProducto != "golosinas" && tipoProducto != "bebidas" && tipoProducto != "cigarrillos");
        
        do
        {
            precioUnitarioIngre = prompt("Precio por unidad del producto: ");
            precioUnitarioIngre = parseInt(precioUnitarioIngre);
        } while (isNaN(precioUnitarioIngre) || (precioUnitarioIngre < 1 || precioUnitarioIngre > 1000));
        
        do
        {
            cantUnidadesPorVentaIngre = prompt("Cuantas unidades del producto comprará?: ");
            cantUnidadesPorVentaIngre = parseInt(cantUnidadesPorVentaIngre);
        } while (isNaN(cantUnidadesPorVentaIngre) || (cantUnidadesPorVentaIngre < 1 || cantUnidadesPorVentaIngre > 10));

        precioPorVenta = cantUnidadesPorVentaIngre * precioUnitarioIngre;
        acumuladorVentas += precioPorVenta;

        switch(tipoProducto)
        {
            case "golosinas":
                contadorGolosinas++;
                acumuladorUnidadesGolosinas += cantUnidadesPorVentaIngre;
                break;
            case "cigarrillos":
                if (banderaCigarrillo == true || precioPorVenta > cigarroMasCaro) 
                {
                    banderaCigarrillo = false;
                
                    cigarroMasCaro = precioPorVenta;
                    nombreCigarroMasCaro = nombreProducto;
                    precioUnitCigarroMasCaro = precioUnitarioIngre;
                }
                break;
            default:
                contadorBebidas++;
        }

        vueltas ++;
    } while(vueltas < 2);

    promedioUnidadesGolosinas = acumuladorUnidadesGolosinas / contadorGolosinas;

    porcentajeBebidas = (contadorBebidas * 100) / 10;

    document.write("TOTAL BRUTO DE LAS 10 COMPRAS: " + acumuladorVentas + "<br>");
    if (contadorGolosinas != 0)
    {
        document.write("PROMEDIO UNIDADES X COMPRA DE GOLOSINA: " + promedioUnidadesGolosinas + "<br>");
    }
    else
    {
        document.write("NO se puede hacer el promedio de 'GOLOSINAS' porque no se ingreso ninguno de ese tipo" + "<br>");
    }
    if (nombreCigarroMasCaro != undefined)
    {
        document.write("de 'Cigarro', el mas caro es es: nombre: " + nombreCigarroMasCaro + ". su precio unitario: " + precioUnitCigarroMasCaro +  "<br>");
    }
    else
    {
        document.write("No se ingresó ningun 'cigarrillo'. no hay mayor" + "<br>");
    }
    document.write("DE TODAS LAS VENTAS, EL: " + porcentajeBebidas + "%. LE PERTENECE A BEBIDAS");
}
