function ObtenerDatos(){

    let nombre:string=(<HTMLInputElement>document.getElementById("nombre")).value;

    let calificacion=document.getElementsByName("radioButton");
    let texto:string="Su nombre es: "+nombre+",Y su calificacion fue ";
    for(let i=0;i<calificacion.length;i++){

        if((<HTMLInputElement>calificacion[i]).checked){
            texto+=(<HTMLInputElement>calificacion[i]).value;
        }
    }

    console.log(texto);

}