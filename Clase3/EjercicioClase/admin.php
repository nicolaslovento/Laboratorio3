<?php

//var_dump($_POST);

//Guardo los datos del empleado en texto

$nombre=$_POST["nombre"];
$apellido=$_POST["apellido"];
$dni=$_POST["dni"];
$sexo=$_POST["sexo"];
$legajo=$_POST["legajo"];
$sueldo=$_POST["sueldo"];

$texto=$nombre." , ".$apellido." , ".$dni." , ".$sexo." , ".$legajo." , ".$sueldo."\r\n";

$direccion=fopen("empleadosArchivados.txt","a");

if(0<fwrite($direccion,$texto)){
    echo "Se guardo el empleado con exito.<br>";
}else{
    echo "No se pudo guardar el empleado.<br>";
}

fclose($direccion);
echo $texto;
?>