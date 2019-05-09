
let peticion=new XMLHttpRequest();

peticion.open("GET","traerAuto.php",true);
peticion.send();

peticion.onreadystatechange=()=>{

    if(peticion.status==200 && peticion.readyState==4){
        
        let autoJson=JSON.parse(peticion.responseText);
        let texto=autoJson.Id+" "+autoJson.Marca+" "+autoJson.Precio+" "+autoJson.Color+" "+autoJson.Modelo;
        alert(texto);
        console.log(texto);
    }


}