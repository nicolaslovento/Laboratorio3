function ObtenerDatos(){

    let email=(<HTMLSelectElement>document.getElementById("cboBox")).selectedOptions;//devuelve coleccion de OptionsElements
    
    for(let i=0;i<email.length;i++){
        //casteo a HTMLOptionElement
        if((<HTMLOptionElement>email[i]).selected){
            
            console.log((<HTMLOptionElement>email[i]).text);
        }
    }
    
}