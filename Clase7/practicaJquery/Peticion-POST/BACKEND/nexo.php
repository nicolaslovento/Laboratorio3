<?php

$op=$_POST['caso'];

switch($op){
    case 'leerTexto':
    
    $file=fopen('nombres.txt','r');
    $texto=fread($file,filesize('nombres.txt'));
    if(strlen($texto)>0){
        echo $texto;
    }else{
        echo "No se pudo leer.";
    }

    fclose($file);

    break;
}

?>