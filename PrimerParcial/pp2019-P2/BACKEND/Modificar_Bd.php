<?php
require_once ("Conexion.php");
$ubicacionFoto=$_FILES['foto']['tmp_name'];
$perroJson=$_POST['cadenaJson'];
$perroObj=json_decode($perroJson);
$destinoFoto="fotosModificadas/".$perroObj->nombre."_".date('dmy')."_".date('Gis')."_MODIFICADO_.".pathinfo($_FILES['foto']['name'],PATHINFO_EXTENSION);

$perroObj->pathFoto=$destinoFoto;//cambio destino

$retorno=new stdClass();
$retorno->exito=false;
$retorno->mensaje="No se modifico en BD";

$objCon=new Conexion();
$conexion=$objCon->GetConexion();
$sentencia=$conexion->prepare('UPDATE mascotas SET tamanio=:tamanio,edad=:edad,precio=:precio,raza=:raza,foto=:foto WHERE nombre=:nombre');
$sentencia->bindValue(':tamanio',$perroObj->tamanio,PDO::PARAM_STR);
$sentencia->bindValue(':edad',$perroObj->edad,PDO::PARAM_INT);
$sentencia->bindValue(':precio',$perroObj->precio,PDO::PARAM_INT);
$sentencia->bindValue(':raza',$perroObj->raza,PDO::PARAM_STR);
$sentencia->bindValue(':foto',$perroObj->pathFoto,PDO::PARAM_STR);
$sentencia->bindValue(':nombre',$perroObj->nombre,PDO::PARAM_STR);
$sentencia->execute();

if($sentencia->rowCount()>0){
    $retorno->exito=true;
    $retorno->mensaje="Se modifico en la BD";
    move_uploaded_file($ubicacionFoto,$destinoFoto);
}


echo json_encode($retorno);
?>