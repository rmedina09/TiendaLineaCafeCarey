alert("¡Bienvenidas Mujeres emprendedoras!");

var confirmacion = confirm(" ¿Deseas saber acerca de autonomía económica de las mujeres?");

if (confirmacion) {
	var nombre = prompt("¿Cuál es tu nombre emprendedora?");
	alert("Hola " + nombre + "  te invitamos a ser emprendedora y a desarrollar tu autonomía económica.");
} else {
	window.location.href = "https://www.google.com";
}

function cargaReloj(){
    fechaActual = new Date()
    hora = formato(fechaActual.getHours());
    minuto = formato(fechaActual.getMinutes());
    segundo = formato(fechaActual.getSeconds());

    dia = formato(fechaActual.getDate());
    mes = formato(fechaActual.getMonth());
    anio = fechaActual.getFullYear();

    hrs = (hora > 12) ? "PM" : "AM";
    hora = (hora > 12) ? (hora - 12) : hora;

    fecha = dia + " / " + mes + " / " + anio;

    horaActual = hora + " : " + minuto + " : " + segundo + "  " + hrs;

    document.getElementById("fecha").innerHTML = fecha;

    document.getElementById("reloj").innerHTML = horaActual;

    setTimeout("cargaReloj()",1000)
}

function formato(num){
    return (num < 10) ? ("0" + num) : num;
}

