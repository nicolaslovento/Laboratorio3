<?php

$arrayJson=array();

$file=fopen("aliens.json","r");
while(!feof($file)){

    $json=trim(fgets($file));

    if($json==""){
        continue;
    }

    array_push($arrayJson,json_decode($json));

}

fclose($file);

echo json_encode($arrayJson);

?>