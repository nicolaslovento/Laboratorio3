<?php
require_once ("Conexion.php");
$ubicacionFoto=$_FILES['foto']['tmp_name'];
$perroJson=$_POST['cadenaJson'];
$perroObj=json_decode($perroJson);
$destinoFoto="fotos/".$perroObj->nombre."_".date('dmy')."_".date('Gis').".".pathinfo($_FILES['foto']['name'],PATHINFO_EXTENSION);

$perroObj->pathFoto=$destinoFoto;//cambio destino

$retorno=new stdClass();
$retorno->exito=false;
$retorno->mensaje="No se cargo en BD";

$objCon=new Conexion();
$conexion=$objCon->GetConexion();
$sentencia=$conexion->prepare('INSERT INTO mascotas (tamanio,edad,precio,nombre,raza,foto) VALUES (:tamanio,:edad,:precio,:nombre,:raza,:foto)');
$sentencia->bindParam(':tamanio',$perroObj->tamanio,PDO::PARAM_STR);
$sentencia->bindParam(':edad',$perroObj->edad,PDO::PARAM_INT);
$sentencia->bindParam(':precio',$perroObj->precio,PDO::PARAM_INT);
$sentencia->bindParam(':nombre',$perroObj->nombre,PDO::PARAM_STR);
$sentencia->bindParam(':raza',$perroObj->raza,PDO::PARAM_STR);
$sentencia->bindParam(':foto',$perroObj->pathFoto,PDO::PARAM_STR);
$sentencia->execute();

if($sentencia->rowCount()>0){
    $retorno->exito=true;
    $retorno->mensaje="Se cargo en la BD";
    move_uploaded_file($ubicacionFoto,$destinoFoto);
}


echo json_encode($retorno);




?>