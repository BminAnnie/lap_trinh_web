
<?php
include("../../config/db_connect.php");

switch ($method) {
    case 'GET':
        if (isset($_GET['action'])) {
            // GET ALL PRODUCT
            if ($_GET['action'] == 'get_all') {
                $result = mysqli_query($conn, "SELECT * FROM contacts");
            }
            $result = mysqli_fetch_all($result);
            mysqli_close($conn);
            echo json_encode($result);
        }
        break;
    case 'POST':
        if (isset($_POST['action'])) {
            // ADD CONTACT
            if ($_POST['action'] == 'add') {
                if (!isset($_POST['username']) || !isset($_POST['phone']) || !isset($_POST['address']) || !isset($_POST['content'])) {
                    echo json_encode("Wrong contact");
                    return;
                }

                $username = $_POST['username'];
                $phone = $_POST['phone'];
                $address = $_POST['address'];
                $content = $_POST['content'];

                $query = "INSERT INTO contacts(username, phone, address, content) VALUES('$username','$phone','$address','$content')";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }

                mysqli_close($conn);
            }
            // EDIT CONTACT
            if ($_POST['action'] == 'edit') {
                if (!isset($_POST['username']) || !isset($_POST['phone']) || !isset($_POST['address']) || !isset($_POST['content'])) {
                    echo json_encode("Wrong contact");
                    return;
                }

                $username = $_POST['username'];
                $phone = $_POST['phone'];
                $address = $_POST['address'];
                $content = $_POST['content'];

                $query = "UPDATE contacts SET phone='$phone', address='$address', content='$content' WHERE username='$username'";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
                mysqli_close($conn);
            }
            // DELETE CONTACT
            if ($_POST['action'] == 'delete') {
                $id = $_POST['id'];
                $sql = "DELETE FROM `contacts` WHERE id=$id";
                $result = mysqli_query($conn, $sql);

                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
            }
        }
        break;
}
