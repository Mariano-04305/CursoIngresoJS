 //OPERADORES COMPARACION
    /*

    ==       IGUAL A
    !=       DISTINTO A
    
    >		    MAYOR QUE
    <        MENOR QUE
    >        MAYOR O IGUAL A
    <        MENOR O IGUAL A

    //OPERADORES LOGICOS
	
    &&         = Y 
    ||  	      = O  or
    !  		   = CONTRARIO

    */



// EJERCICIO 1 BIS BIS
/*
   Ejercicio 1 bis bis:
   con if
   ingresar el nombre y los datos requeridos para calcular el IMC , 
   e informar a la persona si es:
   Bajo peso <18.5
   Peso normal 18,5-24.9
   Preobesidad 25-26.9
   Obesidad I 27-29.9
   Obesidad II 30-34.9
   Obesidad III >40
*/

function mostrar()
{
   let nombre;
   let estatura;
   let peso;
   let imc;
   let mensaje;

   nombre = document.getElementById("txtIdEdad").value;

  
   peso = prompt("Ingrese su peso en KG:");
   estatura = prompt("ingrese su altura en M");
  
   peso = parseFloat(peso);
   estatura = parseFloat(estatura);
   
   imc = peso / (estatura * estatura);

   imc = imc.toFixed(2);   // sirve para redondear un valor de variable o numero a solo 2 decimales.

   if (imc < 18.6)
   {
      mensaje = "Bajo peso";
   }
   else
   {
      if (imc > 18.5 && imc < 25)
      {
         mensaje = "peso normal";
      }
      else
      {
         if (imc > 24.9 && imc < 27)
         {
            mensaje = "Preobecidad";
         }
         else
         {
            if (imc > 26.9 && imc < 30)
            {
               mensaje = "Obesidad I";
            }
            else
            {
               if (imc > 29.9 && imc < 35)
               {
                  mensaje = "Obesidad II";
               }
               else
               {
                  if (imc > 34.9 && imc < 41)
                  {
                     mensaje = "Obesidad III";
                  }
                  else
                  {
                     mensaje = "Estas vivo?";
                  }
               }
            }
         }
      }
   }

alert("IMC: " + imc + ".   Sr/a: " + nombre + ", su peso es de: " + peso + "kg, su altura, de: " + estatura + "  Y su IMC indica que ud. está: " + mensaje);

}



/* EJERICIO ORIGINAL

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad == 15) 
	{
		alert("niña bonita");
	}
}
*/



//EJERCICIO 1 BIS
/*
con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace/
*/

/*
function mostrar()
{
   let distancia;
   let tiempo;
   let velocidad;
   let mensaje;

   distancia = document.getElementById("txtIdEdad").value;
   distancia = parseInt(distancia);

   tiempo = prompt("cuanto tiempo tardó en viajar? (EN HORAS)");
   tiempo = parseInt(tiempo);
   
   velocidad = distancia / tiempo;
   
   if (velocidad < 61)
   {
      mensaje = "muy lento";
   }
   else
   {
      if (velocidad > 60 && velocidad < 81)
      {
         mensaje = "lento";
      }
      else
      {
         if (velocidad > 80 && velocidad < 101)
         {
            mensaje = "buen ritmo";
         }
         else
         {
            if (velocidad > 100 && velocidad < 121)
            {
               mensaje = "ahí de la ley eh...";
            }
            else
            {
               mensaje = "broo eso no se hace";
            }
         }
      }
   }
   
   alert("su velocidad es de: " + velocidad + " , " + mensaje);
}
*/
