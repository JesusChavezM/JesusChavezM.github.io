<?php 
if ((isset($_GET["id"])) && (isset($_GET["idA"]))) {?>
<?php
}else{?>
<script>alert('No llego la variable')</script>
<?php
}//Se comprueba si la variable con el id del equipo llego al scrip de php
$id=$_GET["id"];
$idA=$_GET["idA"];
include("conexion.php");
$query="call eliminarJ(".$id.")";
$eliminacion=mysqli_query($conexion,$query);
if(!$eliminacion){?>
    <script>alert ('NO SE LOGRO ELIMINAR');</script>
    <?php
}
?>
<script>
window.location.href = "equipos.php?id=<?php echo $idA; ?>";
</script> 