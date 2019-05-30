/// <reference path="Perro.ts"/>
/// <reference path="../node_modules/@types/jquery/index.d.ts"/>
namespace PrimerParcial{
    export class Manejadora extends Entidades.Perro{

        public static AgregarPerroJSON(){
            let tamaño=<string>$('#tamaño').val();
            let edad=<number>$('#edad').val();
            let precio=<number>$('#precio').val();
            let nombre=<string>$('#nombre').val();
            let raza=<string>$('#raza').val();
            let foto:any=(<HTMLInputElement>document.getElementById('foto'));
            
            let pathFoto=((foto.value.split("\\"))[2]);

            let perro=new Entidades.Perro(tamaño,edad,precio,nombre,raza,pathFoto);
            alert(perro.ToString());
            let fmData:FormData=new FormData();
            fmData.append('foto',foto.files[0]);
            fmData.append('cadenaJson',JSON.stringify(perro.ToJSON()));
            $.ajax({
                type:'POST',
                url:"./BACKEND/Agregar_Json.php",
                data:fmData,
                dataType:"json",
                contentType:false,
                processData:false,
                success:function(retorno){
                    if(retorno.exito){
                        alert(retorno.mensaje);
                    }else{
                        alert(retorno.mensaje);
                    }
                }

            })


        }

        public static MostrarPerrosJSON(){
            
            $.ajax({
                type:'GET',
                url:"./BACKEND/Traer_Json.php",
                dataType:"text",
                success:function(retorno:any){
                    
                    let arrayPerros:[]=JSON.parse(retorno);
                    if(arrayPerros.length>0){

                        let tabla="<table border=1><tr><th>Nombre</th><th>Raza</th><th>Edad</th><th>Precio</th><th>Foto</th></tr>";
                        for(let perro of arrayPerros){

                            tabla+="<tr><td>"+perro.nombre+"</td><td>"+perro.raza+"</td><td>"+perro.edad+"</td><td>"+perro.precio+"</td><td><img src='./BACKEND/"+perro.pathFoto+"' width=100 height=100></td></tr>";
                        }
                        
                        tabla+="</table>";

                        $('#divTabla').html(tabla);
                    }else{

                        alert("No hay aliens cargados.");
                    }
                }

            })


        }

    }
}