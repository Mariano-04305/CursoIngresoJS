function mostrar()
{
    let nombreIngresado;
    let localidadIngresada;
    let mensaje;
    
    nombreIngresado = document.getElementById("elNombre").value;
    localidadIngresada = document.getElementById("laLocalidad").value;

 
    mensaje = "Usted es: " + nombreIngresado + " Y vive en: " + localidadIngresada;
    alert(mensaje);
}
