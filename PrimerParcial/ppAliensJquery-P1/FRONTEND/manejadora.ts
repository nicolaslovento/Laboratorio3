/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="alien.ts" />



namespace RecuperatorioPrimerParcial{

    export class Manejadora{

        public static AgregarAlien(){

            let cuadrante=<string>$('#cuadrante').val();
            var edad=<number>$('#edad').val();
            let altura=<number>$('#altura').val();
            let raza=<string>$('#raza').val();
            let cboPlaneta=<string>$('#cboPlaneta').val();
            let foto:any=<HTMLInputElement>document.getElementById("foto");
            let fotoName:string=(<HTMLInputElement>document.getElementById("foto")).value;
            fotoName=fotoName.split("\\")[2];
            
            let alien=new Entidades.Alien(cuadrante,edad,altura,raza,cboPlaneta,fotoName);
            
            let fmData=new FormData();
            fmData.append("foto",foto.files[0]);
            fmData.append("cadenaJson",JSON.stringify(alien.ToJson()));
            $.ajax({

                type:'POST',
                url:'./BACKEND/administrar.php',
                data: fmData,
                dataType:"json",
                contentType:false,
                processData:false,
                success:function(retorno:any){

                    $('#imgFoto').attr("src","./BACKEND/"+retorno.pathFoto);
                    alert(retorno.mensaje);
                }
            })
        }

        public static MostrarAliens(){

            $.ajax({

                type:'GET',
                url:'./BACKEND/mostrarAliens.php',
                dataType:"text",
                //contentType:false,
                //processData:false,
                success:function(retorno:any){

                    let arrayAliens:[]=JSON.parse(retorno);
                    if(arrayAliens.length>0){

                        let tabla="<table border=1><tr><th>Cuadrante</th><th>Edad</th><th>Planeta Origen</th><th>Foto</th></tr>";
                        for(let alien of arrayAliens){

                            tabla+="<tr><td>"+alien.cuadrante+"</td><td>"+alien.edad+"</td><td>"+alien.planetaOrigen+"</td><td><img src='./BACKEND/fotos/"+alien.pathFoto+"' width=100 height=100></td></tr>";
                        }
                        
                        tabla+="</table>";

                        $('#divTabla').html(tabla);
                    }else{

                        alert("No hay aliens cargados.");
                    }
                    //alert(arrayAliens.length);
                }
            })
        }

        public static GuardarEnLocalStorage(){

            $.ajax({

                type:'GET',
                url:'./BACKEND/mostrarAliens.php',
                dataType:"text",
                //contentType:false,
                //processData:false,
                success:function(retorno:any){
                    
                    if(retorno!="[]"){

                        localStorage.setItem("aliens_local_storage",retorno);
                        alert(localStorage.getItem("aliens_local_storage"));

                    }else{
                        alert("No hay Aliens-json para guardar");
                    }
                    

                    //alert(arrayAliens.length);
                }
            })
        }

        public static VerificarExistencia(){
            let cuadrante=<string>$('#cuadrante').val();
            let raza=<string>$('#raza').val();

            let aliensStorage:any=localStorage.getItem("aliens_local_storage");
            let arrayAliens:[]=JSON.parse(aliensStorage);
            
            for(let alien of arrayAliens){

                if(alien.cuadrante==cuadrante && alien.raza==raza){
                    console.log("El alien ya existe.");
                    alert("El alien ya existe.");
                    return;
                }
            }

            Manejadora.AgregarAlien();
            Manejadora.GuardarEnLocalStorage();
        
        }

        
        
        public static ObtenerAliensPorCuadrante(){
            
            let aliensStorage:any=localStorage.getItem("aliens_local_storage");
            let arrayAliens:[]=JSON.parse(aliensStorage);
            let auxContador : Array<number> = new Array<number>();
            for(let alien of arrayAliens) {
                if(auxContador[alien.planetaOrigen] === undefined) {
                    auxContador[alien.planetaOrigen]=0;
                }
                auxContador[alien.planetaOrigen]++;
            }
            
            //console.log(auxContador);

            let auxMax : any = undefined;
            let auxMin : any = undefined;

            for (let planeta in auxContador) {
                if(auxMax === undefined && auxMin === undefined) {
                    auxMax = auxContador[planeta];
                    auxMin = auxContador[planeta];
                }

                let cantAliens= auxContador[planeta];
                //console.log(planeta, cantAliens);

                if(auxMax < cantAliens) {
                    auxMax = cantAliens;
                    console.log("Cambio el maximo");
                }
                if(auxMin>cantAliens) {
                    auxMin = cantAliens;
                    console.log("Cambio el minimo");
                }
            }

            let planetasMax = new Array<string>();
            let planetasMin = new Array<string>();

            for (let planeta in auxContador) {
                if(auxContador[planeta] == auxMax) {
                    planetasMax.push(planeta);
                }
                else if (auxContador[planeta] == auxMin) {
                    planetasMin.push(planeta);
                }
            }
            //console.log(planetasMax +"\nCambio a min\n"+ planetasMin);

            let mensaje : string = "El/Los planetas con mas aliens son ";
            if(planetasMax.length > 0) {
                for(let planeta of planetasMax) {
                    mensaje+="\n-"+planeta;
                }
                mensaje+="\nCon "+auxMax;
                console.log(mensaje);
            }

            if(planetasMin.length > 0) {
                mensaje= "El/Los planetas con menos aliens son ";
                for(let planeta of planetasMin) {
                    mensaje+="\n-"+planeta;
                }
                mensaje+="\nCon "+auxMin;
                console.log(mensaje);
            }
        } 


            

            
        
        }




    }
}