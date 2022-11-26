<!-- This file is used for contact form -->

<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    include "../../config/db_connect.php";
    $result = mysqli_query($conn, "SELECT * FROM contact");
    $out = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $out[$row['fieldname']] = $row['content'];
    }
    mysqli_close($conn);
    echo json_encode($out);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    include "../../config/db_connect.php";
    $params = explode('/', trim($_SERVER['PATH_INFO'], '/'));

    if (!isset($params[0])) {
        mysqli_close($conn);
        echo json_encode("Loi, vui long thu lai");
        return;
    }

    $result = mysqli_query($conn, "DELETE FROM contact WHERE `fieldname` = '$params[0]'");


    if ($result === TRUE) {
        mysqli_close($conn);
        echo json_encode('Xoa thanh cong');
    } else {
        echo json_encode("Loi: " . $conn->error);
        mysqli_close($conn);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents('php://input'), $_PUT);
    $fieldname = $_PUT['fieldname'];
    $content = $_PUT['content'];

    if ($content === '') {
        echo json_encode('Noi dung cap nhat rong');
        return;
    }
    include "../../config/db_connect.php";
    $result = mysqli_query($conn, "SELECT * FROM contact WHERE `fieldname`='$fieldname'");
    if ($result->num_rows == 0) {
        $out = mysqli_query($conn, "INSERT INTO contact(fieldname, content) VALUES ('$fieldname','$content');");
        if ($out === TRUE) {
            echo json_encode("Cap nhat thanh cong");
            mysqli_close($conn);
        } else {
            echo json_encode("Loi: " . $conn->error);
            mysqli_close($conn);
        }
        return;
    }

    $result = mysqli_query($conn, "UPDATE contact SET content='$content' WHERE fieldname='$fieldname'");

    if ($result === TRUE) {
        echo json_encode("Cap nhat thanh cong");
        mysqli_close($conn);
    } else {
        echo json_encode("Loi: " . $conn->error);
        mysqli_close($conn);
    }
}
