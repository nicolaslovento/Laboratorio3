/// <reference path="node_modules/@types/jquery/index.d.ts" />
function Enviar() {
    var legajo = $("#legajo").val();
    var clave = $("#clave").val();
    $.ajax({
        type: 'POST',
        url: "BACKEND/login",
        data: { "legajo": legajo, "clave": clave },
        dataType: "json",
        success: function (retorno) {
            //let retornoObj=JSON.parse(retorno);
            if (retorno.exito) {
                window.location.replace("./ingreso.html");
            }
            else {
                alert("No se encontro el usuario");
            }
        }
    });
}
