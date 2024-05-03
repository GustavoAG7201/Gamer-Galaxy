// function funcionar(){
//     alert("Mi pagina si funciona!");
// }

function nombreSaludo(){
    let nombre = prompt("Ingresa tu nombre.");
    let dia = prompt("Ingresa el nombre del día");

    let nombreDia;

    switch(dia.toLowerCase()) {
        case "lunes":
            nombreDia = "Lunes";
            break;
        case "martes":
            nombreDia = "Martes";
            break;
        case "miércoles":
            nombreDia = "Miércoles";
            break;
        case "jueves":
            nombreDia = "Jueves";
            break;
        case "viernes":
            nombreDia = "Viernes";
            break;
        case "sábado":
            nombreDia = "Sábado";
            break;
        case "domingo":
            nombreDia = "Domingo";
            break;
        default:
            nombreDia = "Por favor ingresa el nombre de un día de la semana";
    }
    
    alert("Hola, " + nombre + "! El día de hoy es: " + nombreDia);
}


function operaciones()
{
    var num1 = parseFloat(prompt("Ingresa tu primer numero"));
    var num2 = parseFloat(prompt("Ingresa tu segundo numero"));
    var operacion = prompt("Ingresa el tipo de operacion que deseas realizar por medio de su signo (+,-,*,/)")
    var resultado;

    

    switch(operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1/num2;
            break;
        default:
            resultado = "Por favor ingresa una operacion valida";
    }
    
    alert("Hola, el resultado de la operacion seleccionada es: " + resultado);
}


