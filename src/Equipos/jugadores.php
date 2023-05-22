<a  class="agregar" id="mas" onclick="openPopup2()"><img src="../../img/agregar.png" alt="logo"></a>                            
    <?php   
    include("conexion.php");
    $id=$_GET['id'];

    $consulta="select * from jugadores where id_equipo=".$id.";";
    $resultado=mysqli_query($conexion,$consulta);//Se ejecuta el query
        if($resultado==true){
            while ($row=$resultado->fetch_array()) {
                $idJ=$row[1];//El resultado de la consulta devuelve un arreglo, que representa las columnas
                $nombre=$row[2];//de la tabla
                $ap=$row[3];
                $am=$row[4];
                $edad=$row[5];
                $dorsal=$row[6];
                ?>

        <div class="jugador">
        <img src="../../img/futbol.png" alt="logo" class="logo">
            <h3>Dorsal: <?php echo $dorsal; ?></h3>
            <h3>Nombre: <?php echo $nombre; ?></h3>
            <h3>Apellido Paterno: <?php echo $ap; ?></h3>
            <h3>Apellido Materno: <?php echo $am; ?></h3>
            <h3>Edad: <?php echo $edad; ?></h3>
            <btn><a class="delete" href="eliminarJ.php?id=<?php echo $idJ ?>&idA=<?php echo $id; ?>">Eliminar</a></btn>
            
        </div>
            
        
        <?php
               }//Se comprueba si hay elementos en el resultado de la consulta 
            }else{
                ?>
            <script> alert('La consulta no se realizo');</script>
            <?php
        }
        
        ?>
       
