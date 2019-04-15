var Ajax;
(function (Ajax) {
    function Saludar() {
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "administrar.php", true);
        // peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
        peticion.send();
        peticion.onreadystatechange = function () {
            if (peticion.readyState == 4 && peticion.status == 200) {
                alert(peticion.responseText);
                alert("Hola Mundo Ajax");
                console.log("Hola Mundo Ajax");
                document.getElementById("div_mostrar").innerHTML = "Hola Mundo Ajax";
            }
        };
    }
    Ajax.Saludar = Saludar;
    function Ingresar() {
        var nombre = document.getElementById("nombre").value;
        var peticion = new XMLHttpRequest();
        peticion.open("POST", "administrar.php", true);
        peticion.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        peticion.send("accion=2&" + "nombre=" + nombre);
        peticion.onreadystatechange = function () {
            if (peticion.readyState == 4 && peticion.status == 200) {
                if (peticion.responseText == "1") {
                    Mostrar();
                }
                else {
                    alert("no pudo mostrar");
                }
                //console.log(peticion.responseText);
                //(<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML=peticion.responseText;
            }
        };
    }
    Ajax.Ingresar = Ingresar;
    function Verificar() {
        //no me va a permitir que me ingrese el mismo nombre: mensaje (ya esta repetido)
    }
    function Mostrar() {
        var nombre = document.getElementById("nombre").value;
        var peticion = new XMLHttpRequest();
        peticion.open("POST", "administrar.php", true);
        peticion.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        peticion.send("accion=3&" + "nombre=" + nombre);
        peticion.onreadystatechange = function () {
            if (peticion.readyState == 4 && peticion.status == 200) {
                //console.log(peticion.responseText);
                document.getElementById("div_mostrar").innerHTML = peticion.responseText;
            }
        };
    }
})(Ajax || (Ajax = {}));
