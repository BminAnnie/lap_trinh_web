<!-- METHOD TO GET ADMIN || USER BEFORE RENDER -->
<!-- include("../config/db_connect.php");
$result = mysqli_query($conn, "SELECT * FROM users");
if($result) {
    $out = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $out[$row['fieldname']] = $row['content'];
    }
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn); -->

<!-- Lưu ý: cột out['role'] để phân biệt user hay admin mà render -->
<?php
include("../config/db_connect.php");

if (isset($_POST['action'])) {
    // ADD USER_ADMIN
    if ($_GET['action'] == 'add_admin') {
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
            $query = "INSERT INTO users(username, password, fullname, role) VALUES('$username','$password', '$username', '1')";
            $result = mysqli_query($conn, $query);
            if ($result) {
                $response = "Thêm admin thành công";
                // header("Location: ./login.php");
            } else {
                $response = "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
        mysqli_close($conn);
    }
    // CHANGE INFO ADMIN
    if ($_GET['action'] == 'change_info_admin') {
        include("../config/db_connect.php");
        $result = "";

        $id = $_GET['id']; //GET ID_ADMIN
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
            $response = "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
    // DELETE ADMIN || USER
    if ($_GET['action'] == 'delete_admin' || $_GET['action'] == 'delete_user') {
        $id = $_GET['id'];

        $sql = "DELETE FROM user WHERE id=$id";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            // echo json_encode(array("statusCode" => 200));
            $response = "Xóa thành công";
        } else {
            $response = "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}
