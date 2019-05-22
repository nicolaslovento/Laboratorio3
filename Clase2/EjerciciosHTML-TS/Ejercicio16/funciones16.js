function ObtenerDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var dni = document.getElementById("dni").value;
    var cv = document.getElementById("cv").value;
    MostrarPorConsola(nombre, email, dni, cv);
}
function MostrarPorConsola(nombre, email, dni, cv) {
    if (nombre === void 0) { nombre = ""; }
    if (email === void 0) { email = ""; }
    if (dni === void 0) { dni = ""; }
    if (cv === void 0) { cv = ""; }
    console.log("Nombre: ", nombre);
    console.log("Email: ", email);
    console.log("Dni: ", dni);
    console.log("Cv: ", cv);
}
