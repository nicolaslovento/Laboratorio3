/*Realizar una función que reciba un número y que muestre (por consola) un mensaje
como el siguiente:
El número 5 es impar, siendo 5 el número recibido como parámetro. */

var comprobarNumero : Function=function(num:number){
    
    if(num%2==0){
        console.log(`El número ${num} es par, siendo ${num} el número recibido como parámetro.`);
    }else{
        console.log(`El número ${num} es impar, siendo ${num} el número recibido como parámetro.`);
    }
}

comprobarNumero(100);

