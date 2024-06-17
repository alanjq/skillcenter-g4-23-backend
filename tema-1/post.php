<?php
    $nombre = $_POST['texto_nombre'];
    $apellido = $_POST['texto_apellido'];

    echo "Nombre completo: " . $nombre . " " . $apellido;
?>

<h1>Formulario recibido por PHP</h1>
<div>
    <form>
        <label>Nombre:</label><input type="text" name="texto_nombre" value="<?php echo $nombre; ?>" readonly />
        <br/>
        <label>Apellido:</label><input type="text" name="texto_apellido" value="<?=$apellido?>" readonly />
    </form>
</div>
