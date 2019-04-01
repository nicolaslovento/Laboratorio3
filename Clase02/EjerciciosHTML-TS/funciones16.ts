function ObtenerDatos(){

    
    let nombre=(<HTMLInputElement> document.getElementById("nombre")).value;
    let email=(<HTMLInputElement> document.getElementById("email")).value;
    let dni=(<HTMLInputElement> document.getElementById("dni")).value;
    let cv=(<HTMLInputElement> document.getElementById("cv")).value;

    MostrarPorConsola(nombre,email,dni,cv);
}

function MostrarPorConsola(nombre="",email="",dni="",cv=""){

    console.log("Nombre: ",nombre);
    console.log("Email: ",email);
    console.log("Dni: ",dni);
    console.log("Cv: ",cv);
}

