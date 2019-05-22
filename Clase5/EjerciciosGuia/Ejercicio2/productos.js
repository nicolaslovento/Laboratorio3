/*Aplicación Nº 3 (Enviar Json por Ajax)
Diseñar una aplicación que envíe por Ajax un producto hacia la página mostrarJson.php. En
dicha página, mostrar el valor recibido utilizando la función var_dump() .
Luego, transformar lo recibido en un objeto standard de PHP y mostrar cada uno de sus
atributos. Utilizar las funciones json_encode() y json_decode() .*/
var producto2 = { "CodBarra": 435432, "nombre": "Galletitas", "precio": 40 };
var strProd = "producto=" + JSON.stringify(producto2);
var enviarAjax = new XMLHttpRequest();
enviarAjax.open("POST", "admin.php", true);
enviarAjax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
enviarAjax.send(strProd);
enviarAjax.onreadystatechange = function () {
    if (enviarAjax.status == 200 && enviarAjax.readyState == 4) {
        alert(enviarAjax.responseText);
    }
};
