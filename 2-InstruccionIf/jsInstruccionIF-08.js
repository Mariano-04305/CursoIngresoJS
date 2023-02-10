/*
	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
	pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	let edadIngresada;
	let estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	
	if (edadIngresada >= 18 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
} //ENTREGADO

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
