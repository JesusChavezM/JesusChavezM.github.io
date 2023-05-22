<?php 
include("../Equipos/conexion.php");

$limite=$_POST['limite'];

$resultado=mysqli_query($conexion, "update limite set limiteEq=".$limite." where id=1;");
if($resultado){
    ?>
    <script>alert ("Limite establecido");</script>
    <?php
    header("Location: crear.php");
}else{
    ?>
    <script>alert ("Ha ocurrido un error");</script>
    <?php
}

?>
