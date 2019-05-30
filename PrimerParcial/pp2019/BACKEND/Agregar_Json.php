<?php

$ubicacionFoto=$_FILES['foto']['tmp_name'];
$perroJson=$_POST['cadenaJson'];
$perroObj=json_decode($perroJson);
$destinoFoto="fotos/".$perroObj->nombre."_".date('dmy')."_".date('Gis').".".pathinfo($_FILES['foto']['name'],PATHINFO_EXTENSION);

$perroObj->pathFoto=$destinoFoto;//cambio destino

$retorno=new stdClass();
$retorno->exito=false;
$retorno->mensaje="No se cargo el JSON";

$file=fopen("perros.json","a");
if(0<fwrite($file,json_encode($perroObj)."\r\n")){

    $retorno->exito=true;
    $retorno->mensaje="Se cargo el JSON pero no la foto";

    if(move_uploaded_file($ubicacionFoto,$destinoFoto)){

        $retorno->mensaje="Se cargo el JSON y la foto";
    }
    
}

fclose($file);

echo json_encode($retorno);
?>