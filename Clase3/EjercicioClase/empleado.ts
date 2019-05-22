
/// <reference path="./persona.ts"/>

namespace Personas{

    export  class Empleado extends Persona{
    
        protected _legajo:number;
        protected _sueldo:number;
        
    
        public constructor(nombre:string,apellido:string,dni:number,sexo:string,legajo:number,sueldo:number){
    
            super(nombre,apellido,dni,sexo);
            this._legajo=legajo;
            this._sueldo=sueldo;
    
        }
    
        public get GetLegajo(){
            return this._legajo;
        }
    
        public get GetSueldo(){
            return this._sueldo;
        }
    
        public Hablar(idioma:string):string{
            return "El empleado habla "+idioma;
        }
        
    
        public ToString(){
            return super.ToString()+"-"+this._legajo+"-"+this._sueldo;
        }
    }


}