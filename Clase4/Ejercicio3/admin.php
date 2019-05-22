<?php

require_once("buscarPalabra.php");
$accion=$_GET["accion"];
$path=$_GET["path"];

//var_dump($_REQUEST);
switch($accion){
    case "1":
        
        echo BuscarArchivo($path);

    break;

    case "2":

        $palabra=$_GET["palabra"];
        $texto="";
        $direccionArchivo=fopen($path,"r");
        $texto.=fread($direccionArchivo,filesize($path));
        
        if(strstr($texto,$palabra)!=false){

            echo "1";
        }else{

            echo "0";
        }

        fclose($direccionArchivo);
    break;
}
        



    






    
?>