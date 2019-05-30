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
        /*AgregarPerroJSON. Tomará los distintos valores desde la página index.html (incluida la foto), creará un objeto de tipo Perro, que se
        enviará (por AJAX) hacia “./BACKEND/agregar_json.php”. En esta página se guardará al perro en el archivo “./BACKEND/perro.json”
        y la foto en “./BACKEND/fotos”. La foto nombrarla con el nombre más fecha, hora, minutos y segundos (boby.20181209_031000.jpg)*/
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
        /*MostrarPerrosJSON. Recuperará (por AJAX), desde “./BACKEND/traer_json.php”, todos los perros del archivo .json y generará un
        listado dinámico (en el FRONTEND) que mostrará toda la información de cada uno de los perros (incluida la foto). */
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
        /*AgregarPerroEnBaseDatos. Tomará los distintos valores desde la página index.html (incluida la foto), creará un objeto de tipo Perro,
que se enviará (por AJAX) hacia “./BACKEND/agregar_bd.php”. En esta página se guardará al perro en la tabla perros de la base
mascotas_bd y la foto en “./BACKEND/fotos”*/
        Manejadora.AgregarPerroEnBaseDatos = function () {
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
                url: "./BACKEND/Agregar_Bd.php",
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
        /*VerificarExistencia. Verifica que el perro que se quiere agregar (en la base de datos) no exista. Para ello, comparará las edades y la
        raza de los perros guardados. Si el perro existe, se mostrará (por consola y alert) lo acontecido. Caso contrario, agregará el nuevo perro.*/
        Manejadora.VerificarExistencia = function () {
            var edad = $('#edad').val();
            var raza = $('#raza').val();
            $.ajax({
                type: 'POST',
                url: "./BACKEND/Verificar_Existencia.php",
                data: { "edad": edad, "raza": raza },
                dataType: "json",
                //contentType:false,
                //processData:false,
                success: function (retorno) {
                    if (retorno.exito) {
                        alert(retorno.mensaje);
                    }
                    else {
                        Manejadora.AgregarPerroEnBaseDatos();
                    }
                }
            });
        };
        /*MostrarPerrosBaseDatos. Recuperá (por AJAX) de la base de datos todos los perros y generará un listado dinámico (en el FRONTEND)
        que mostrará toda la información de cada uno de los perros (incluida la foto). La foto nombrarla como en el método AgregarPerroJSON*/
        Manejadora.MostrarPerrosBaseDatos = function () {
            $.ajax({
                type: 'GET',
                url: "./BACKEND/Mostrar_BD.php",
                dataType: "text",
                //contentType:false,
                //processData:false,
                success: function (retorno) {
                    var arrayPerros = JSON.parse(retorno);
                    var tabla = "<table border=1><tr><th>TAMAÑO</th><th>EDAD</th><th>PRECIO</th><th>NOMBRE</th><th>RAZA</th><th>FOTO</th></tr>";
                    for (var i = 0; i < arrayPerros.length; i++) {
                        tabla += "<tr><td>" + arrayPerros[i].tamanio + "</td><td>" + arrayPerros[i].edad + "</td><td>" + arrayPerros[i].precio + "</td><td>" + arrayPerros[i].nombre + "</td><td>" + arrayPerros[i].raza + "</td><td><img src='./BACKEND/" + arrayPerros[i].foto + "' width=100 height:100></td></tr>";
                    }
                    $('#divTabla').html(tabla);
                }
            });
        };
        return Manejadora;
    }(Entidades.Perro));
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
