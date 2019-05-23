/// <reference path="./node_modules/@types/jquery/index.d.ts"/>
var Manejadora = /** @class */ (function () {
    function Manejadora() {
    }
    Manejadora.Mostrar = function () {
        var texto = $('#texto').val();
        $('#mostrar').text(texto);
    };
    Manejadora.TraerTexto = function () {
        $.ajax({
            url: './BACKEND/nexo.php',
            type: 'POST',
            data: { caso: "leerTexto" },
            dataType: 'text',
            async: true
        })
            .done(function (retorno) {
            $('#mostrar').html(retorno);
        }).fail(function (jqXHR, textStatus) {
            alert(jqXHR + " " + textStatus);
        });
    };
    return Manejadora;
}());
