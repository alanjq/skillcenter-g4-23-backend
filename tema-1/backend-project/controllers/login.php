<?php

session_start();
include '../global/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION['user_id'] = $id;
            $_SESSION['email'] = $email;
            header("Location: welcome.php");
            exit;
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "No se encontró un usuario con ese email.";
    }

    $stmt->close();
    $conn->close();
}
?>
