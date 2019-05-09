var peticion = new XMLHttpRequest();
peticion.open("GET", "traerAuto.php", true);
peticion.send();
peticion.onreadystatechange = function () {
    if (peticion.status == 200 && peticion.readyState == 4) {
        var autoJson = JSON.parse(peticion.responseText);
        var texto = autoJson.Id + " " + autoJson.Marca + " " + autoJson.Precio + " " + autoJson.Color + " " + autoJson.Modelo;
        alert(texto);
        console.log(texto);
    }
};
