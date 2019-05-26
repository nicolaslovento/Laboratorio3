<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './vendor/autoload.php';

require_once "conexion.php";
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*
¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/

//*********************************************************************************************//
//INICIALIZO EL APIREST
//*********************************************************************************************//
$app = new \Slim\App(["settings" => $config]);

//*********************************************************************************************//
//CONFIGURO LOS VERBOS GET, POST, PUT Y DELETE
//*********************************************************************************************//
$app->post('/login', function ($request,$response) {    
  
  $ArrayDeParametros=$request->getParsedBody();//convierto los params en array
  
  $objRequest=new stdClass();
  $objRequest->legajo=$ArrayDeParametros['legajo'];
  $objRequest->clave=$ArrayDeParametros['clave'];
  
  $conexion=new Conexion();
  $sentencia=$conexion->GetConexion();
  $consulta=$sentencia->prepare('SELECT * FROM empleados WHERE legajo=:legajo AND clave=:clave');
  $consulta->bindValue(':legajo',$objRequest->legajo,PDO::PARAM_STR);
  $consulta->bindValue(':clave',$objRequest->clave,PDO::PARAM_STR);
  $consulta->setFetchMode(PDO::FETCH_ASSOC);
  $consulta->execute();

  $objResponse=new stdClass();
  $objResponse->exito=false;
  if($consulta->rowCount()>0){
    
    $objArray=$consulta->fetch();
    $objResponse->id=$objArray['id'];
    $objResponse->legajo=$objArray['legajo'];
    $objResponse->clave=$objArray['clave'];
    $objResponse->exito=true;
  }

  $newResponse=$response->withJson($objResponse,200);
  return $newResponse;
  
}
);






$app->run();