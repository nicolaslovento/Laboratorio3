function MostrarMeses(){

    let opcionElegida=document.getElementsByName("checkbox");
    let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    var flag=0;
    var opcion:number=0;
    for(let i=0;i<opcionElegida.length;i++){
        if((<HTMLInputElement>opcionElegida[i]).checked){
            opcion=+(<HTMLInputElement>opcionElegida[i]).value;
            flag++;
        }
    }

    if(flag==1){//valido que haya elegido solo una opcion
        
        
        switch(opcion){
            case 1:
                var texto:string="<br><br><table border='1'><caption>MESES</caption>";
                for(let i=0;i<meses.length;i++){

                    texto+="<tr><td>"+meses[i]+"</td><tr>";

                }
                texto+="</td></table>";
        break;
            case 2:
            var texto:string="<br><br><table border='1'><caption>NUMERO</caption>";
        
            for(let i=1;i<=meses.length;i++){

                    texto+="<tr><td>"+[i]+"</td><tr>";

                }
            texto+="</td></table>";

        
        break;
        case 3:
            var texto:string="<br><br><table border='1' colspan='2'><caption>MESES Y NUMEROS</caption>";//corregir
            for(let i=0;i<meses.length;i++){

            texto+="<tr><td>"+meses[i]+"</td>"+"<td>"+[i+1]+"</td>"+"<tr>";

            }
            texto+="</td></table>";

        break;
            }

        (<HTMLDivElement>document.getElementById("Mostrar")).innerHTML=texto;
    }else{
        alert("Seleccione solo una opcion!!");
    }
    
}