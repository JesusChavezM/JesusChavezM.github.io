<?php 
    include("conexion.php");

    if (isset($_POST['name']) && isset($_POST['equipo'])) {
        $nombre = $_POST["name"];
        $idE = $_POST["equipo"];
        $ap = $_POST["ap"];
        $am = $_POST["am"];
        $edad = $_POST["edad"];
        $dorsal = $_POST["dorsal"];
    } else {
        echo "<script> alert ('NO ENTRA');</script>";
    }
     if($edad<12 || $edad>70){
        ?>
        <script>
        var again = confirm("La edad del jugador debe estar entre 12 y 70");
        if(again==true){
            window.location="equipos.php"; 
        }//Se comprueba si el usuario desea volver a intentar agregar un equipo
        else{
            window.location="equipos.php"; 
        }      
        </script>
        <?php
        exit();
     }
    $consulta="call insertar(".$idE.", '".$nombre."', '".$ap."', '".$am."',".$edad.", ".$dorsal.")";
    $insercion=mysqli_query($conexion,$consulta);
    if ($insercion) {?>
        <script>
            //alert('Insercion realizada');
            window.location="equipos.php";
            //Se redirige a la pagina que muestra los equipos.
        </script>
    <?php
    }else{?>
        <script>
            alert('Insercion FALLIDA');
            window.location="equipos.php";
        </script>
        <?php
    }//Se comprueba si la insercion de un nuevo equipo se logro exitosamente
    
    ?>