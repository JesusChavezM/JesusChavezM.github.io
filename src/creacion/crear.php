<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="../../img/logo_quejas.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" type="text/css" href="../style/quejas.css" >
    
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
            <a href="../jornadas/jornadas.php">
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
            <a href="../bracket/index.html">
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
    //Se llama al archivo que contiene las instrucciones 
    //para realizar la conexion al a BD
    if(!$conexion){
        echo    "<script>
                alert('La conexion fallo');
                </script>";
    }//Se comprueba si la conexion ha fallado o no.

    $limite=mysqli_query($conexion,"select limiteEq from limite where id=1");//Consulta el limite de equipos establecidos para el torneo
    $limite=mysqli_fetch_array($limite);
    $limite=$limite[0];

    if($limite==0){//Se verifica si se ha establecido el limite de equipos
        ?>
                <section class="estLimite">
                    Para comenzar digita el numero de equipos maximo...
                </section>
                <form action="establecerLimite.php" method="post">
                <input class="inputlimite" style="background-color:white" type="number" placeholder="Limite" name="limite">
                <button class="inputlimite" style="grid-row:4; font-size: 20px;" type="">Establecer</button>
                </form>
                
                <?php
    }else{
                //Se cargann las jornadas o se pide que se realice el rol de juegos.
                $consulta="SELECT * FROM partido";
                $resultado=mysqli_query($conexion,$consulta);//Se ejecuta el query
                if($resultado){
                    if(mysqli_num_rows($resultado)>0){
                        ?>
                        <section class="sinpartido">
                                TORNEO EN CURSO!
                                <button onclick="location.href='eliminar.php'">Borrar partidos</button>
                        </section>
                        <?php
                    }else{
                        $numEquipos=mysqli_query($conexion,"SELECT COUNT(*) AS total_registros FROM equipos;");//Se ejecuta el query
                        $numEquipos=mysqli_fetch_array($numEquipos);
                        $numEquipos=$numEquipos[0];
                        ?>
                        <section class="sinpartido">
                           
                            Numero de equipos: <?php echo ($numEquipos);?>/<?php echo ($limite);?>
                            <a href="algoritmo.php">Realizar torneo.</a>
                            <a href="camLimit.php">Cambiar limite de quipos</a>
                        </section>
                        <?php
                        
                        
                        ?><?php
                    }
                }//Se comprueba si se ejecuto correctamente el query
            }
    ?> 

    </section>
    
    
</body>
</html>