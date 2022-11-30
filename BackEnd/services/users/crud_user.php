<?php
include("../../config/db_connect.php");

switch ($method) {
    case 'GET':
        if (isset($_GET['action'])) {
            // GET ALL USER
            if ($_GET['action'] == 'get_all_user') {
                $result = mysqli_query($conn, "SELECT * FROM users WHERE role='2'");
            }
            // GET ALL ADMIN
            if ($_GET['action'] == 'get_all_admin') {
                $result = mysqli_query($conn, "SELECT * FROM users WHERE role='1'");
            }
            // GET ALL 
            if ($_GET['action'] == 'get_all') {
                $result = mysqli_query($conn, "SELECT * FROM users");
            }
            $result = mysqli_fetch_all($result);
            mysqli_close($conn);
            echo json_encode($result);
        }
        break;
    case 'POST':
        // ADD ADMIN
        if (isset($_POST['action'])) {
            // ADD ADMIN
            if ($_POST['action'] == 'add_admin') {
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
                    $query = "INSERT INTO users(username, password, fullname, role) VALUES('$username','$password','$username','1')";
                    $result = mysqli_query($conn, $query);
                    if ($result) {
                        $_SESSION['role'] = 1; //admin
                        echo json_encode(array("status" => 200));
                    } else {
                        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                    }
                }
                mysqli_close($conn);
            }
        }
        // EDIT INFO
        if (isset($_POST['action']) && $_POST['action'] == 'edit_info') {
            $id = $_POST['id'];
            $password = $_POST['password'];
            $fullname = $_POST['fullname'];
            $image = $_POST['image'];
            $phone = $_POST['phone'];
            $address = $_POST['address'];

            var_dump($id);

            $query = "UPDATE users SET  fullname='$fullname', password='$password', image='$image', phone='$phone', address='$address' WHERE id='$id'";
            $result = mysqli_query($conn, $query);
            if ($result) {
                $_SESSION['username'] = $username;
                $_SESSION['password'] = $password;
                $_SESSION['fullname'] = $fullname;
                echo json_encode(array("status" => 200));
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }

            mysqli_close($conn);
        }
        // DELETE USER | ADMIN
        if (isset($_POST['action']) && $_POST['action'] == 'delete') {
            $id = $_POST['id'];
            $sql = "DELETE FROM `users` WHERE id=$id";
            $result = mysqli_query($conn, $sql);

            if ($result) {
                echo json_encode(array("status" => 200));
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
        break;
}
