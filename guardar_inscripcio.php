<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['missatge'];

    // Formato de los datos para guardar
    $datos = "Nom: $nombre\nCorreu electrònic: $email\nMissatge: $mensaje\n\n";

    // Ruta del archivo donde guardaremos los datos
    $archivo = 'https://formspree.io/f/mjkyawaa';

    // Guardar los datos en el archivo
    file_put_contents($archivo, $datos, FILE_APPEND);

    // Redirigir al usuario a una página de confirmación o mostrar un mensaje de éxito
    echo "Gràcies per inscriure't! El teu missatge ha estat enviat.";
}
?>
