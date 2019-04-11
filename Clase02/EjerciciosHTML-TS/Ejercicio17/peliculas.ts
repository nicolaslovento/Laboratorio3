function ObtenerPeliculas(){

    let form=document.getElementsByName("check");
    let texto:string="Peliculas seleccionadas: ";
    for(let i=0;i<form.length;i++){

        if((<HTMLInputElement>form[i]).checked){
            texto+=(<HTMLInputElement>form[i]).value+" ";
        }
    }

    
    console.log(texto);
    

}