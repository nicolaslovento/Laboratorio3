function MostrarMeses() {
    var opcionElegida = document.getElementsByName("checkbox");
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var flag = 0;
    var opcion = 0;
    for (var i = 0; i < opcionElegida.length; i++) {
        if (opcionElegida[i].checked) {
            opcion = +opcionElegida[i].value;
            flag++;
        }
    }
    if (flag == 1) { //valido que haya elegido solo una opcion
        switch (opcion) {
            case 1:
                var texto = "<br><br><table border='1'><caption>MESES</caption>";
                for (var i = 0; i < meses.length; i++) {
                    texto += "<tr><td>" + meses[i] + "</td><tr>";
                }
                texto += "</td></table>";
                break;
            case 2:
                var texto = "<br><br><table border='1'><caption>NUMERO</caption>";
                for (var i = 1; i <= meses.length; i++) {
                    texto += "<tr><td>" + [i] + "</td><tr>";
                }
                texto += "</td></table>";
                break;
            case 3:
                var texto = "<br><br><table border='1' colspan='2'><caption>MESES Y NUMEROS</caption>"; //corregir
                for (var i = 0; i < meses.length; i++) {
                    texto += "<tr><td>" + meses[i] + "</td>" + "<td>" + [i + 1] + "</td>" + "<tr>";
                }
                texto += "</td></table>";
                break;
        }
        document.getElementById("Mostrar").innerHTML = texto;
    }
    else {
        alert("Seleccione solo una opcion!!");
    }
}
