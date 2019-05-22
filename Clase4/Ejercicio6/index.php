<!--Aplicación Nº 6 (Verificar nombre de usuario)
Realizar una aplicación web que verifique la disponibilidad de un nombre de usuario. Para ello
crear una página sencilla, que posea un <input type=”text”> para ingresar el nombre de
usuario y un <input type=”button”> (con la leyenda: Verificar) que se comunicará (utilizando
AJAX) al servidor de nombres (página comprobarDisponibilad.php) y obtendrá como respuesta
un “SI” o un “NO”, dependiendo si ese nombre de usuario está disponible o no.
Para simular la búsqueda sobre la base de datos de usuarios, en comprobarDisponibilidad.php
se realizará lo siguiente:
Generara un falso retardo ocasionado por la búsqueda y el tráfico de la red de entre 0 y 6
segundos (utilizar función rand() y la función sleep(). Buscar información). Además, retornará
aleatoriamente, “SI” o “NO”. A partir de la respuesta -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio 6</title>
    <script src="manejador.js"></script>
</head>
<body>

<div>
    <input type="text" name="usuario" id="usuario" >
    <input type="button" name="btnEnviar" id="btnEnviar" value="Verificar" onclick="Usuario.Comprobar()">
    <span id="nombres"></span>
</div>



<center><img id="img" </center>

    
</body>
</html>