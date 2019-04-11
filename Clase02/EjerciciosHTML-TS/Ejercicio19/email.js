function ObtenerDatos() {
    var email = document.getElementById("cboBox").selectedOptions; //devuelve coleccion de OptionsElements
    for (var i = 0; i < email.length; i++) {
        //casteo a HTMLOptionElement
        if (email[i].selected) {
            console.log(email[i].text);
        }
    }
}
