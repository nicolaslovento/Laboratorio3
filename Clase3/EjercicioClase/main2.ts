/// <reference path="./empleado.ts"/>

function ObtenerDatos(){
    
    let nombre:string=(<HTMLInputElement> document.getElementById("nombre")).value;
    let apellido:string=(<HTMLInputElement> document.getElementById("apellido")).value;
    let dni:number=+(<HTMLInputElement> document.getElementById("dni")).value;
    let legajo:number=+(<HTMLInputElement> document.getElementById("legajo")).value;
    let sueldo:number=+(<HTMLInputElement> document.getElementById("sueldo")).value;
    let sexo:string=(<HTMLInputElement> document.getElementById("rdoSexo")).value;
    
    
    let obj:Personas.Empleado=new Personas.Empleado(nombre,apellido,dni,sexo,legajo,sueldo);
    
    let frm =<HTMLFormElement>document.getElementById("FrmEmpleados");
    frm.submit();
}

