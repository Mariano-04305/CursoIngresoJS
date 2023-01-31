/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	let n1;
	let n2;
	let resultado;

	n1 = document.getElementById("txtIdNumeroUno").value; //pedis el dato por ID
	n2 = document.getElementById("txtIdNumeroDos").value;

	n1 = parseInt(n1)	//como toma el dato como string y necestias numero,
	n2 = parseInt(n2)	//así es como lo pasas de string a numero

	resultado = n1+n2

	alert ("la suma es " + resultado) 
}

