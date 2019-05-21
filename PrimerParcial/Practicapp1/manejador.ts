namespace Manejador{

export function Agregar(){

    let nombre: string =(<HTMLInputElement>document.getElementById("nombre")).value;
    let legajo: number =+(<HTMLInputElement>document.getElementById("legajo")).value;
    let foto:any=(<HTMLInputElement>document.getElementById("foto"));

    let fmData: FormData=new FormData();
    fmData.append('op','agregar');
    fmData.append('foto',foto.files[0]);
    fmData.append('nombre',nombre);
    fmData.append('legajo',legajo.toString());

    let xmr:XMLHttpRequest=new XMLHttpRequest();
    xmr.open("POST","admin.php",true);
    xmr.setRequestHeader("enc-type","multipart/form-data");
    xmr.send(fmData);

    xmr.onreadystatechange=()=>{

        if(xmr.status==200 && xmr.readyState==4){
            let objEmp=JSON.parse(xmr.responseText);

            (<HTMLImageElement>document.getElementById("imgEmp")).src=objEmp.fotoDestino;
            (<HTMLImageElement>document.getElementById("imgEmp")).style.display="inline";
            alert("Se cargo el empleado "+objEmp.nombre+" Legajo: "+objEmp.legajo);
            MostrarTabla();
        }
    }


}

export function Modificar(){

    let nombre: string =(<HTMLInputElement>document.getElementById("nombre")).value;
    let legajo: number =+(<HTMLInputElement>document.getElementById("legajo")).value;
    let foto:any=(<HTMLInputElement>document.getElementById("foto"));
    
    let fmData: FormData=new FormData();
    fmData.append('op','modificar');
    fmData.append('foto',foto.files[0]);
    fmData.append('nombre',nombre);
    fmData.append('legajo',legajo.toString());

    let xmr:XMLHttpRequest=new XMLHttpRequest();
    xmr.open("POST","admin.php",true);
    xmr.setRequestHeader("enc-type","multipart/form-data");
    xmr.send(fmData);

    xmr.onreadystatechange=()=>{

        if(xmr.status==200 && xmr.readyState==4){
            let objEmp=JSON.parse(xmr.responseText);

            (<HTMLImageElement>document.getElementById("imgEmp")).src=objEmp.fotoDestino;
            (<HTMLImageElement>document.getElementById("imgEmp")).style.display="inline";
            //alert("Se modificó el empleado "+objEmp.nombre+" Legajo: "+objEmp.legajo);
            MostrarTabla();
        }
    }


}

export function MostrarModificar(obj:any){

    (<HTMLInputElement>document.getElementById("nombre")).value=obj.nombre;
    (<HTMLInputElement>document.getElementById("legajo")).value=obj.legajo;
    
    (<HTMLInputElement>document.getElementById("legajo")).disabled=true;
    (<HTMLImageElement>document.getElementById("imgEmp")).src=obj.fotoDestino;
    (<HTMLImageElement>document.getElementById("imgEmp")).style.display="inline";
    (<HTMLButtonElement>document.getElementById("modificar")).disabled=false;
    (<HTMLButtonElement>document.getElementById("cargar")).disabled=true;
 
}

window.onload=()=>{
    MostrarTabla();
}

function MostrarTabla(){

    let xmr:XMLHttpRequest=new XMLHttpRequest();
    xmr.open("POST","admin.php",true);
    xmr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmr.send('op=mostrarTabla');

    xmr.onreadystatechange=()=>{

        if(xmr.status==200 && xmr.readyState==4){
            

            (<HTMLDivElement>document.getElementById("div_mostrarTabla")).innerHTML=xmr.responseText;
            
        }
    }
}

export function Eliminar(obj:any){

    if(!confirm("Desea eliminar a "+obj.nombre+"?")){
        return;
    }
    let xmr:XMLHttpRequest=new XMLHttpRequest();
    xmr.open("POST","admin.php",true);
    xmr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmr.send('op=eliminar&obj='+JSON.stringify(obj));

    xmr.onreadystatechange=()=>{

        if(xmr.status==200 && xmr.readyState==4){
            

           MostrarTabla();
            
        }
    }
}




}