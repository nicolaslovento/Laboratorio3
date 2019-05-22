function ObtenerDatos() {
    var auxUno = document.getElementById("num1").value;
    var auxDos = document.getElementById("num2").value;
    var numeroUno = parseInt(auxUno);
    var numeroDos = parseInt(auxDos); //parseo a int
    var arrayDeRadios = document.getElementsByName("radioButton"); //array de radios
    var operador = 0;
    for (var i = 0; i < arrayDeRadios.length; i++) {
        if (arrayDeRadios[i].checked) {
            operador = +arrayDeRadios[i].value; //con el + casteo a int
            Calcular(numeroUno, numeroDos, operador);
            break;
        }
    }
}
function Calcular(num1, num2, operador) {
    switch (operador) {
        case 1:
            alert(num1 + num2);
            break;
        case 2:
            alert(num1 - num2);
            break;
        case 3:
            alert(num1 * num2);
            break;
        case 4:
            alert(num1 / num2);
            break;
    }
}
