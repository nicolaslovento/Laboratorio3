/*Aplicación Nº 1 (Mostrar números impares)
Confeccionar un programa que solicite el ingreso de un número positivo (validar) y que
muestre en un <input type=”text”> la cantidad de números impares que hay entre ese número
y el cero. Realizarlo utilizando el objeto XMLHttpRequest.*/

namespace Numero{

    export function MostrarImpares(){

        let numero=(<HTMLInputElement>document.getElementById("numero")).value;

        let peticion: XMLHttpRequest= new XMLHttpRequest();
        
        peticion.open("GET","admin.php?numero="+numero,true);
        
        peticion.send();
        peticion.onreadystatechange =()=> {

            if(peticion.status==200 && peticion.readyState==4){

                (<HTMLInputElement>document.getElementById("texto")).value=peticion.responseText;
            }


    }
}