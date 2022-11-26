<!-- METHOD TO GET CART ITEM BEFORE RENDER -->

<!--
 -->

<!-- Lưu ý: cột out['role'] để phân biệt user hay admin mà render -->
<?php
include("../config/db_connect.php");

if (isset($_POST['action'])) {
    // ADD DOG TO CART
    if ($_GET['action'] == 'add_to_cart') {
        include("../config/db_connect.php");
        $id = $_GET['id']; // id of dog
        $quantity = $_POST['quantity'];
        $sql = "SELECT * FROM dog WHERE id=$id";
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
        // header("Location: gio_hang.php");
        mysqli_close($conn);
    }
    // DELETE ALL DOG IN CART
    if ($_GET['action'] == 'delete_cart') {
        unset($_SESSION['cart']);
        // header("Location: gio_hang.php");
    }
    // DELETE CART ITEM
    if ($_GET['action'] == 'delete_cart_item') {
        $id = $_GET['delete_order'];
        foreach ($_SESSION['cart'] as $cart_item) {
            if ($cart_item['id'] != $id) {
                $product[] = array('name' => $cart_item['name'], 'id' => $cart_item['id'], 'quantity' => $cart_item['quantity'], 'price' => $cart_item['price'], 'image' => $cart_item['image']);
            }
        }
        $_SESSION['card'] = $product;
        // header("Location: gio_hang.php");
    }
}
