<?php

$fotoTmp=$_FILES['foto']['tmp_name'];
$cadenaJson=$_POST['cadenaJson'];
$objJson=json_decode($cadenaJson);
//var_dump($cadenaJson);
$destino="fotos/".$_FILES['foto']['name'];

$retorno=new stdClass();
$retorno->exito=false;
$retorno->mensaje="Se modifico el json ";

$file=fopen("aliens.json","r");
$texto="";
while(!feof($file)){

    $json=trim(fgets($file));

    if($json==""){
        continue;
    }

    $json=json_decode($json);

    if($json->cuadrante==$objJson->cuadrante){

        $retorno->exito=true;
        $json->edad=$objJson->edad;
        $json->altura=$objJson->altura;
        $json->raza=$objJson->raza;
        $json->planetaOrigen=$objJson->planetaOrigen;
        $json->pathFoto=$objJson->pathFoto;
        move_uploaded_file($fotoTmp,$destino);
        $retorno->pathFoto=$destino;

    }

   $texto.=json_encode($json)."\r\n";
}

fclose($file);

$file=fopen("aliens.json","w");
fwrite($file,$texto);
fclose($file);

echo json_encode($retorno);

?>