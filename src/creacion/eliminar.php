<?php 
include("../Equipos/conexion.php");
mysqli_query($conexion," set SQL_SAFE_UPDATES=0");
mysqli_query($conexion,"delete from partido;");
header("Location: crear.php");
?>