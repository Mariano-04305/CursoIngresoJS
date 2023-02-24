
function mostrar()
{
    let anchoIngresado;
    let largoIngresado;
    let perímetro;

    anchoIngresado = prompt("Ingrese el ancho de un rectángulo: ");
    anchoIngresado = parseInt(anchoIngresado);

    while(isNaN(anchoIngresado) || (anchoIngresado < 1))
    {
        anchoIngresado = prompt("Error. Ingrese un valor numérico para ancho de rectangulo:");
        anchoIngresado = parseInt(anchoIngresado);
    }
    
    do 
    {
        largoIngresado = prompt("Ingrese un valor NUMÉRICO para de rectangulo:");
        largoIngresado = parseInt(largoIngresado);
    } while (isNaN(largoIngresado) || largoIngresado < 1)

    perímetro = (largoIngresado * 2) + (anchoIngresado * 2);

    alert("El perímetro del rectangulo segun las medidas que ingresó es de: " + perímetro);
}
