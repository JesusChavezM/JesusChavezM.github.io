<?php 
if (isset($_GET["id"])) {?>
<?php
}else{?>
<script>alert('No llego la variable')</script>
<?php
}//Se comprueba si la variable con el id del equipo llego al scrip de php
$id=$_GET["id"];
include("conexion.php");
$query="call eliminar(".$id.")";
$eliminacion=mysqli_query($conexion,$query);
if(!$eliminacion){?>
    <script>alert ('NO SE LOGRO ELIMINAR');</script>
    <?php
}
?>
<script>window.location="equipos.php";//se redirige a la pagina que muestra el listado de equipos
</script> 