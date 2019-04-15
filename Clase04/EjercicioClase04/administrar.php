<?php



switch($_POST["accion"]){
    case "1":
    echo "hola";
    break;
    case "2":
        $direccion=fopen("nombres.txt","a+");

        if(fwrite($direccion,$_POST["nombre"]."\r\n")){
            echo "1";
        }else{
            echo "0";
        }

        fclose($direccion);
    break;
    case "3":
    $texto="<table border='1'><caption>Nombres:</caption>";
    
    
    $direccion=fopen("nombres.txt","r");
    while(!feof($direccion)){

        
        $nombre=fgets($direccion);
        if($nombre==""){

            continue;
        }
        $texto.="<tr><td>".$nombre."</td></tr>";
    }

    $texto.="</table>";

    echo $texto;
    fclose($direccion);
    break;

    case "4":
    $direccion=fopen("nombres.txt","r");
    $flag=0;

    while(!feof($direccion)){

        $nombre=trim(fgets($direccion));
        if($nombre==""){

            continue;
        }

        if(strcmp($_POST["nombre"],$nombre){

            $flag=1;
        }
        
    }

    break;
}





