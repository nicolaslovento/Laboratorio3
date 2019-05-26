/// <reference path="node_modules/@types/jquery/index.d.ts" />


    function Enviar(){
       let legajo=$("#legajo").val();
       let clave=$("#clave").val();
       

       $.ajax({
            type:'POST',
            url:"BACKEND/login",
            data:{"legajo":legajo,"clave":clave},
            dataType:"json",
            success:function(retorno:any){
                //let retornoObj=JSON.parse(retorno);
                if(retorno.exito){
                    window.location.replace("./ingreso.html");
                }else{
                    alert("No se encontro el usuario");
                }
            }

        });
    }
