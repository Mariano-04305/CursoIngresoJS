function mostrar()
{
	let numeroRandom;

    numeroRandom = Math.round(Math.random()*10);

    alert(numeroRandom);
}

// aleatorio = Math.round(Math.random()*9); ESO ES PARA PEDIR QUE TE TIRE UN NUMERO RANDOM *9 seria entre 0 y 9
// "Math.random()*x" te genera un n. random entre 0 y x, pero es con , 
// Si queres que sea entero, tmb usa "Marth.round" que su funcion es redondear el numero. Lo hace entero.