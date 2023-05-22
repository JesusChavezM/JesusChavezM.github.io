<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="../../img/logo_quejas.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" type="text/css" href="../style/equipos.css" >
    
    <title>Quejas y sugerencias</title>
</head>

<body>
            <!--Sidebar-->
            <div class="container">
            <div class="sidebar">
                <div class="logo-details">
                <img src="../../img/logo_pagina.png" alt="Logo" class="logo">
                    <div class="logo_name">-Bracketify</div>
                    <i class='bx bx-menu' id="btn" ></i>
                </div>
            <ul class="nav-list">
            <li>
            <a href="#">
                <i class='bx bx-user' ></i>
                <span class="links_name">Mi perfil</span>
            </a>
            <span class="tooltip">Perfil</span>
            </li>
            <li>
            <a href="../QyS/quejas_sug.php">
                <i class='bx bx-chat' ></i>
                <span class="links_name">Quejas y Sugerencias</span>
            </a>
            <span class="tooltip">Quejas y sugerencias</span>
            </li>
            <li>
            <a href="#">
                <i class='bx bx-pie-chart-alt-2' ></i>
                <span class="links_name">Noticas</span>
            </a>
            <span class="tooltip">Noticias</span>
            </li>
            <li>
            <a href="../Equipos/equipos.php">
                <i class='bx bx-folder' ></i>
                <span class="links_name">Ver equipos</span>
            </a>
            <span class="tooltip">Ver equipos</span>
            </li>
            <li>
            <a href="../creacion/crear.php">
                <i class='bx bx-cog' ></i>
                <span class="links_name">Crear torneo</span>
            </a>
            <span class="tooltip">Crear torneo</span>
            </li>
            <li class="profile">
                <div class="profile-details">
                <!--<img src="profile.jpg" alt="profileImg">-->
                <div class="name_job">
                    <div class="name">Ing. Software</div>
                    <div class="job">App Web</div>
                </div>
                </div>
                <i class='bx bx-log-out' id="log_out" ></i>
            </li>
            </ul>
      </div>
<!--Fin de sidebar-->
    <section class="home-section">
        
    
<?php 

include("../Equipos/conexion.php");

$consulta="SELECT * FROM partido";
    $resultado=mysqli_query($conexion,$consulta);//Se ejecuta el query
    if($resultado==true){
        while ($row=$resultado->fetch_array()) {
            $id=$row[0];//El resultado de la consulta devuelve un arreglo, que representa las columnas
            $equipo1=mysqli_query($conexion,"select nombre from equipos where id=".$row[1]);//de la tabla
            $equipo1=mysqli_fetch_array($equipo1);
            $equipo1=$equipo1[0];

            $equipo2=mysqli_query($conexion,"select nombre from equipos where id=".$row[2]);//de la tabla
            $equipo2=mysqli_fetch_array($equipo2);
            $equipo2=$equipo2[0];

?>
            <div class="equipos">                
                <?php echo $equipo1;
                ?>
            
            <div>
                VS
            </div>
            <?php echo $equipo2;
                ?>
                
            </div>
<?php
                        }//Se comprueba si hay elementos en el resultado de la consulta 
                        
                    }//Se comprueba si se ejecuto correctamente el query
?>

    </section>
    
    
</body>
</html>

