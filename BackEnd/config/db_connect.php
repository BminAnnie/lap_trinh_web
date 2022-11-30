<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db";
$conn = mysqli_connect($servername, $username, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
