<!-- METHOD TO GET DOG BEFORE RENDER -->
<!-- include("../config/db_connect.php");
$result = mysqli_query($conn, "SELECT * FROM dog");
if($result) {
    $out = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $out[$row['fieldname']] = $row['content'];
    }
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn); -->

<?php
include("../config/db_connect.php");

if (isset($_GET['action'])) {
    // ADD DOG
    if ($_GET['action'] == 'add_dog') {
        $id = $_GET['id'];
        $name = $_POST['name'];
        $gender = $_POST['gender'];
        $price = $_POST['price'];
        $birthday = $_POST['birthday'];
        $isVaccinated = $_POST['isVaccinated'];
        $cert = $_POST['cert'];
        $microchip = $_POST['microchip'];
        $isSell = $_POST['isSell'];
        $informationMore = $_POST['informationMore'];
        // $idOrder = $_POST['idOrder'];

        $sql = "INSERT INTO dogs(id, name, gender, price, birthday, isVaccinated, cert, microchip, isSell, informationMore) VALUES('$id','$name', '$gender', '$price', '$birthday', '$isVaccinated', '$cert', '$microchip', '$isSell', '$informationMore')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            // echo json_encode(array("statusCode" => 200));
            $respone = "Thêm sản phẩm thành công";
        } else {
            $respone = "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        mysqli_close($conn);
    }
    // UPDATE DOG
    if ($_GET['action'] == 'update_dog') {
        $id = $_GET['id'];
        $name = $_POST['name'];
        $gender = $_POST['gender'];
        $price = $_POST['price'];
        $birthday = $_POST['birthday'];
        $isVaccinated = $_POST['isVaccinated'];
        $cert = $_POST['cert'];
        $microchip = $_POST['microchip'];
        $isSell = $_POST['isSell'];
        $informationMore = $_POST['informationMore'];
        $idOrder = $_POST['idOrder'];
        $comment = $_POST['comment'];

        $sql = "UPDATE dogs SET id='$id', name='$name', gender='$gender', price='$price', birthday='$birthday', isVaccinated='$isVaccinated', cert='$cert', microchip='$microchip', isSell='$isSell', informationMore='$informationMore', idOrder='$idOrder', comment='$comment' WHERE id=$id";

        $result = mysqli_query($conn, $sql);

        if ($result) {
            // echo json_encode(array("statusCode" => 200));
            $respone = "Chỉnh sửa thông tin sản phẩm thành công";
        } else {
            $respone = "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
    // DELETE DOG
    if ($_GET['action'] == 'delete_dog') {
        $id = $_GET['id'];

        $sql = "DELETE FROM dogs WHERE id=$id";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            // echo json_encode(array("statusCode" => 200));
            $respone = "Xóa sản phẩm thành công";
        } else {
            $respone = "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
}
