<?php
include("conexion.php");

// Limpiar los textos ANTI SQL INYECTION
function limpiar_cadena($conexion, $input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = mysqli_real_escape_string($conexion, $input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

// Recuperar el nombre de la solicitud POST o GET
$nombre_a_buscar = limpiar_cadena($conexion, $_POST['nombre']); // Puedes cambiar a $_GET si es necesario

// Consulta para recuperar los datos asociados al nombre
$consulta = "SELECT telefono, correo, mensaje, metodo, interes FROM contact WHERE nombre = '$nombre_a_buscar'";

// Ejecutar la consulta SELECT
$resultado = mysqli_query($conexion, $consulta);

// Verificar si la consulta fue exitosa
if ($resultado) {
    // Obtener los datos recuperados
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $telefono = $fila['telefono'];
        $correo = $fila['correo'];
        $mensaje = $fila['mensaje'];
        $metodo = $fila['metodo'];
        $interes = $fila['interes'];

        // Puedes imprimir o utilizar los datos como desees
        echo "Nombre: $nombre_a_buscar<br>";
        echo "Teléfono: $telefono<br>";
        echo "Correo: $correo<br>";
        echo "Mensaje: $mensaje<br>";
        echo "Método: $metodo<br>";
        echo "Interés: $interes<br>";
    }

    // Liberar el resultado
    mysqli_free_result($resultado);
} else {
    echo "Error al realizar la consulta: " . mysqli_error($conexion);
}


mysqli_close($conexion);
?> 
