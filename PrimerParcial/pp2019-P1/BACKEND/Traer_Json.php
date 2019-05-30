<?php

$arrayPerros=array();
$file=fopen("perros.json","r");
while(!feof($file)){

    $cadenaJson=trim(fgets($file));

    if($cadenaJson==""){
        continue;
    }

    array_push($arrayPerros,json_decode($cadenaJson));
    //Debe decodearse bien!
}

fclose($file);

echo json_encode($arrayPerros);

?>