<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="../../img/logo.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/equipos.css?v=<?php echo(rand()); ?>">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" type="text/css" href="../style/equipos.css" >
    
    <title>Equipos</title>
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
            <a href="equipos.php">
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
        <div class="popup" id="popup">
            <div class="popup-content">
                <div id="popup-content-container"></div>
                <span class="close" onclick="closePopup()">&times;</span>
            </div>
        </div>
<?php
                include("conexion.php");
                //Se llama al archivo que contiene las instrucciones 
                //para realizar la conexion al a BD
                if(!$conexion){
                    echo    "<script>
                            alert('La conexion fallo');
                            </script>";
                }//Se comprueba si la conexion ha fallado o no.
                    $consulta="SELECT count(*) FROM equipos;";
                    $cantE=mysqli_query($conexion,$consulta);//Se ejecuta el query
                    $cantE=mysqli_fetch_array($cantE);
                    $cantE=$cantE[0];

                    $limite=mysqli_query($conexion,"select limiteEq from limite where id=1");//Consulta el limite de equipos establecidos para el torneo
                    $limite=mysqli_fetch_array($limite);
                    $limite=$limite[0];
?>
        <h2>Equipos Registrados: <?php echo $cantE?>/<?php echo $limite?></h2>
        <div class="con_equipos">
            <a class="agregar" id="mas" onclick="openPopup()"><img src="../../img/agregarE.png" alt="logo"></a>        
            <?php
                include("conexion.php");
                //Se llama al archivo que contiene las instrucciones 
                //para realizar la conexion al a BD
                if(!$conexion){
                    echo    "<script>
                            alert('La conexion fallo');
                            </script>";
                }//Se comprueba si la conexion ha fallado o no.
                $consulta="SELECT * FROM equipos";
                    $resultado=mysqli_query($conexion,$consulta);//Se ejecuta el query
                    if($resultado==true){
                        while ($row=$resultado->fetch_array()) {
                            $id=$row[0];//El resultado de la consulta devuelve un arreglo, que representa las columnas
                            $nombre=$row[1];//de la tabla
                            $no_jug=$row[2];
            
                            $nojug=mysqli_query($conexion,"select count(*) from jugadores where id_equipo= ".$id.";");
                            $nojug=mysqli_fetch_array($nojug);
                            $nojug=$nojug[0];
                            ?>
                        <div class="equipos" id="<?php echo $id ?>">                
                            <img src="../../img/team.png" alt="logo"><h2><?php echo $nombre ?></h1>
                            <h3><?php echo "Numero de jugadores :".$nojug ?></h1>
                            <h3 class="jug"><a class="addJug" href="jugadores.php?id=<?php echo $id ?>"> Ver Jugadores</a></h3>
                            <btn><a class="delete" href="eliminar.php?id=<?php echo $id ?>">Eliminar</a></btn>
                        </div>
                        <?php
                        }//Se comprueba si hay elementos en el resultado de la consulta 
                        
                    }//Se comprueba si se ejecuto correctamente el query
                ?>
        </div> 
        <h2>Jugadores Registrados:</h2>  
            
            <div class="jugadores-container" id="jugadoresContainer"></div>    
    </section>
    <script src="../scripts/sidesbar.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>

                //Poner los jugadores en el div de contenedor de jugadores

        $(document).ready(function() {
            $('.addJug').click(function(e) {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            var equipoId = $(this).closest('.equipos').attr('id'); // Obtener el id del equipo

            $.ajax({
                url: 'jugadores.php?id=' + equipoId,
                type: 'GET',
                success: function(response) {
                $('#jugadoresContainer').html(response); // Cargar el contenido en el contenedor
                },
                error: function() {
                alert('Error al cargar los jugadores');
                }
            });
            });
        });

    </script>
    <script>
        //hace un popup de el agregar equipos

        function openPopup() {
            var popup = document.getElementById("popup");
            popup.style.display = "block";

            var insertarContent = `
                <div>
                <h1>Agregar Equipo</h1>
                    <form class="form" method="POST" action="insertar.php">
                          <div class="inputbox">
                              <input type="text" name="name" required="required">
                              <span>Nombre del equipo:</span>                              
                           </div>    
                           <div class="inputbox">
                              <input type="int" min="6" max="15" name="noJugadores" required="required">
                              <span>Numero de jugadores:</span>                              
                           </div> 
                           
                           <div class="inputbox">
                              <input type="submit" class="enviar"></input>                             
                           </div>                                                
                    </form>
                </div>
            `;

            var popupContentContainer = document.getElementById("popup-content-container");
            popupContentContainer.innerHTML = insertarContent;
        }
        // Función para manejar los mensajes enviados desde el popup
        function handleMessage(event) {
            if (event.data === 'closePopup') {
                closePopup();
            }
        }

        // Agregar un evento para escuchar los mensajes enviados desde el popup
        window.addEventListener('message', handleMessage);

        function closePopup() {
            var popup = document.getElementById("popup");
            popup.style.display = "none";
        }
    </script>
    <script>
        function openPopup2() {
            var popup = document.getElementById("popup");
            popup.style.display = "block";

            var popupContent = `
            <div>
            <h1>Agregar Jugador</h1>
            <form class="form" method="POST" action="addJ.php">
                <div class="inputbox">
                <select name="equipo">
                <?php 
                    $resultado = mysqli_query($conexion, "SELECT * FROM equipos");
                    while ($fila = $resultado->fetch_array()) {
                        $id = $fila[0];
                        $nombre = $fila[1];
                        echo "<option value='$id'>$nombre</option>";
                    }
                    ?>
                </select>
                <span>Equipo</span>
                </div>
                <div class="inputbox">
                    <input  type="text" name="name" required="required">
                    <span>Nombre/s</span>
                </div>
                <div class="inputbox">
                    <input type="text" name="ap" required="required">
                    <span>Apellido paterno</span>
                </div>
                <div class="inputbox">
                    <input type="text" name="am" required="required">
                    <span>Apellido materno</span>
                </div>
                <div class="inputbox">
                    <input type="number" min="12" max="70" name="edad" required="required">
                    <span>Edad</span>
                </div>
                <div class="inputbox">
                    <input type="number" min="0000" max="9999" name="dorsal" required="required">
                    <span>Dorsal</span>
                </div>
                <div class="inputbox">
                    <button type="submit" class="enviar">Agregar</button>
                </div>
            </form>
            </div>
            `;

            var popupContentContainer = document.getElementById("popup-content-container");
            popupContentContainer.innerHTML = popupContent;
        }

        function handleMessage(event) {
            if (event.data === 'closePopup') {
            closePopup2();
            }
        }

        window.addEventListener('message', handleMessage);

        function closePopup2() {
            var popup = document.getElementById("popup");
            popup.style.display = "none";
        }
    </script>
</body>
</html>