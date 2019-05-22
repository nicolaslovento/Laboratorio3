/*2. Cree una aplicación que muestre, a través de un Array, los nombres de los meses de un
año y el número al que ese mes corresponde. Utilizar una estructura repetitiva para
escribir en la consola (console.log()).
*/

var meses:string[]=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

for(var i=0;i<12;i++){
    console.log(`${meses[i]}  ${i+1}`)
}