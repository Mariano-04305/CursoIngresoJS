function mostrar()
{   
    let i;
    let j;

    j = 0;

    i = prompt("Ingresa un numero");
    i = parseInt(i);

    for (let pares = 2 ; pares <= i ; pares += 2, j++)
    {    
            document.write(pares + "<br>");
    }
    alert("La cantidad de numeros pares entre 1 y el numero ingresado es de: " + j);
}