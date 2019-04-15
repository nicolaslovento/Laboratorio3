<?php

$numero=$_GET["numero"];
$texto="";
$cant=0;
for($i=1;$i<=$numero;$i++){

    if($i%2!=0){

        $texto.=$i.",";
        $cant++;
    }
}

$texto.="Cantidad de numeros impares: ".$cant;
echo $texto;

?>