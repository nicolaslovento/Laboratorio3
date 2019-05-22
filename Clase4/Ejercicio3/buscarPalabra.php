<?php

function BuscarArchivo($path){

    try{

        if(file_exists($path)){
        $texto='<hr><span style="font-family:verdana; color:red;">';
        $direccionArchivo=fopen($path,"r");
        $texto.=fread($direccionArchivo,filesize($path));
        fclose($direccionArchivo);
        $texto.="</span><hr>";
        return $texto;
    
        }else{
            return "0";
        }
    }catch ( Exception $e ) {
        //fclose($direccionArchivo);
        
    } 


}



?>