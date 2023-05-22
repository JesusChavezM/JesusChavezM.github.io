<?php 
include("../Equipos/conexion.php");

$consulta="SELECT count(*) FROM equipos;";
$cantE=mysqli_query($conexion,$consulta);//Se ejecuta el query
$cantE=mysqli_fetch_array($cantE);
$cantE=$cantE[0];

$limite=mysqli_query($conexion,"select limiteEq from limite where id=1");//Consulta el limite de equipos establecidos para el torneo
$limite=mysqli_fetch_array($limite);
$limite=$limite[0];

if ($cantE>$limite){
    ?>
    <script>alert ("Ya se alcanzo el limite de equipos")</script> 
    <h1>El numero de equipos excede el limite de equipos permitidos</h1>
    <a href="crear.php">REGRESAR</a>   
    <?php
    
    }else{
    
        $numEquipos=mysqli_query($conexion,"SELECT COUNT(*) AS total_registros FROM equipos;");//Consulta el numero de equipos
        $numEquipos=mysqli_fetch_array($numEquipos);//Mete el resultado en un arreglo (solo de una posicion en este caso)
        $numEquipos=$numEquipos[0];//Se extrae el resultado de la primera posicion del arreglo

        $id_team=mysqli_query($conexion, "select id from equipos;");

        $arregloi_id=[];

        $j=0;
            while($fila=mysqli_fetch_array($id_team)){
                $arregloi_id[$j]=$fila[0];
                $j++;
            }
    }
    
    for ($i=0; $i < $numEquipos; $i++) { 
        $nojug=mysqli_query($conexion,"select count(*) from jugadores where id_equipo= ".$arregloi_id[$i].";");
        $nojug=mysqli_fetch_array($nojug);
        $nojug=$nojug[0];
    
        if($nojug<6){
            $nomE=mysqli_query($conexion,"select nombre from equipos where id= ".$arregloi_id[$i].";");
            $nomE=mysqli_fetch_array($nomE);
            $nomE=$nomE[0];
            mysqli_query($conexion," set SQL_SAFE_UPDATES=0");
            mysqli_query($conexion,"delete from partido;");
            //header("Location: creacion.php");
            echo "<h1>El equipo: ".$nomE." no cuenta con suficientes jugadores (minimo 6)</h1>";
            echo "<a href='crear.php'>Volver</a>";
            die();
        }else{
            for ($x=0; $x < $numEquipos - 1 ; $x++) { 
        
                $a=$x+1;
                while ($a < $numEquipos) {
                    mysqli_query($conexion,"insert into partido (id_equipo1, id_equipo2, goles_eq1, goles_eq2) values (".$arregloi_id[$x].",".$arregloi_id[$a].",0,0)");
                    $a++;
                }
            } 
        
            
        }
    }

    header("Location: crear.php");





?>