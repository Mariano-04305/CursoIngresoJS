function mostrar()
{
    let letraIngresada;
    let numeroIngresado;
    let respuesta;
    let cantidadPares;
    let cantidadImpares;
    let cantidadCeros;
    let acumuladorNegativos;
    let acumuladorPositivos;
    let banderaDelPrimerNumero;
    let numeroMaximo;
    let numeroMinimo;
    let letraDelMaximo;
    let letraDelMinimo;
    let promedioPositivos;
    let contadorPositivos;
   
    cantidadCeros = 0;
    cantidadPares = 0;
    cantidadImpares = 0;
    acumuladorNegativos = 0;
    acumuladorPositivos = 0;
    banderaDelPrimerNumero = true;
    contadorPositivos = 0;

    do 
    {
        letraIngresada = prompt("Ingresa una letra");
        do
        {        
            numeroIngresado = prompt("Ingresa un numero");
            numeroIngresado = parseInt(numeroIngresado);
        } while (isNaN(numeroIngresado) || (numeroIngresado < -100 || numeroIngresado > 100))
        
        if (numeroIngresado == 0)
        {
            cantidadPares ++;
            cantidadCeros ++;
        } 
        else
        {
            if (numeroIngresado % 2 == 0)    
            {     
                cantidadPares ++;
            }
            else
            {
                cantidadImpares ++;
            }
        }

        if (numeroIngresado < 0)
        {
            acumuladorNegativos += numeroIngresado;
        }
        else
        {
            acumuladorPositivos += numeroIngresado;
            contadorPositivos ++;
        }

        while (banderaDelPrimerNumero == true)
        {
            banderaDelPrimerNumero = false;

            numeroMaximo = numeroIngresado;
            numeroMinimo = numeroIngresado;
            letraDelMaximo = letraIngresada;
            letraDelMinimo = letraIngresada;
        }

        if (numeroIngresado > numeroMaximo)
        {
            numeroMaximo = numeroIngresado;
            letraDelMaximo = letraIngresada;
        }
        else
        {
            if (numeroIngresado < numeroMinimo)
            {
                numeroMinimo = numeroIngresado;
                letraDelMinimo = letraIngresada;
            }
        }

        respuesta = confirm("Desea ingresar otra letra y otro numero?");
    } while (respuesta == true)

    promedioPositivos = acumuladorPositivos / contadorPositivos;

    document.write("La cantidad de numeros pares es de: " + cantidadPares + "<br/>");
    document.write("La cantidad de numeros impares es de: " + cantidadImpares + "<br/>");
    document.write("La cantidad de 0 es de: " + cantidadCeros + "<br/>");
    document.write("El promedio de los positivos es de: " + promedioPositivos + "<br/>");
    document.write("La suma de los negativos es de: " + acumuladorNegativos + "<br/>");
    document.write("El numero del maximo: " + numeroMaximo + ". Y la letra del maximo: " + letraDelMaximo + "<br/>");
    document.write("El numero del minimo es: " + numeroMinimo + ". Y la letra del minimo es: " + letraDelMinimo + "<br/>");
}

