<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script
  src="https://code.jquery.com/jquery-3.0.0.js"
  integrity="sha256-jrPLZ+8vDxt2FnE1zvZXCkCcebI/C8Dt5xyaQBjxQIo="
  crossorigin="anonymous"></script>

    <script src="funciones.js"></script>
    
    <link rel="stylesheet" href="CSS/login.css">
    
</head>
<body>
    <div align=center>
    
        <table>
            <tr><th><h1>Ingreso</h1></th></tr>
            <tr><td><span>Legajo: </span></td></tr>
            <tr><td><input type="text" id="legajo"></td></tr>
            <tr><td><span>Clave: </span></td><tr>
            <tr><td><input type="password" id="clave"></td><tr>
            <tr><td><button class="aceptar" id="aceptar" onclick="Enviar()">Aceptar</button><button class="cancelar" id="cancelar">Cancelar</button></td></tr></table>
    
    </div>
</body>
</html>

