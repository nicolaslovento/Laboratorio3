/*Aplicación Nº 3 (Determinar si una palabra existe)
A partir del ejercicio anterior, agregarle un <input type=”text”> que le permita al usuario
ingresar un palabra. Por medio del el objeto XMLHttpRequest, buscar el archivo, y al
encontrarlo, buscar dentro del archivo si existe la palabra que ingreso el usuario dentro del
mismo.
Indicar, por medio de mensajes:
 Si el archivo existe o no.
 Si la palabra existe o no.*/
namespace Archivo{

    export function BuscarPath(){

        let path=(<HTMLInputElement>document.getElementById("path")).value;
        let peticion:XMLHttpRequest=new XMLHttpRequest();

        peticion.open("GET","admin.php?path="+path+"&accion=1",true);
        peticion.send();

        peticion.onreadystatechange=()=>{

            if(peticion.status==200 && peticion.readyState==4){
                
                let retorno=peticion.responseText.trim();
                if(retorno.localeCompare("0")==0){
                    
                    alert("El archivo no existe.");
                    //oculto el div_Palabra y div_mostrarArchivo
                    (<HTMLDivElement>document.getElementById("div_Palabra")).style.display='none';
                    (<HTMLDivElement>document.getElementById("div_mostrarArchivo")).innerHTML="";
            
                }else{
                    (<HTMLDivElement>document.getElementById("div_mostrarArchivo")).innerHTML=retorno;
                    (<HTMLDivElement>document.getElementById("div_Palabra")).style.display='block';
                }

                }


            }
        }

        export function BuscarPalabra(){

            let path=(<HTMLInputElement>document.getElementById("path")).value;
            let palabra=(<HTMLInputElement>document.getElementById("palabra")).value;
            let peticion:XMLHttpRequest=new XMLHttpRequest();
    
            peticion.open("GET","admin.php?palabra="+palabra+"&accion=2&path="+path,true);
            peticion.send();
    
            peticion.onreadystatechange=()=>{
    
                if(peticion.status==200 && peticion.readyState==4){
                    
                    let retorno=peticion.responseText.trim();
                    if(retorno=="0"){
                        
                        alert("La palabra no existe.");
                        //oculto el div_Palabra y div_mostrarArchivo
                        //(<HTMLDivElement>document.getElementById("div_Palabra")).style.display='none';
                        //(<HTMLDivElement>document.getElementById("div_mostrarArchivo")).innerHTML="";
                
                    }else{
                        let texto="La palabra "+palabra+" está en el texto.";
                        (<HTMLDivElement>document.getElementById("div_Palabra")).style.display='block';
                        (<HTMLDivElement>document.getElementById("div_mostrarPalabra")).innerHTML=texto;
                        
                    }
    
                    }
    
    
                }
            }


    }