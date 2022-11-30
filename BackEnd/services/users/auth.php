<?php
session_start();
include("../../config/db_connect.php");

switch ($method) {
    case 'GET':
        if (!isset($_SESSION['userID'])) {
            header("location:../test/login.php");
            return;
        }
        $result = mysqli_query($conn, "SELECT * FROM users WHERE id = {$_SESSION['userID']} ");
        $result = mysqli_fetch_assoc($result);

        mysqli_close($conn);
        echo json_encode($result);
        break;
    case 'POST':
        if (isset($_POST['action'])) {
            // REGISTER || ADD_USER
            if ($_POST['action'] == 'register') {

                if (!isset($_POST['username']) || !isset($_POST['password']) || !isset($_POST['confirmPw'])) {
                    echo json_encode("Wrong password, username.");
                    return;
                }

                $username = $_POST['username'];
                $password = $_POST['password'];
                $confirmPw = $_POST['confirmPw'];

                // CHECK ACCOUNT IS EXISTED
                $query = "SELECT `username` FROM `users` WHERE `username` = '$username'";
                $result = mysqli_query($conn, $query);
                $result = mysqli_fetch_row($result);
                if ($result) {
                    echo json_encode("Username exist");
                } else {
                    $query = "INSERT INTO users(username, password, fullname, role) VALUES('$username','$password','$username','2')";
                    $result = mysqli_query($conn, $query);
                    if ($result) {
                        $_SESSION['role'] = 2; //user
                        echo json_encode(array("status" => 200));
                    } else {
                        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                    }
                }
                mysqli_close($conn);
            }
            // LOGIN
            if ($_POST['action'] == 'login') {
                include("../../config/db_connect.php");
                // CHECK USERNAME AND PASSWORD

                if (!isset($_POST['username']) || !isset($_POST['password'])) {
                    echo json_encode("Wrong password, username.");
                    return;
                }

                $username = $_POST['username'];
                $password = $_POST['password'];
                // QUERY OPTIONS
                $query = "SELECT `role`,`id`,`fullname` FROM `users` WHERE `username` = '$username' and `password` = '$password' ";
                $result = mysqli_query($conn, $query);
                $result = mysqli_fetch_row($result);

                mysqli_close($conn);
                if ($result) {
                    $_SESSION['role'] = (int)$result[0];
                    $_SESSION['userID'] = $result[1];
                    $_SESSION['username'] = $username;
                    $_SESSION['password'] = $password;
                    $_SESSION['fullname'] = $result[2];

                    setcookie('username', $_SESSION['username'], time() + (86400), "/");
                    setcookie('role', $_SESSION['role'], time() + (86400), "/");
                    setcookie('userID', $result[1], time() + (86400), "/");
                    // echo (json_encode(['role' => $result[0], 'id' => $result['1'], 'username' => $result[2]]));
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
            }
            // LOGOUT
            if ($_POST['action'] == 'logout') {
                session_destroy();
                if (isset($_COOKIE['username'])) {
                    unset($_COOKIE['username']);
                    setcookie('username', null, -1, '/');
                }
                if (isset($_COOKIE['fullname'])) {
                    unset($_COOKIE['fullname']);
                    setcookie('fullname', null, -1, '/');
                }
                if (isset($_COOKIE['role'])) {
                    unset($_COOKIE['role']);
                    setcookie('role', null, -1, '/');
                }
                if (isset($_COOKIE['userID'])) {
                    unset($_COOKIE['userID']);
                    setcookie('userID', null, -1, '/');
                }
                if (isset($_COOKIE['password'])) {
                    unset($_COOKIE['password']);
                    setcookie('password', null, -1, '/');
                }
                // REDIREC TO LOGIN FORM
                header("location:../login.php");
            }
        }
        break;
}
