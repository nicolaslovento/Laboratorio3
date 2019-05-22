namespace Ajax{

    export function Saludar(){

        let peticion: XMLHttpRequest=new XMLHttpRequest();
        peticion.open("GET","administrar.php",true);
       // peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
        peticion.send();

        peticion.onreadystatechange= ()=>{
            if(peticion.readyState==4 && peticion.status==200){
                alert(peticion.responseText);
                alert("Hola Mundo Ajax");
                console.log("Hola Mundo Ajax");
                (<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML="Hola Mundo Ajax";

            }
        }

    }

    export function Ingresar(){

        let nombre=(<HTMLInputElement>document.getElementById("nombre")).value;
        let peticion: XMLHttpRequest=new XMLHttpRequest();
        peticion.open("POST","administrar.php",true);
        peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
        peticion.send("accion=2&"+"nombre="+nombre);

        peticion.onreadystatechange= ()=>{
            if(peticion.readyState==4 && peticion.status==200){
                
                if(peticion.responseText=="1"){
                    Mostrar();
                }else{
                    alert("no pudo mostrar");
                }
                //console.log(peticion.responseText);
                //(<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML=peticion.responseText;
                
            }
        }

    }

    function Verificar(){

        //no me va a permitir que me ingrese el mismo nombre: mensaje (ya esta repetido)


    }

    function Mostrar(){

        let nombre=(<HTMLInputElement>document.getElementById("nombre")).value;
        let peticion: XMLHttpRequest=new XMLHttpRequest();
        peticion.open("POST","administrar.php",true);
        peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
        peticion.send("accion=3&"+"nombre="+nombre);

        peticion.onreadystatechange= ()=>{
            if(peticion.readyState==4 && peticion.status==200){
                

                //console.log(peticion.responseText);
                (<HTMLDivElement>document.getElementById("div_mostrar")).innerHTML=peticion.responseText;
                
            }
        }

    }

}