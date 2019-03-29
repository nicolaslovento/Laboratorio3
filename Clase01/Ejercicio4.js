/*Realizar una función que reciba un número y que muestre (por consola) un mensaje
como el siguiente:
El número 5 es impar, siendo 5 el número recibido como parámetro. */
var comprobarNumero = function (num) {
    if (num % 2 == 0) {
        console.log("El n\u00FAmero " + num + " es par, siendo " + num + " el n\u00FAmero recibido como par\u00E1metro.");
    }
    else {
        console.log("El n\u00FAmero " + num + " es impar, siendo " + num + " el n\u00FAmero recibido como par\u00E1metro.");
    }
};
comprobarNumero(100);
