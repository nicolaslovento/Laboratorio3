/*7. Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log()
****************************************
function mostrarPrimos(){

    var contador:number=0;
    var numero:number=1;
    while(contador<20){

        if(numero%2==0){

            console.log(numero);
            contador++;
        }
        numero++;
    }
}

mostrarPrimos();
**************************************
*/
/*8. Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log()

function calcularFactorial(num:number):number{

    var suma=1;
    var guia=2;
    for (var i = 1; i <= num; i++) {
        
        suma *= i;
        guia++;
    }
    return suma;
}
console.log(calcularFactorial(6));
*/
/*9. Realizar una función que solicite (por medio de un parámetro) un número. Si el número
es positivo, se mostrará el factorial de ese número, caso contrario se mostrará el cubo de
dicho número.
Nota: Reutilizar la función que determina el factorial de un número y la que calcula el
cubo de un número.

function calcularFactorial(num:number):number{

    var suma=1;
    var guia=2;
    for (var i = 1; i <= num; i++) {
        
        suma *= i;
        guia++;
    }
    return suma;
}

function retornarCubo(num:number):number{

    return Math.pow(num,3);
}

function factorialOcubo(num:number){

    if(num>0){
        console.log(calcularFactorial(num));
    }else{
        console.log(retornarCubo(num));
    }
}

factorialOcubo(3);

*/
/*10.Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function comprobarCadena(cadena:string){

    var mayusculas:number=0;
    for(var i=0;i<cadena.length;i++){

        if((cadena.charCodeAt(i)>=65) && ((cadena.charCodeAt(i)<=90))){

            mayusculas++;
        }
    }

    if(mayusculas==cadena.length){
        console.log(`La palabra está escrita en mayuscula: ${cadena}`);
    }else{
        
        if(mayusculas==0){
            console.log(`La palabra está escrita en minúscula: ${cadena}`);


        }else{
                console.log(`La palabra está escrita con una mezcla de mayúsculas y minúsculas: ${cadena}`);
        }

    }
}

comprobarCadena("NICOLAS");

*/
/*11.Definir una función que determine si la cadena de texto que se le pasa como parámetro
es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

function EsPalindromo(palabra:string):boolean{

    var aux:string=palabra.trim();
    aux=aux.replace(/ /g, "");
    aux=aux.toLowerCase();
    var j:number=aux.length-1;

    for(var i:number=0;i<aux.length;i++){

        
        if(aux.charAt(i)!=aux.charAt(j)){

            return false;
        }
        j--;

    }

    return true;
}

    console.log(EsPalindromo("La ruta nos aporto otro paso natural"));

*/
/*12.Crear una función que reciba como único parámetro una cadena que contenga el día, mes
y año de nacimiento de una persona (con formato dd-mm-yyyy). La función mostrará por
consola a que signo corresponde dicha fecha de nacimiento.
Nota: Para descomponer la fecha recibida como parámetro utilice la función split.

function signo(fecha:string):string[]{

    let aux:string[]=fecha.split("-");
    
    switch(aux[1]){
        case "01":
            if(aux[0]<="20"){
                console.log("Capricornio");

            }else{
                console.log("Acuario");
            }break;

        case "02":
            if(aux[0]<="19"){
                console.log("Acuario");

            }else{
                console.log("Piscis");
            }break;

        case "03":
            if(aux[0]<="20"){
                console.log("Piscis");

            }else{
                console.log("Aries");
            }break;

        case "04":
            if(aux[0]<="20"){
                console.log("Aries");

            }else{
                console.log("Tauro");
            }break;

        case "05":
            if(aux[0]<="20"){
                console.log("Tauro");

            }else{
                console.log("Géminis");
            }break;

        case "06":
            if(aux[0]<="20"){
                console.log("Géminis");

            }else{
                console.log("Cáncer");
            }break;

        case "07":
            if(aux[0]<="20"){
                console.log("Cáncer");

            }else{
                console.log("Leo");
            }break;

        case "08":
            if(aux[0]<="21"){
                console.log("Leo");

            }else{
                console.log("Virgo");
            }break;

        case "09":
            if(aux[0]<="20"){
                console.log("Virgo");

            }else{
                console.log("Libra");
            }break;

        case "10":
            if(aux[0]<="20"){
                console.log("Libra");

            }else{
                console.log("Escorpión");
            }break;

        case "11":
            if(aux[0]<="21"){
                console.log("Escorpión");

            }else{
                console.log("Sagitario");
            }break;

        case "12":
            if(aux[0]<="21"){
                console.log("Sagitario");

            }else{
                console.log("Capricornio");
            }break;
        
    }

    return aux;
}

console.log(signo("23-02-1994"));

*/
/*13.Un número de Smith es un número entero tal que la suma de sus dígitos es igual a la
suma de los dígitos de los números restantes tras la factorización en primos (la
factorización debe estar escrita sin exponentes, repitiendo los números todas las veces
necesarias). Por ejemplo, 378 = 2 × 3 × 3 × 3 × 7 es un número de Smith en base 10,
porque 3 + 7 + 8 = 2 + 3 + 3 + 3 + 7. Por definición, se deben contar los dígitos de los
factores. Por ejemplo, 22 en base 10 es 2 × 11, y se deben contar los tres dígitos: 2, 1,
1. Por lo tanto 22 es un número de Smith porque 2 + 2 = 2 + 1 + 1
Nota: Utilice tres funciones, una realiza la comparación, otra descompone el numero en
sus factores primos y suma los coeficientes, y la última función suma cada termino.*/ 
