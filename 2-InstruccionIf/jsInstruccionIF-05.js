function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

   if (edad < 13 || edad > 17)   //13 y 17 incluidos
	{
		alert("usted no es adolescente");
	}
}


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
