var Archivo;
(function (Archivo) {
    function Mostrar() {
        var path = document.getElementById("path").value;
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "admin.php?path=" + path, true);
        peticion.send();
        peticion.onreadystatechange = function () {
            if (peticion.status == 200 && peticion.readyState == 4) {
                var retorno = peticion.responseText.trim();
                if (retorno.localeCompare("0") == 0) {
                    alert("El archivo no existe.");
                }
                else {
                    document.getElementById("div_mostrarArchivo").innerHTML = retorno;
                }
            }
        };
    }
    Archivo.Mostrar = Mostrar;
})(Archivo || (Archivo = {}));
