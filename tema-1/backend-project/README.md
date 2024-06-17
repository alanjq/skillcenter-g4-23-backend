# Proyecto de Autenticación

> Sergio Zúñiga
>
> https://github.com/SzunigaDev/backend-project.git

Este proyecto es una aplicación simple de autenticación con formularios de inicio de sesión y registro, utilizando PHP y MySQL. La interfaz de usuario está diseñada con Bootstrap.

## Requisitos

- PHP 7.4 o superior
- MySQL 5.7 o superior
- Servidor web (Apache recomendado)
- [XAMPP](https://www.apachefriends.org/index.html) (opcional, pero recomendado para un entorno de desarrollo fácil)

## Configuración de la Base de Datos

1. **Crear la Base de Datos**

   Primero, crea una base de datos llamada `sesion1`. Puedes hacerlo usando phpMyAdmin o la línea de comandos de MySQL.

   ```sql
   CREATE DATABASE sesion1;

2. **Crear la Tabla de Usuarios**

A continuación, crea la tabla users dentro de la base de datos sesion1. Esta tabla almacenará la información de los usuarios registrados.

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

# Estructura del Proyecto
```arduino
C:.
├───controllers
│       login.php
│       register.php
│       welcome.php
│       logout.php
│
├───global
│       config.php
│
├───static
│       background.svg
│
└───views
        index.html
        register.html
```

# Uso
- Inicio de Sesión.- Completa el formulario de inicio de sesión en index.html con tu email y contraseña registrados.

- Registro de Cuenta.-Si no tienes una cuenta, usa register.html para crear una nueva cuenta. Ingresa tu dirección de email y una contraseña segura.

- Cerrar Sesión.- Puedes cerrar sesión haciendo clic en el botón "Cerrar Sesión" en la página de bienvenida.