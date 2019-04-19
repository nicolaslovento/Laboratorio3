namespace Noticias{

    var contador=0;

    export function TraerNoticia(){

        let sigue=true;
        //while(sigue){
            
            //setTimeout(Mostrar(),5000);
            //(<HTMLDivElement>document.getElementById("noticias")).innerHTML="hola";
            setInterval(Mostrar,5000);

        //}
        
        
        
    }

    function Mostrar(){

        let peticion=new XMLHttpRequest();
        
        peticion.open("GET","admin.php?contador="+contador,true);
        peticion.send();

        peticion.onreadystatechange=()=>{

            if(peticion.status==200 && peticion.readyState==4){

                (<HTMLDivElement>document.getElementById("noticias")).innerHTML=peticion.responseText;
                if(contador==4){
                    contador=-1;
                    
                }
                contador++;
            }
        }
        return "";
    }

    
    function alertuno(){
        return alert("hola");
    }
        
       
    

}