/// <reference path="./node_modules/@types/jquery/index.d.ts"/>

class Manejadora{

    public static Mostrar(){
        
        let texto:any=$('#texto').val();
        $('#mostrar').text(texto);
    }

    public static TraerTexto(){
        
        $.ajax({
            url:'./BACKEND/nexo.php',
            type:'POST',
            data: {caso:"leerTexto"},
            dataType:'text',
            async:true
            
        })
        .done(function(retorno:string){

            $('#mostrar').html(retorno);

        }).fail(function(jqXHR,textStatus){

            alert(jqXHR+" "+textStatus);

        });
    }

    
}