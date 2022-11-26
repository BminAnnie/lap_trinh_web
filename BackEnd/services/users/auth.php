<?php
session_start();

if (isset($_GET['action'])) {
    // REGISTER
    if ($_GET['action'] == 'register') {
        include("../config/db_connect.php");
        // CHECK USERNAME & PASSWORD
        if ($_POST['username'] == "") {
            if ($_POST['password'] == "") {
                $errors['username'] = 'Username is required';
                $errors['password'] = 'Password is required';
                return;
            } else {
                $errors['username'] = 'Username is required';
                return;
            }
        } else if ($_POST['password'] == "") {
            $errors['password'] = 'Password is required';
            return;
        }

        if (!isset($_POST['username']) || !isset($_POST['password']) || !isset($_POST['confirmPw'])) {
            $errors['username'] = 'Wrong password, username.';
            $errors['password'] = 'Wrong password, username.';
            return;
        }

        $username = $_POST['username'];
        $password = $_POST['password'];
        $confirmPw = $_POST['confirmPw'];

        // CHECK SPACE
        for ($i = 0; $i < strlen($username); $i++) {
            if ($username[$i] == ' ') {
                $errors['username'] = "No space in username!";
                return;
            }
        }

        for ($i = 0; $i < strlen($password); $i++) {
            if ($password[$i] == ' ') {
                $errors['password'] = "No space in password!";
                return;
            }
        }

        // CHECK CONFIRM PASSWORD
        if ($confirmPw !== $password) {
            $errors['confirmPw'] = "Confirm password is wrong!";
            return;
        }

        // CHECK ACCOUNT IS EXISTED
        $query = "SELECT `username` FROM `users` WHERE `username` = '$username'";
        $result = mysqli_query($conn, $query);
        $result = mysqli_fetch_row($result);
        if ($result) {
            $errors['isExisted'] = "Username is existed";
        } else {
            $query = "INSERT INTO users(username, password, fullname, role) VALUES('$username','$password','$username','2')";
            $result = mysqli_query($conn, $query);
            if ($result) {
                $response = "Đăng ký thành công";
                // header("Location: ./login.php");
            } else {
                $response = "Đăng ký thất bại";
            }
        }
        mysqli_close($conn);
    }
    // LOGIN
    if ($_GET['action'] == 'login') {
        include("../config/db_connect.php");
        // CHECK USERNAME AND PASSWORD
        if ($_POST['username'] == "") {
            if ($_POST['password'] == "") {
                $errors['username'] = 'Username is required';
                $errors['password'] = 'Password is required';
                return;
            } else {
                $errors['username'] = 'Username is required';
                return;
            }
        } else if ($_POST['password'] == "") {
            $errors['password'] = 'Password is required';
            return;
        }

        if (!isset($_POST['username']) || !isset($_POST['password'])) {
            $errors['username'] = 'Wrong password, username.';
            $errors['password'] = 'Wrong password, username.';
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
            $response = "Đăng nhập thành công";
            // REDIREC TO HOMEPAGE
            header("Location: ./homepage.php");
        } else {
            $response = "Đăng nhập thất bại";
        }
    }
    // CHANGE INFO 
    if ($_GET['action'] == 'change_info') {
        include("../config/db_connect.php");
        $result = "";

        $id = $_GET['id']; //GET ID_USER
        $password = $_POST['password'];
        $fullname = $_POST['fullname'];
        $image = $_POST['image'];
        $address = $_POST['address'];

        // CHECK NEW PASSWORD
        for ($i = 0; $i < strlen($password); $i++) {
            if ($password[$i] == ' ') {
                $errors['password'] = "No space in password!";
                return;
            }
        }

        $query = "UPDATE users SET `password`='$password', `fullname`='$fullname', `image`='$image', `address`='$address' WHERE `id` = '$id';";
        $result = mysqli_query($conn, $query);
        if ($result) {
            $_SESSION['username'] = $username;
            $_SESSION['password'] = $password;
            $_SESSION['fullname'] = $fullname;
            $response = "Chỉnh sửa thành công";
            // echo json_encode("");
        } else {
            // echo json_encode("Wrong");
            $response = "Chỉnh sửa thất bại";
        }

        mysqli_close($conn);
    }
    // LOGOUT
    if ($_GET['action'] == 'logout') {
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
    // HANDLE BUY, CONTACT, COMMENT,...
    if ($_GET['action'] == 'guest') {
        if (!isset($_SESSION['userID'])) {
            // REDIRECT TO LOGIN PAGE
            header("location:./login.php");
            return;
        }
        include("../config/db_connect.php");

        $result = mysqli_query($con, "SELECT * FROM users WHERE id = {$_SESSION['userID']} ");
        $result = mysqli_fetch_assoc($result);
        mysqli_close($conn);
        echo json_encode($result);
    }
}
