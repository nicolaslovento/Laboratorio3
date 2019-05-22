/// <reference path="empleado.ts"/>
var Personas;
(function (Personas) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, dni, sexo) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._dni = dni;
            this._sexo = sexo;
        }
        Object.defineProperty(Persona.prototype, "GetApellido", {
            get: function () {
                return this._apellido;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "GetDni", {
            get: function () {
                return this._dni;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "GetNombre", {
            get: function () {
                return this._nombre;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "GetSexo", {
            get: function () {
                return this._sexo;
            },
            enumerable: true,
            configurable: true
        });
        Persona.prototype.ToString = function () {
            return this._nombre + "-" + this._apellido + "-" + this._dni + "-" + this._sexo;
        };
        return Persona;
    }());
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
