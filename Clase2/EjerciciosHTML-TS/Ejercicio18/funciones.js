function ObtenerDatos() {
    var nombre = document.getElementById("nombre").value;
    var calificacion = document.getElementsByName("radioButton");
    var texto = "Su nombre es: " + nombre + ",Y su calificacion fue ";
    for (var i = 0; i < calificacion.length; i++) {
        if (calificacion[i].checked) {
            texto += calificacion[i].value;
        }
    }
    console.log(texto);
}
