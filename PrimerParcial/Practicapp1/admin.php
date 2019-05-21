<?php

$op=$_POST['op'];

switch($op){

    case 'agregar':
    $objEmp=new stdClass();
    $objEmp->nombre=$_POST['nombre'];
    $objEmp->legajo=$_POST['legajo'];
    

    $objEmp->fotoDestino="./BACKEND/fotos/".$objEmp->nombre."-".$objEmp->legajo.".jpg";

    move_uploaded_file($_FILES['foto']['tmp_name'],$objEmp->fotoDestino);

    $JsonEmp=json_encode($objEmp);
    $file=fopen("empleados.txt","a");

    fwrite($file,$JsonEmp."\r\n");

    fclose($file);

    echo $JsonEmp;


    break;

    case 'mostrarTabla':


    $file=fopen("empleados.txt","r");
    $tabla="<table border=1><tr><th>Nombre</th><th>Legajo</th><th>Foto</th><tr>";
    while(!feof($file)){

        $lineaObj=trim(fgets($file));

        if($lineaObj==""){

            continue;
        }

        $objEmp=json_decode($lineaObj);
        $eliminar="<button  onclick='Manejador.Eliminar(".json_encode($objEmp).")'>X</button>";
        $modificar="<button onclick='Manejador.MostrarModificar(".json_encode($objEmp).")'>M</button>";
        $tabla.="<tr><td>{$objEmp->nombre}</td><td>{$objEmp->legajo}</td><td><img src='{$objEmp->fotoDestino}' width=100 height=100></td><td>$eliminar$modificar</td></tr>";

    }

        $tabla.="</table>";

        echo $tabla;

    break;

    case "eliminar":

    $strEmp=$_POST['obj'];

    $objEmp=json_decode($strEmp);

    $file=fopen("empleados.txt","r");
    $texto="";
    while(!feof($file)){

        $lineaObj=trim(fgets($file));

        if($lineaObj==""){
            continue;
        }

        $objLineaLeida=json_decode($lineaObj);

        if($objLineaLeida->legajo==$objEmp->legajo){

            continue;
        }

        $texto.=json_encode($objLineaLeida)."\r\n";

    }

    $file=fopen("empleados.txt","w");
    fwrite($file,$texto);
    fclose($file);
    

    break;

    case 'modificar':

    $objEmp=new stdClass();
    $objEmp->nombre=$_POST['nombre'];
    $objEmp->legajo=$_POST['legajo'];
    
    //echo json_encode($objEmp);
    $objEmp->fotoDestino="./BACKEND/fotos/".$objEmp->nombre."-".$objEmp->legajo.".jpg";
    
    $texto="";
    
    $file=fopen("empleados.txt","r");
    while(!feof($file)){

    $objLineaLeida=trim(fgets($file));
    
    if($objLineaLeida==""){
        continue;
    }

    $objLeido=json_decode($objLineaLeida);
    if($objLeido->legajo==$objEmp->legajo){
        if(isset($_FILES['foto']['tmp_name'])){
            unlink($objLeido->fotoDestino);
            move_uploaded_file($_FILES['foto']['tmp_name'],$objEmp->fotoDestino);
        }
        
        $texto.=json_encode($objEmp)."\r\n";
        continue;
    }

    $texto.=json_encode($objLineaLeida)."\r\n";

    }
    fclose($file);

    $file=fopen("empleados.txt","w");
    fwrite($file,$texto);
    fclose($file);
    
    echo json_encode($objEmp);


    break;


}



?>