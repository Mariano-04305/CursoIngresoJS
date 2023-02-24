function mostrar()
{
    let planetaIngresado;
    let mensaje;

    planetaIngresado = prompt("Ingrese un planeta del sistema solar");

    switch(planetaIngresado)
    {
        case "mercurio":
        case "venus":
            mensaje = "Aca hace mas calor";
            break;
        case "tierra":
            mensaje = "Aca vivimos";
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            mensaje = "Aca hace mas frío";
            break;
        default:
            mensaje = "El dato ingresado no es un planeta del sistema solar, inténtalo de nuevo";
    }
    alert(mensaje);
}
