<?php 
    $correo=$_POST['correo'];
    $tipo=$_POST['tipo'];
    $desc=$_POST['descripcion'];

    include("../Equipos/conexion.php");
    mysqli_query($conexion,"insert into queja (correo, tipo, descripcion) VALUES ('".$correo."', '".$tipo."', '".$desc."');");
    header("Location: quejas_sug.php");
?>