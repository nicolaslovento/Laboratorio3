var Manejador;
(function (Manejador) {
    function Agregar() {
        var nombre = document.getElementById("nombre").value;
        var legajo = +document.getElementById("legajo").value;
        var foto = document.getElementById("foto");
        var fmData = new FormData();
        fmData.append('op', 'agregar');
        fmData.append('foto', foto.files[0]);
        fmData.append('nombre', nombre);
        fmData.append('legajo', legajo.toString());
        var xmr = new XMLHttpRequest();
        xmr.open("POST", "admin.php", true);
        xmr.setRequestHeader("enc-type", "multipart/form-data");
        xmr.send(fmData);
        xmr.onreadystatechange = function () {
            if (xmr.status == 200 && xmr.readyState == 4) {
                var objEmp = JSON.parse(xmr.responseText);
                document.getElementById("imgEmp").src = objEmp.fotoDestino;
                document.getElementById("imgEmp").style.display = "inline";
                alert("Se cargo el empleado " + objEmp.nombre + " Legajo: " + objEmp.legajo);
                MostrarTabla();
            }
        };
    }
    Manejador.Agregar = Agregar;
    function Modificar() {
        var nombre = document.getElementById("nombre").value;
        var legajo = +document.getElementById("legajo").value;
        var foto = document.getElementById("foto");
        var fmData = new FormData();
        fmData.append('op', 'modificar');
        fmData.append('foto', foto.files[0]);
        fmData.append('nombre', nombre);
        fmData.append('legajo', legajo.toString());
        var xmr = new XMLHttpRequest();
        xmr.open("POST", "admin.php", true);
        xmr.setRequestHeader("enc-type", "multipart/form-data");
        xmr.send(fmData);
        xmr.onreadystatechange = function () {
            if (xmr.status == 200 && xmr.readyState == 4) {
                var objEmp = JSON.parse(xmr.responseText);
                document.getElementById("imgEmp").src = objEmp.fotoDestino;
                document.getElementById("imgEmp").style.display = "inline";
                //alert("Se modificó el empleado "+objEmp.nombre+" Legajo: "+objEmp.legajo);
                MostrarTabla();
            }
        };
    }
    Manejador.Modificar = Modificar;
    function MostrarModificar(obj) {
        document.getElementById("nombre").value = obj.nombre;
        document.getElementById("legajo").value = obj.legajo;
        document.getElementById("legajo").disabled = true;
        document.getElementById("imgEmp").src = obj.fotoDestino;
        document.getElementById("imgEmp").style.display = "inline";
        document.getElementById("modificar").disabled = false;
        document.getElementById("cargar").disabled = true;
    }
    Manejador.MostrarModificar = MostrarModificar;
    window.onload = function () {
        MostrarTabla();
    };
    function MostrarTabla() {
        var xmr = new XMLHttpRequest();
        xmr.open("POST", "admin.php", true);
        xmr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xmr.send('op=mostrarTabla');
        xmr.onreadystatechange = function () {
            if (xmr.status == 200 && xmr.readyState == 4) {
                document.getElementById("div_mostrarTabla").innerHTML = xmr.responseText;
            }
        };
    }
    function Eliminar(obj) {
        if (!confirm("Desea eliminar a " + obj.nombre + "?")) {
            return;
        }
        var xmr = new XMLHttpRequest();
        xmr.open("POST", "admin.php", true);
        xmr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xmr.send('op=eliminar&obj=' + JSON.stringify(obj));
        xmr.onreadystatechange = function () {
            if (xmr.status == 200 && xmr.readyState == 4) {
                MostrarTabla();
            }
        };
    }
    Manejador.Eliminar = Eliminar;
})(Manejador || (Manejador = {}));
