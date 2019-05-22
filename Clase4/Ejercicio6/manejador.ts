/*Aplicación Nº 7(Sugerir nombres de usuario)
Normalmente, cuando se valida la disponibilidad de un nombre de usuario, se muestra una lista
de valores alternativos en el caso de que el nombre elegido no esté disponible. Modificar el
ejercicio anterior para que permita mostrar una serie de valores alternativos devueltos por el
servidor.
Si el nombre de usuario está ocupado, los nombres de usuario alternativos se deben mostrar
en forma de lista de elementos (<ul></ul>). Para ello generar un archivo de texto con varios
nombres.
Modificar la lista anterior para que muestre enlaces (<a>) para cada uno de los nombres
alternativos. Al pinchar sobre el enlace de un nombre alternativo, se copia en el cuadro de
texto del login del usuario.
*/


namespace Usuario{

    export function Comprobar(){

        let usuario=(<HTMLInputElement>document.getElementById("usuario")).value;
        EsperandoRespuesta(true);
        let peticion=new XMLHttpRequest();
        peticion.open("GET","comprobarDisponibilidad.php?nombre="+usuario,true);
        peticion.send();

        peticion.onreadystatechange=()=>{

            if(peticion.status==200 && peticion.readyState==4){

                if(peticion.responseText=="SI"){

                    alert("El nombre está disponible.");
                    EsperandoRespuesta(false);

                }else{
                    
                    (<HTMLSpanElement>document.getElementById("nombres")).innerHTML=peticion.responseText;
                    //alert(peticion.responseText);
                    //alert("El nombre NO está disponible.");
                    EsperandoRespuesta(false);

                }
            }
        }

    }

    export function SetNombre(){

       //let elemento=(<HTMLUListElement>document.getElementById("lista"));
       //alert(elemento.);
       let elemento=(<HTMLLIElement>document.getElementById("lista")).value;
        alert(elemento);

    }

    

    function EsperandoRespuesta(mostrar:boolean){

        if(mostrar){
            (<HTMLImageElement>document.getElementById("img")).style.display='block';
            (<HTMLImageElement>document.getElementById("img")).src="tenor.gif";
            (<HTMLImageElement>document.getElementById("img")).style.width="600px";
            (<HTMLImageElement>document.getElementById("img")).style.height="350px";
        }else{
            (<HTMLImageElement>document.getElementById("img")).style.display='none';
        }
        
    }










}