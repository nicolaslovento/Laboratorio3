<?php

sleep(rand(1,6));
$eleccion=rand(1,2);

if($eleccion==1){

    echo "SI";

}else{
    $nombres="";
    $direccionArchivo=fopen("nombres.txt","r");
    $nombres.=fread($direccionArchivo,filesize("nombres.txt"));
    $arrayDeNombres=explode("-",$nombres);
    
    fclose($direccionArchivo);
    $texto="<ul onclick='Usuario.SetNombre()'>";
    for($i=0;$i<count($arrayDeNombres);$i++){
        $texto.="<li id='lista' value='".$arrayDeNombres[$i]."' ><a href='#' >".$arrayDeNombres[$i]."</a></li>";
    }
    $texto.="</ul>";
    echo $texto;
}


?>