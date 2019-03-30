function ObtenerDatos(){
    
    let auxUno:string=(<HTMLInputElement> document.getElementById("num1")).value;
    let auxDos:string=(<HTMLInputElement> document.getElementById("num2")).value;

    let numeroUno:number=parseInt(auxUno);
    let numeroDos:number=parseInt(auxDos);//parseo a int

    let arrayDeRadios=document.getElementsByName("radioButton");//array de radios

    var operador=0;
    for(let i=0;i<arrayDeRadios.length;i++){

        if((<HTMLInputElement>arrayDeRadios[i]).checked){
            operador=+(<HTMLInputElement>arrayDeRadios[i]).value;//con el + casteo a int
            Calcular(numeroUno,numeroDos,operador);
            break;
            
        }
    }

}

function Calcular(num1:number,num2:number,operador:number){

    switch(operador){

        case 1:
            alert(num1+num2);
          break;
        case 2:
            alert(num1-num2);
        break;
        case 3:
            alert(num1*num2);
        break;
        case 4:
            alert(num1/num2);
        break;

    }

}