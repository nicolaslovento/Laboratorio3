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
/// <reference path="IParte2.ts"/>
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
                        console.log(retorno.mensaje);
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
            var url = "./BACKEND/Agregar_Bd.php";
            if (localStorage.getItem('modificar') == 'true') {
                url = "./BACKEND/Modificar_Bd.php";
            }
            $.ajax({
                type: 'POST',
                url: url,
                data: fmData,
                dataType: "json",
                contentType: false,
                processData: false,
                success: function (retorno) {
                    if (retorno.exito) {
                        alert(retorno.mensaje);
                        if (localStorage.getItem('modificar') == 'true') {
                            Manejadora.MostrarPerrosBaseDatos();
                        }
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
                    var tabla = "<table border=1><tr><th>TAMAÑO</th><th>EDAD</th><th>PRECIO</th><th>NOMBRE</th><th>RAZA</th><th>FOTO</th><td>ACCIONES</td></tr>";
                    for (var i = 0; i < arrayPerros.length; i++) {
                        var eliminar = "<button onclick='PrimerParcial.Manejadora.EliminarPerro(" + JSON.stringify(arrayPerros[i]) + ")'>Eliminar</button>";
                        var modificar = "<button onclick='PrimerParcial.Manejadora.ModificarPerro(" + JSON.stringify(arrayPerros[i]) + ")'>Modificar</button>";
                        tabla += "<tr><td>" + arrayPerros[i].tamanio + "</td><td>" + arrayPerros[i].edad + "</td><td>" + arrayPerros[i].precio + "</td><td>" + arrayPerros[i].nombre + "</td><td>" + arrayPerros[i].raza + "</td><td><img src='./BACKEND/" + arrayPerros[i].foto + "' width=100 height:100></td><td>" + eliminar + modificar + "</td></tr>";
                    }
                    $('#divTabla').html(tabla);
                }
            });
        };
        /*EliminarPerro. Eliminará al perro de la base de datos (por AJAX). Recibe como parámetro al objeto JSON que se ha de eliminar. Pedir
        confirmación, mostrando nombre y raza, antes de eliminar. Refrescar el listado para visualizar los cambios*/
        Manejadora.EliminarPerro = function (perroObj) {
            //let perroObj:any=JSON.parse(obj);
            if (confirm('Esta seguro de eliminar a ' + perroObj.nombre + ' de raza ' + perroObj.raza + '?')) {
                $.ajax({
                    type: 'POST',
                    url: "./BACKEND/EliminarPerro.php",
                    data: { "perroJson": JSON.stringify(perroObj) },
                    dataType: "json",
                    //contentType:false,
                    //processData:false,
                    success: function (retorno) {
                        if (retorno.exito) {
                            alert(retorno.mensaje);
                            Manejadora.MostrarPerrosBaseDatos();
                        }
                        else {
                            alert(retorno.mensaje);
                        }
                    }
                });
            }
            else {
                return;
            }
        };
        /*ModificarPerro. Mostrará todos los datos del perro que recibe por parámetro (objeto JSON), en el formulario, incluida la foto.
        Permitirá modificar cualquier campo, a excepción del nombre, dejarlo como de solo lectura.
        Modificar el método AgregarPerroEnBaseDatos para que cambie el comportamiento del método y el texto del botón de “Agregar” a “Modificar”,
        según corresponda.
        Refrescar el listado solo si se pudo modificar, caso contrario, informar (por alert y consola) de lo acontecido.
        Se enviará (por AJAX) hacia “./BACKEND/modificar_bd.php”, modificando la tabla de la base de datos y guardando la foto en
        “./BACKEND/fotos_modificadas”. La foto nombrarla con el mismo nombre que tenga la foto original más el texto MODIFICADA
        (boby.20181209_031000_MODIFICADA.jpg)
        */
        Manejadora.ModificarPerro = function (perroObj) {
            //let perroObj:any=JSON.parse(obj);
            $('#tamaño').val(perroObj.tamanio);
            $('#edad').val(perroObj.edad);
            $('#precio').val(perroObj.precio);
            $('#nombre').val(perroObj.nombre);
            $('#nombre').attr("disabled", "true");
            $('#raza').val(perroObj.raza);
            $('#imgFoto').attr("src", "./BACKEND/" + perroObj.foto);
            localStorage.setItem('modificar', 'true');
            $('#agregar').attr('value', 'MODIFICAR');
            Manejadora.AgregarPerroJSON();
        };
        return Manejadora;
    }(Entidades.Perro));
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
