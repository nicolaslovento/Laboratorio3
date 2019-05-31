<?php

require_once ("Conexion.php");

$perroAEliminar=$_POST['perroJson'];

$perroAEliminar=json_decode($perroAEliminar);

$retorno=new stdClass();
$retorno->exito=false;
$retorno->mensaje="No se pudo eliminar";

$objCon=new Conexion();
$conexion=$objCon->GetConexion();
$sentencia=$conexion->prepare('DELETE FROM mascotas WHERE nombre=:nombre and raza=:raza');
$sentencia->bindValue(':nombre',$perroAEliminar->nombre,PDO::PARAM_STR);
$sentencia->bindValue(':raza',$perroAEliminar->raza,PDO::PARAM_STR);
$sentencia->execute();

if($sentencia->rowCount()>0){
    $retorno->exito=true;
    $retorno->mensaje="Se eliminó";
}

echo json_encode($retorno);
    


?>