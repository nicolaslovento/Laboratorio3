<?php

$path=$_GET["path"];


try{

    if(file_exists($path)){
    $texto='<hr><span style="font-family:verdana; color:red;">';
    $direccionArchivo=fopen($path,"r");
    $texto.=fread($direccionArchivo,filesize($path));
    fclose($direccionArchivo);
    $texto.="</span><hr>";
    echo $texto;

    }else{
        echo "0";
    }
}catch ( Exception $e ) {
    //fclose($direccionArchivo);
    
  } 




    
?>

