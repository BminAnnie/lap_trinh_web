<?php
session_start();
include("../../config/db_connect.php");

switch ($method) {
    case 'GET':
        if (isset($_GET['action'])) {
            // GET ALL PRODUCT IN CART
            if ($_GET['action'] == 'get_all') {
                foreach ($_SESSION['cart'] as $cart_item) {
                    $product[] = array('name' => $cart_item['name'], 'id' => $cart_item['id'], 'quantity' => $quantity, 'price' => $cart_item['price'], 'image' => $cart_item['image']);
                }
            }
            echo json_encode($product);
            mysqli_close($conn);
        }
        break;
    case 'POST':
        if (isset($_POST['action'])) {
            // ADD PRODUCT TO CART
            if ($_GET['action'] == 'add') {
                $id = $_POST['id']; // id of dog
                $quantity = $_POST['quantity'];
                $sql = "SELECT * FROM 'product' WHERE id=$id";
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_array($result);
                if ($row) {
                    $new_product = array(array('id' => $row['id'], 'name' => $row['name'], 'quantity' => $quantity, 'price' => $row['price'], 'image' => $row['image']));

                    if (isset($_SESSION['cart'])) {
                        $found = false;
                        foreach ($_SESSION['cart'] as $cart_item) {
                            if ($cart_item['id'] == $id) {
                                $product[] = array('name' => $cart_item['name'], 'id' => $cart_item['id'], 'quantity' => $cart_item['quantity'] + 1, 'price' => $cart_item['price'], 'image' => $cart_item['image']);
                                $found = true;
                            } else {
                                $product[] = array('name' => $cart_item['name'], 'id' => $cart_item['id'], 'quantity' => $quantity, 'price' => $cart_item['price'], 'image' => $cart_item['image']);
                            }
                        }
                        if ($found == false) {
                            $_SESSION['cart'] = array_merge($product, $new_product);
                        } else {
                            $_SESSION['cart'] = $new_product;
                        }
                    } else {
                        $_SESSION['cart'] = $new_product;
                    }
                }
                echo json_encode(array("status" => 200));
                mysqli_close($conn);
            }
            // EDIT CART ITEM
            if ($_POST['action'] == 'edit') {
                $id = $_POST['id'];
                $quantity = $_POST['quantity'];
                foreach ($_SESSION['cart'] as $cart_item) {
                    if ($cart_item['id'] == $id) {
                        $product[] = array('name' => $cart_item['name'], 'id' => $cart_item['id'], 'quantity' => $quantity, 'price' => $cart_item['price'], 'image' => $cart_item['image']);
                    }
                }
                $_SESSION['card'] = $product;
                echo json_encode(array("status" => 200));
            }
            // DELETE CART ITEM
            if ($_POST['action'] == 'delete') {
                $id = $_POST['id'];
                foreach ($_SESSION['cart'] as $cart_item) {
                    if ($cart_item['id'] != $id) {
                        $product[] = array('name' => $cart_item['name'], 'id' => $cart_item['id'], 'quantity' => $cart_item['quantity'], 'price' => $cart_item['price'], 'image' => $cart_item['image']);
                    }
                }
                $_SESSION['card'] = $product;
                echo json_encode(array("status" => 200));
            }
            // DELETE ALL PRODUCT IN CART
            if ($_POST['action'] == 'delete_all') {
                unset($_SESSION['cart']);
                echo json_encode(array("status" => 200));
            }
        }
        break;
}
