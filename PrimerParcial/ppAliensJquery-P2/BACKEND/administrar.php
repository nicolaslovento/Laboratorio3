<?php

$fotoTmp=$_FILES['foto']['tmp_name'];
$cadenaJson=$_POST['cadenaJson'];

//var_dump($cadenaJson);
$destino="fotos/".$_FILES['foto']['name'];

$retorno=new stdClass();
$retorno->exito=false;
$retorno->mensaje="No se guardo el json alien";

$file=fopen("aliens.json","a");
if(0<fwrite($file,$cadenaJson."\r\n")){

    $retorno->mensaje="Se guardo el json alien";
    if(move_uploaded_file($fotoTmp,$destino))
    {
        $retorno->exito=true;
        $retorno->mensaje.=" y la foto.";
        $retorno->pathFoto=$destino;
        echo json_encode($retorno);
        return;
    }

    $retorno->exito=true;
    $retorno->mensaje.=" y NO la foto.";
    echo json_encode($retorno);
}



?>