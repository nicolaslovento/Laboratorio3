<?php

$retorno=$_POST['cadena'];

$cadenaJson=json_decode($retorno);
$texto="";
$file=fopen("aliens.json","r");

while(!feof($file)){

    $json=trim(fgets($file));

    if($json==""){
        continue;
    }

    $json=json_decode($json);

    if($json->cuadrante==$cadenaJson->cuadrante && $json->raza==$cadenaJson->raza && $json->edad==$cadenaJson->edad){
        continue;
    }

   $texto.=json_encode($json)."\r\n";
}

fclose($file);

$file=fopen("aliens.json","w");
fwrite($file,$texto);
fclose($file);

echo "Se borró";


?>