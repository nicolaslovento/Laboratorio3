/// <reference path="Perro.ts"/>
/// <reference path="../node_modules/@types/jquery/index.d.ts"/>
namespace PrimerParcial{
    export class Manejadora extends Entidades.Perro{
/*AgregarPerroJSON. Tomará los distintos valores desde la página index.html (incluida la foto), creará un objeto de tipo Perro, que se
enviará (por AJAX) hacia “./BACKEND/agregar_json.php”. En esta página se guardará al perro en el archivo “./BACKEND/perro.json”
y la foto en “./BACKEND/fotos”. La foto nombrarla con el nombre más fecha, hora, minutos y segundos (boby.20181209_031000.jpg)*/
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
/*MostrarPerrosJSON. Recuperará (por AJAX), desde “./BACKEND/traer_json.php”, todos los perros del archivo .json y generará un
listado dinámico (en el FRONTEND) que mostrará toda la información de cada uno de los perros (incluida la foto). */
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


        /*AgregarPerroEnBaseDatos. Tomará los distintos valores desde la página index.html (incluida la foto), creará un objeto de tipo Perro,
que se enviará (por AJAX) hacia “./BACKEND/agregar_bd.php”. En esta página se guardará al perro en la tabla perros de la base
mascotas_bd y la foto en “./BACKEND/fotos”*/
        public static AgregarPerroEnBaseDatos(){
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
                url:"./BACKEND/Agregar_Bd.php",
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

/*VerificarExistencia. Verifica que el perro que se quiere agregar (en la base de datos) no exista. Para ello, comparará las edades y la
raza de los perros guardados. Si el perro existe, se mostrará (por consola y alert) lo acontecido. Caso contrario, agregará el nuevo perro.*/ 
        public static VerificarExistencia(){
            
            let edad=<number>$('#edad').val();
            let raza=<string>$('#raza').val();

            $.ajax({
                type:'POST',
                url:"./BACKEND/Verificar_Existencia.php",
                data:{"edad":edad,"raza":raza},
                dataType:"json",
                //contentType:false,
                //processData:false,
                success:function(retorno){
                    if(retorno.exito){
                        alert(retorno.mensaje);
                    }else{
                        Manejadora.AgregarPerroEnBaseDatos();
                    }
                }

            })


        }

/*MostrarPerrosBaseDatos. Recuperá (por AJAX) de la base de datos todos los perros y generará un listado dinámico (en el FRONTEND)
que mostrará toda la información de cada uno de los perros (incluida la foto). La foto nombrarla como en el método AgregarPerroJSON*/
public static MostrarPerrosBaseDatos(){
            
    $.ajax({
        type:'GET',
        url:"./BACKEND/Mostrar_BD.php",
        dataType:"text",
        //contentType:false,
        //processData:false,
        success:function(retorno){
            
            let arrayPerros:any=JSON.parse(retorno);
            let tabla="<table border=1><tr><th>TAMAÑO</th><th>EDAD</th><th>PRECIO</th><th>NOMBRE</th><th>RAZA</th><th>FOTO</th></tr>";
            for(let i=0;i<arrayPerros.length;i++){

                tabla+="<tr><td>"+arrayPerros[i].tamanio+"</td><td>"+arrayPerros[i].edad+"</td><td>"+arrayPerros[i].precio+"</td><td>"+arrayPerros[i].nombre+"</td><td>"+arrayPerros[i].raza+"</td><td><img src='./BACKEND/"+arrayPerros[i].foto+"' width=100 height:100></td></tr>";
            }

            $('#divTabla').html(tabla);

        }

    })


}



    }
}