function ObtenerPeliculas() {
    var form = document.getElementsByName("check");
    var texto = "Peliculas seleccionadas: ";
    for (var i = 0; i < form.length; i++) {
        if (form[i].checked) {
            texto += form[i].value + " ";
        }
    }
    console.log(texto);
}
