var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Perro.ts"/>
/// <reference path="../node_modules/@types/jquery/index.d.ts"/>
var PrimerParcial;
(function (PrimerParcial) {
    var Manejadora = /** @class */ (function (_super) {
        __extends(Manejadora, _super);
        function Manejadora() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Manejadora.AgregarPerroJSON = function () {
            var tamaño = $('#tamaño').val();
            var edad = $('#edad').val();
            var precio = $('#precio').val();
            var nombre = $('#nombre').val();
            var raza = $('#raza').val();
            var foto = document.getElementById('foto');
            var pathFoto = ((foto.value.split("\\"))[2]);
            var perro = new Entidades.Perro(tamaño, edad, precio, nombre, raza, pathFoto);
            alert(perro.ToString());
            var fmData = new FormData();
            fmData.append('foto', foto.files[0]);
            fmData.append('cadenaJson', JSON.stringify(perro.ToJSON()));
            $.ajax({
                type: 'POST',
                url: "./BACKEND/Agregar_Json.php",
                data: fmData,
                dataType: "json",
                contentType: false,
                processData: false,
                success: function (retorno) {
                    if (retorno.exito) {
                        alert(retorno.mensaje);
                    }
                    else {
                        alert(retorno.mensaje);
                    }
                }
            });
        };
        Manejadora.MostrarPerrosJSON = function () {
            $.ajax({
                type: 'GET',
                url: "./BACKEND/Traer_Json.php",
                dataType: "text",
                success: function (retorno) {
                    var arrayPerros = JSON.parse(retorno);
                    if (arrayPerros.length > 0) {
                        var tabla = "<table border=1><tr><th>Nombre</th><th>Raza</th><th>Edad</th><th>Precio</th><th>Foto</th></tr>";
                        for (var _i = 0, arrayPerros_1 = arrayPerros; _i < arrayPerros_1.length; _i++) {
                            var perro = arrayPerros_1[_i];
                            tabla += "<tr><td>" + perro.nombre + "</td><td>" + perro.raza + "</td><td>" + perro.edad + "</td><td>" + perro.precio + "</td><td><img src='./BACKEND/" + perro.pathFoto + "' width=100 height=100></td></tr>";
                        }
                        tabla += "</table>";
                        $('#divTabla').html(tabla);
                    }
                    else {
                        alert("No hay aliens cargados.");
                    }
                }
            });
        };
        return Manejadora;
    }(Entidades.Perro));
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
