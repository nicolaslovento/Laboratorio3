
namespace Personas{

export abstract class Persona{

    private _apellido:string;
    private _dni:number;
    private _nombre:string;
    private _sexo:string;

    public constructor(nombre:string,apellido:string,dni:number,sexo:string){

        this._nombre=nombre;
        this._apellido=apellido;
        this._dni=dni;
        this._sexo=sexo;

    }

    public get GetApellido(){
        return this._apellido;
    }

    public get GetDni(){
        return this._dni;
    }

    public get GetNombre(){
        return this._nombre;
    }
    public get GetSexo(){
        return this._sexo;
    }

    public abstract Hablar(idioma:string):string;

    public ToString(){
        return this._nombre+"-"+this._apellido+"-"+this._dni+"-"+this._sexo;
    }

}



}