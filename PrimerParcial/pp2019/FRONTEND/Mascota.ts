namespace Entidades{
    export class Mascota{

        private tamaño:string;
        private edad:number;
        private precio:number;

        public constructor(tamaño:string,edad:number,precio:number){
            this.tamaño=tamaño;
            this.edad=edad;
            this.precio=precio;
        }

        public ToString(){
            return '{"tamaño":"'+this.tamaño+'","edad":'+this.edad+',"precio":'+this.precio+',';
        }

    }
}