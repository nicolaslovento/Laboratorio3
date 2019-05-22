/*Guardar su nombre y apellido en dos variables distintas. Dichas variables serán pasadas
como parámetro de la función MostrarNombreApellido, que mostrará el apellido en
mayúscula y el nombre solo con la primera letra en mayúsculas y el resto en minúsculas.
El apellido y el nombre se mostrarán separados por una coma (,).
Nota: Utilizar console.log()*/
var nombre = "NICOLAS";
var apellido = "Lo Vento";
function MostrarNombreApellido(nombre, apellido) {
    nombre = nombre.toLowerCase();
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    apellido = apellido.toUpperCase();
    console.log(apellido + ", " + nombre);
}
MostrarNombreApellido("nicolas", "lo vento");
