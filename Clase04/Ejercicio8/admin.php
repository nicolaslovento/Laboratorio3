<?php
$direccion=fopen("noticias.txt","r");
$noticias=fread($direccion,filesize("noticias.txt"));
$arrayNoticias=explode("\n",$noticias);
var_dump($arrayNoticias);
fclose($direccion);
$num=rand(1,4);
switch($_GET["contador"]){
    case "0":
        echo $arrayNoticias[$_GET["contador"]];
    break;
    case "1":
        echo $arrayNoticias[$_GET["contador"]];
        break;
    case "2":
        echo $arrayNoticias[$_GET["contador"]];
        break;
    case "3":
        echo $arrayNoticias[$_GET["contador"]];
        break;
    case "4":
        echo $arrayNoticias[$_GET["contador"]];
        break;
}
?>