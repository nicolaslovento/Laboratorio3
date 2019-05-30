<?php
require_once ("Conexion.php");

$objCon=new Conexion();
$conexion=$objCon->GetConexion();
$sentencia=$conexion->prepare('SELECT tamanio,edad,precio,nombre,raza,foto FROM mascotas');
$sentencia->execute();


$arrayPerros=array();

while($perroBd=$sentencia->fetch()){

    $perro=new stdClass();
    $perro->tamanio=$perroBd['tamanio'];    
    $perro->edad=$perroBd['edad'];
    $perro->precio=$perroBd['precio'];
    $perro->nombre=$perroBd['nombre'];
    $perro->raza=$perroBd['raza'];
    $perro->foto=$perroBd['foto'];

    array_push($arrayPerros,$perro);
}
    

echo json_encode($arrayPerros);



?>