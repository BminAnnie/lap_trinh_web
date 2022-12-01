
<?php
include("../../config/db_connect.php");

switch ($method) {
    case 'GET':
        if (isset($_GET['action'])) {
            // GET ALL ORDERS
            if ($_GET['action'] == 'get_all') {
                $result = mysqli_query($conn, "SELECT * FROM orders");
            }
            $result = mysqli_fetch_all($result);
            mysqli_close($conn);
            echo json_encode($result);
        }
        break;
    case 'POST':
        if (isset($_POST['action'])) {
            // ADD ORDERS
            if ($_POST['action'] == 'add') {
                if (!isset($_POST['username']) || !isset($_POST['phone']) || !isset($_POST['address']) || !isset($_POST['content'])) {
                    echo json_encode("Wrong order");
                    return;
                }

                $username = $_POST['username'];
                $phone = $_POST['phone'];
                $address = $_POST['address'];
                $productName = $_POST['productName'];
                $image = $_POST['image'];
                $quantity = $_POST['quantity'];
                $comment = $_POST['comment'];

                $query = "INSERT INTO orders(username, phone, address, productName, image, quantity, comment) VALUES('$username','$phone','$address','$productName','$image','$quantity', '$comment')";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }

                mysqli_close($conn);
            }
            // EDIT ORDERS
            if ($_POST['action'] == 'edit') {
                if (!isset($_POST['id']) || !isset($_POST['status'])) {
                    echo json_encode("Wrong edit order");
                    return;
                }

                $id = $_POST['id'];
                $status = $_POST['status'];

                $query = "UPDATE orders SET status='$status' WHERE id='$id'";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
                mysqli_close($conn);
            }
            // DELETE ORDERS
            if ($_POST['action'] == 'delete') {
                $id = $_POST['id'];
                $sql = "DELETE FROM `orders` WHERE id=$id";
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
