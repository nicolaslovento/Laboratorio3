<?php
require_once ("Conexion.php");
$edad=$_POST['edad'];
$raza=$_POST['raza'];

$retorno=new stdClass();
$retorno->exito=false;
$retorno->mensaje="No esta en la BD";

$objCon=new Conexion();
$conexion=$objCon->GetConexion();
$sentencia=$conexion->prepare('SELECT edad,raza FROM mascotas');
$sentencia->execute();
        
        
while($perro=$sentencia->fetch()){

    if($perro['edad']==$edad && $perro['raza']==$raza){
        $retorno->exito=true;
        $retorno->mensaje="Esta en la BD";
        break;
    }

}
       

echo json_encode($retorno);

?>