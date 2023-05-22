<?php 

include("../Equipos/conexion.php");

mysqli_query($conexion,"update limite set limiteEq=0 where id=1;");
header("Location: crear.php");
?>