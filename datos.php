<?php
include("conexion.php");

//Limpiar los texto ANTI SQL INYECTION

function limpiar_cadena($conexion, $input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = mysqli_real_escape_string($conexion, $input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

$nombre = limpiar_cadena($conexion, $_POST['nombre']);
$telefono = limpiar_cadena($conexion, $_POST['telefono']);
$correo = limpiar_cadena($conexion, $_POST['correo']);
$mensaje = limpiar_cadena($conexion, $_POST['mensaje']);
$metodo = limpiar_cadena($conexion, $_POST['metodo']);
$interes = limpiar_cadena($conexion, $_POST['interes']);


$consulta = "INSERT INTO contact (nombre,telefono,correo,mensaje,metodo,interes) VALUES ('$nombre','$telefono', '$correo', '$mensaje','$metodo','$interes')";

// Ejecutar la consulta INSERT
$resultado = mysqli_query($conexion, $consulta);

// Verificar si la inserción fue exitosa
if ($resultado) {
    header("Location: index.html");
} else {
    echo "Error al insertar los datos: " . mysqli_error($conexion);
}

mysqli_close($conexion);


?>