<?php

$direc=fopen("auto.json","r");

$strJson=fgets($direc);
    
fclose($direc);

echo $strJson;



?>