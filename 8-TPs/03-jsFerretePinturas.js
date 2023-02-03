/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
	let temperaturaFahrenheit;
    let temperaturaCentígrados;

    temperaturaFahrenheit = document.getElementById("txtIdTemperatura").value;
    temperaturaFahrenheit = parseInt(temperaturaFahrenheit);

    temperaturaCentígrados = (temperaturaFahrenheit - 32) / 1.8;    //cuenta de conversion sacada de google
   
    alert(temperaturaFahrenheit + " grados fahrenheit son " + temperaturaCentígrados + " grados centígrados");
}

function CentigradosFahrenheit () 
{
    let temperaturaCentígrados;
    let temperaturaFahrenheit;
   
    temperaturaCentígrados = document.getElementById("txtIdTemperatura").value;
    temperaturaCentígrados = parseInt(temperaturaCentígrados);

    temperaturaFahrenheit = (temperaturaCentígrados * 9/5) + 32;    //cuenta de conversion sacada de google
   
    alert(temperaturaCentígrados + " grados centígrados son " + temperaturaFahrenheit + " grados fahrenheit");
}
