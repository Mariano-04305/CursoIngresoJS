function mostrar()
{
    let contador;
    let notaIngresada;
    let sexoIngresado;
    let acumuladorNotas;
    let promedioNotas;
    let banderaPrimeraNota;
    let notaMinima;
    let contadorHombresMayorASeis;
    let sexoDeNotaMasBaja;

    banderaPrimeraNota = true;
    contador = 0;
    acumuladorNotas = 0;
    contadorHombresMayorASeis = 0;

    while (contador < 5)
    {
        contador ++
        
        do
        {
            notaIngresada = prompt("Ingresa 5 notas de examen:");
            notaIngresada = parseInt(notaIngresada);
        } while(isNaN(notaIngresada) || (notaIngresada < 0 || notaIngresada > 10));

        do
        {
            sexoIngresado = prompt("Ingrese el sexo de quien está ingresando la nota: ")
        } while(sexoIngresado != "F" && sexoIngresado != "M");

        while(banderaPrimeraNota == true)
        {
            banderaPrimeraNota = false;

            notaMinima = notaIngresada; 
        }

        if (notaIngresada < notaMinima)
        {
            notaMinima = notaIngresada;
            sexoDeNotaMasBaja = sexoIngresado;
        }
    
        if (notaIngresada > 5 && sexoIngresado == "M")
        {
            contadorHombresMayorASeis++;
        }

        acumuladorNotas += notaIngresada;
    } 

    promedioNotas = acumuladorNotas / contador;

    alert ("Promedio de las notas: " + promedioNotas);
    alert ("La nota mas baja fue: " + notaMinima + ". El sexo de la persona que sacó esa nota es: " + sexoIngresado);
    alert ("La cantidad de varones cuya nota fue 6 o mayor es de: " + contadorHombresMayorASeis);
}
