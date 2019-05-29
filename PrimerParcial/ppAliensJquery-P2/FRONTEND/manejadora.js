/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="alien.ts" />
var RecuperatorioPrimerParcial;
(function (RecuperatorioPrimerParcial) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.AgregarAlien = function () {
            var cuadrante = $('#cuadrante').val();
            var edad = $('#edad').val();
            var altura = $('#altura').val();
            var raza = $('#raza').val();
            var cboPlaneta = $('#cboPlaneta').val();
            var foto = document.getElementById("foto");
            var fotoName = document.getElementById("foto").value;
            fotoName = fotoName.split("\\")[2];
            var alien = new Entidades.Alien(cuadrante, edad, altura, raza, cboPlaneta, fotoName);
            var fmData = new FormData();
            fmData.append("foto", foto.files[0]);
            fmData.append("cadenaJson", JSON.stringify(alien.ToJson()));
            var url = './BACKEND/administrar.php';
            if (localStorage.getItem('modificar') == 'true') {
                url = './BACKEND/modificarAlien.php';
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
                        $('#imgFoto').attr("src", "./BACKEND/" + retorno.pathFoto);
                        Manejadora.MostrarAliens();
                        Manejadora.GuardarEnLocalStorage();
                    }
                    else {
                        alert(retorno.mensaje);
                    }
                }
            });
        };
        Manejadora.MostrarAliens = function () {
            $.ajax({
                type: 'GET',
                url: './BACKEND/mostrarAliens.php',
                dataType: "text",
                //contentType:false,
                //processData:false,
                success: function (retorno) {
                    var arrayAliens = JSON.parse(retorno);
                    if (arrayAliens.length > 0) {
                        var tabla = "<table border=1><tr><th>Cuadrante</th><th>Edad</th><th>Planeta Origen</th><th>Foto</th><th>Acciones</th></tr>";
                        for (var _i = 0, arrayAliens_1 = arrayAliens; _i < arrayAliens_1.length; _i++) {
                            var alien = arrayAliens_1[_i];
                            var eliminar = "<button onclick='RecuperatorioPrimerParcial.Manejadora.EliminarAlien(" + JSON.stringify(alien) + ")'>Eliminar</button>";
                            var modificar = "<button onclick='RecuperatorioPrimerParcial.Manejadora.ModificarAlien(" + JSON.stringify(alien) + ")'>Modificar</button>";
                            tabla += "<tr><td>" + alien.cuadrante + "</td><td>" + alien.edad + "</td><td>" + alien.planetaOrigen + "</td><td><img src='./BACKEND/fotos/" + alien.pathFoto + "' width=100 height=100></td><td>" + eliminar + modificar + "</td></tr>";
                        }
                        tabla += "</table>";
                        $('#divTabla').html(tabla);
                    }
                    else {
                        alert("No hay aliens cargados.");
                    }
                    //alert(arrayAliens.length);
                }
            });
        };
        Manejadora.GuardarEnLocalStorage = function () {
            $.ajax({
                type: 'GET',
                url: './BACKEND/mostrarAliens.php',
                dataType: "text",
                //contentType:false,
                //processData:false,
                success: function (retorno) {
                    if (retorno != "[]") {
                        localStorage.setItem("aliens_local_storage", retorno);
                        alert(localStorage.getItem("aliens_local_storage"));
                    }
                    else {
                        alert("No hay Aliens-json para guardar");
                    }
                    //alert(arrayAliens.length);
                }
            });
        };
        Manejadora.VerificarExistencia = function () {
            var cuadrante = $('#cuadrante').val();
            var raza = $('#raza').val();
            var aliensStorage = localStorage.getItem("aliens_local_storage");
            var arrayAliens = JSON.parse(aliensStorage);
            for (var _i = 0, arrayAliens_2 = arrayAliens; _i < arrayAliens_2.length; _i++) {
                var alien = arrayAliens_2[_i];
                if (alien.cuadrante == cuadrante && alien.raza == raza) {
                    console.log("El alien ya existe.");
                    alert("El alien ya existe.");
                    return;
                }
            }
            Manejadora.AgregarAlien();
            Manejadora.GuardarEnLocalStorage();
        };
        Manejadora.ObtenerAliensPorCuadrante = function () {
            var aliensStorage = localStorage.getItem("aliens_local_storage");
            var arrayAliens = JSON.parse(aliensStorage);
            var auxContador = new Array();
            for (var _i = 0, arrayAliens_3 = arrayAliens; _i < arrayAliens_3.length; _i++) {
                var alien = arrayAliens_3[_i];
                if (auxContador[alien.planetaOrigen] === undefined) {
                    auxContador[alien.planetaOrigen] = 0;
                }
                auxContador[alien.planetaOrigen]++;
            }
            //console.log(auxContador);
            var auxMax = undefined;
            var auxMin = undefined;
            for (var planeta in auxContador) {
                if (auxMax === undefined && auxMin === undefined) {
                    auxMax = auxContador[planeta];
                    auxMin = auxContador[planeta];
                }
                var cantAliens = auxContador[planeta];
                //console.log(planeta, cantAliens);
                if (auxMax < cantAliens) {
                    auxMax = cantAliens;
                    console.log("Cambio el maximo");
                }
                if (auxMin > cantAliens) {
                    auxMin = cantAliens;
                    console.log("Cambio el minimo");
                }
            }
            var planetasMax = new Array();
            var planetasMin = new Array();
            for (var planeta in auxContador) {
                if (auxContador[planeta] == auxMax) {
                    planetasMax.push(planeta);
                }
                else if (auxContador[planeta] == auxMin) {
                    planetasMin.push(planeta);
                }
            }
            //console.log(planetasMax +"\nCambio a min\n"+ planetasMin);
            var mensaje = "El/Los planetas con mas aliens son ";
            if (planetasMax.length > 0) {
                for (var _a = 0, planetasMax_1 = planetasMax; _a < planetasMax_1.length; _a++) {
                    var planeta = planetasMax_1[_a];
                    mensaje += "\n-" + planeta;
                }
                mensaje += "\nCon " + auxMax;
                console.log(mensaje);
            }
            if (planetasMin.length > 0) {
                mensaje = "El/Los planetas con menos aliens son ";
                for (var _b = 0, planetasMin_1 = planetasMin; _b < planetasMin_1.length; _b++) {
                    var planeta = planetasMin_1[_b];
                    mensaje += "\n-" + planeta;
                }
                mensaje += "\nCon " + auxMin;
                console.log(mensaje);
            }
        };
        Manejadora.EliminarAlien = function (objJson) {
            $.ajax({
                type: 'POST',
                url: './BACKEND/eliminarAlien.php',
                data: { 'cadena': JSON.stringify(objJson) },
                dataType: "text",
                success: function (retorno) {
                    alert(retorno);
                    Manejadora.MostrarAliens();
                }
            });
        };
        Manejadora.ModificarAlien = function (objJson) {
            $('#cuadrante').val(objJson.cuadrante);
            $('#cuadrante').attr("disabled", "false");
            $('#edad').val(objJson.edad);
            $('#altura').val(objJson.altura);
            $('#raza').val(objJson.raza);
            $('#cboPlaneta').val(objJson.planetaOrigen);
            $('#imgFoto').attr("src", "./BACKEND/fotos/" + objJson.pathFoto);
            localStorage.setItem('modificar', 'true');
            $('#btn-agregar').val('Modificar');
            /*$.ajax({

                type:'POST',
                url:'./BACKEND/modificarAlien.php',
                data: {'cadena':JSON.stringify(objJson)},
                dataType:"text",
                
                
                success:function(retorno:any){

                    alert(retorno);
                    Manejadora.MostrarAliens();
                }
            })*/
        };
        return Manejadora;
    }());
    RecuperatorioPrimerParcial.Manejadora = Manejadora;
})(RecuperatorioPrimerParcial || (RecuperatorioPrimerParcial = {}));
