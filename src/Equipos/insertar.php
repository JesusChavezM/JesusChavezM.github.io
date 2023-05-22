<?php
include("conexion.php");

if (isset($_POST['name']) && isset($_POST['noJugadores'])) {
    $nombre = $_POST["name"];
    $numJ = $_POST["noJugadores"];

    $consulta="SELECT count(*) FROM equipos;";
    $cantE=mysqli_query($conexion,$consulta);//Se ejecuta el query
    $cantE=mysqli_fetch_array($cantE);
    $cantE=$cantE[0];

    $limite=mysqli_query($conexion,"select limiteEq from limite where id=1");//Consulta el limite de equipos establecidos para el torneo
    $limite=mysqli_fetch_array($limite);
    $limite=$limite[0];
} else {
    echo "<script> alert ('NO ENTRA');</script>";
    exit();
}

if ($numJ < 6 || $numJ > 15) {
    ?>
<script>
var again = confirm("El numero de jugadores debe estar entre 6 y 15");
if (again == true) {
    window.location.href = "equipos.php";
} else {
    window.location.href = "equipos.php";
}
</script>

    <?php
    exit();
}
if ($cantE>=$limite){
    ?>
    <script>alert ("Ya se alcanzo el limite de equipos")</script>    
    <?php
    header("Location: equipos.php");
    }else{

        $consulta = "INSERT INTO equipos (nombre, no_jugadores) VALUES (?, ?)";
        $statement = mysqli_prepare($conexion, $consulta);
        mysqli_stmt_bind_param($statement, "si", $nombre, $numJ);
        
        $insercion = mysqli_stmt_execute($statement);
        
        if ($insercion) {
            ?>
                <script>
                if (window.opener) {
                    window.opener.postMessage('closePopup', '*'); // Enviar mensaje a la ventana principal
                }
                window.location.href = "equipos.php"; // Redireccionar a la página deseada
                </script>
            <?php
        } else {
            ?>
            <script>
            alert('Insercion FALLIDA');
            window.location = "../Equipos/equipos.php";
            </script>
            <?php
        }
        
        mysqli_stmt_close($statement);
        mysqli_close($conexion);
    ?>  
    <?php
    }

?>
