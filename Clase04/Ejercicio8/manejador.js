var Noticias;
(function (Noticias) {
    var contador = 0;
    function TraerNoticia() {
        var sigue = true;
        //while(sigue){
        //setTimeout(Mostrar(),5000);
        //(<HTMLDivElement>document.getElementById("noticias")).innerHTML="hola";
        setInterval(Mostrar, 5000);
        //}
    }
    Noticias.TraerNoticia = TraerNoticia;
    function Mostrar() {
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "admin.php?contador=" + contador, true);
        peticion.send();
        peticion.onreadystatechange = function () {
            if (peticion.status == 200 && peticion.readyState == 4) {
                document.getElementById("noticias").innerHTML = peticion.responseText;
                if (contador == 4) {
                    contador = -1;
                }
                contador++;
            }
        };
        return "";
    }
    function alertuno() {
        return alert("hola");
    }
})(Noticias || (Noticias = {}));
