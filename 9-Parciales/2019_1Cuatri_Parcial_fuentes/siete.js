function mostrar()
{
    let bucleParaIngreso;
    let alturaIngresada;
    let sexoIngresado;
    let acumuladorAlturas;
    let promedioAlturas;
    let banderaPrimeraAltura;
    let alturaMasBaja;
    let sexoDeAlturaMasBaja;
    let mujeresAltas;

    bucleParaIngreso = 1;
    acumuladorAlturas = 0;
    contadorAlturas = 0;
    banderaPrimeraAltura = true;
    mujeresAltas = 0;

    do
    {   
        do
        {
            alturaIngresada = prompt("Este es el " + bucleParaIngreso + " basquetballista de 5 totales. Ingresa la altura: ");
            alturaIngresada = parseInt(alturaIngresada);
        } while(isNaN(alturaIngresada) || (alturaIngresada < 0 || alturaIngresada > 250));

        do
        {
            sexoIngresado = prompt("Ingrese el sexo (f o m)");
        } while(sexoIngresado != "f" && sexoIngresado != "m");

        acumuladorAlturas += alturaIngresada;

        while (banderaPrimeraAltura == true)
        {
            banderaPrimeraAltura = false;

            alturaMasBaja = alturaIngresada;
            sexoDeAlturaMasBaja = sexoIngresado;
        }

        if (alturaIngresada < alturaMasBaja)
        {
            alturaMasBaja = alturaIngresada;
            sexoDeAlturaMasBaja = sexoIngresado;
        }

        if (alturaIngresada > 189 && sexoIngresado == "f")
        {
            mujeresAltas ++;
        }
        
        bucleParaIngreso ++;
    } while (bucleParaIngreso < 6);

    promedioAlturas = acumuladorAlturas / bucleParaIngreso;

    alert("El promedio entre las 5 alturas ingresadas es de: " + promedioAlturas);
    alert("La altura más baja es de: " + alturaMasBaja + ". Y el sexo de esa persona es: " + sexoDeAlturaMasBaja);
    alert("La cantidad de mujeres que su altura supera los 190 centimetros es de: " + mujeresAltas);
}
