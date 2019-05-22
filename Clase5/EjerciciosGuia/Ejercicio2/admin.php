<?php

echo "var_dump del producto:\n";
var_dump($_POST["producto"]);

$objProd=json_decode($_POST["producto"]);

echo "Muestro objeto JSON en PHP\n";
echo "Codigo de barra:".$objProd->CodBarra."\n";
echo "Nombre: ".$objProd->nombre."\n";
echo "Precio: ".$objProd->precio."\n";
?>