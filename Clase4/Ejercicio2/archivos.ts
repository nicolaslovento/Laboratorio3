namespace Archivo{

    export function Mostrar(){

        let path=(<HTMLInputElement>document.getElementById("path")).value;
        let peticion:XMLHttpRequest=new XMLHttpRequest();

        peticion.open("GET","admin.php?path="+path,true);
        peticion.send();

        peticion.onreadystatechange=()=>{

            if(peticion.status==200 && peticion.readyState==4){
                
                let retorno=peticion.responseText.trim();
                if(retorno.localeCompare("0")==0){
                    
                    alert("El archivo no existe.");
                
                }else{
                    (<HTMLDivElement>document.getElementById("div_mostrarArchivo")).innerHTML=retorno;
                }

                }


            }
        }


    }


