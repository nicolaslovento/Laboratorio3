/*Aplicación Nº 1 (Mostrar números impares)
Confeccionar un programa que solicite el ingreso de un número positivo (validar) y que
muestre en un <input type=”text”> la cantidad de números impares que hay entre ese número
y el cero. Realizarlo utilizando el objeto XMLHttpRequest.*/
var Numero;
(function (Numero) {
    function MostrarImpares() {
        var numero = document.getElementById("numero").value;
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "admin.php?numero=" + numero, true);
        peticion.send();
        peticion.onreadystatechange = function () {
            if (peticion.status == 200 && peticion.readyState == 4) {
                document.getElementById("texto").value = peticion.responseText;
            }
        };
    }
    Numero.MostrarImpares = MostrarImpares;
})(Numero || (Numero = {}));
