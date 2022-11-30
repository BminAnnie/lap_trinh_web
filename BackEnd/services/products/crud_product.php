<?php
include("../../config/db_connect.php");
switch ($method) {
    case 'GET':
        if (isset($_GET['action'])) {
            // GET ALL PRODUCT
            if ($_GET['action'] == 'get_all') {
                $result = mysqli_query($conn, "SELECT * FROM products");
            }
            $result = mysqli_fetch_all($result);
            mysqli_close($conn);
            echo json_encode($result);
        }
        break;
    case 'POST':
        if (isset($_POST['action'])) {
            // ADD NEW PRODUCT
            if ($_POST['action'] == 'add') {
                $name = $_POST['name'];
                $gender = $_POST['gender'];
                $price = $_POST['price'];
                $birthday = $_POST['birthday'];
                $isSell = $_POST['isSell'];
                $microchip = $_POST['microchip'];
                $informationMore = $_POST['informationMore'];
                $isVaccinated = $_POST['isVaccinated'];
                $quantity = $_POST['quantity'];

                $query = "INSERT INTO products(`name`, `gender`, `price`, `birthday`, `issell`, `microchip`, `informationMore`, `isVaccinated`, `quantity`) VALUES('$name', '$gender', '$price', '$birthday', '$issell', '$microchip', '$informationMore', '$isVaccinated', '$quantity')";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
                mysqli_close($conn);
            }
            // EDIT PRODUCT
            if ($_POST['action'] == 'edit') {
                $id = $_POST['id'];
                $name = $_POST['name'];
                $gender = $_POST['gender'];
                $price = $_POST['price'];
                $birthday = $_POST['birthday'];
                $isSell = $_POST['isSell'];
                $microchip = $_POST['microchip'];
                $informationMore = $_POST['informationMore'];
                $isVaccinated = $_POST['isVaccinated'];
                $quantity = $_POST['quantity'];

                $query = "UPDATE products SET name='$name', gender='$gender', price='$price', birthday='$birthday', issell='$isSell', microchip='$microchip', informationMore='$informationMore', isVaccinated='$isVaccinated', quantity='$quantity' WHERE id='$id'";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }

                mysqli_close($conn);
            }
            // DELETE PRODUCT
            if ($_POST['action'] == 'delete') {
                $id = $_POST['id'];
                $sql = "DELETE FROM `products` WHERE id=$id";
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
