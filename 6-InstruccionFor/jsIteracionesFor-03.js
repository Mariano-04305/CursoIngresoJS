function mostrar()
{
    let repetcionesHola;

    repetcionesHola = prompt("Cuantas veces quieres que aparezca 'hola'?");
    repetcionesHola = parseInt(repetcionesHola);

    for (; repetcionesHola > 0 ; repetcionesHola --)
    {
       alert("Hola");
    }

}//FIN DE LA FUNCIÓN