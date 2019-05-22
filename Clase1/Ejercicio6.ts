/*. Realizar una función que reciba como parámetro un número y que retorne el cubo del
mismo.
Nota: La función retornará el cubo del parámetro ingresado. Realizar una función que
invoque a esta última y permita mostrar por consola el resultado*/

function retornarCubo(num:number):number{

    return Math.pow(num,3);
}

function funcionQueLlama(num:number):number{

    return retornarCubo(num);
}

console.log(funcionQueLlama(3));