<!-- $response is declared in file which call this file -->

<!-- METHOD TO GET BLOGS BEFORE RENDER -->
<!-- include("../config/db_connect.php");
$result = mysqli_query($conn, "SELECT * FROM blogs");
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
session_start();

if (isset($_GET['action'])) {
    // ADD BLOG
    if ($_GET['action'] == 'add_blog') {
        include("../config/db_connect.php");
        $blogID = $_GET['postID'];
        $author = $_POST['author'];
        $title = $_POST['title'];
        $image = $_POST['image'];
        $content = $_POST['content'];

        $query = "INSERT INTO blogs (id, author, title, image, content) VALUES ($blogID, $author, $title, $image, $content);";
        $result = mysqli_query($conn, $query);
        if ($result) {
            $response = "Thêm thành công";
        } else {
            $response = "Lỗi: " . $conn->error;
        }
        mysqli_close($conn);
    }
    // UPDATE BLOG
    if ($_GET['action'] == 'update_blog') {
        include("../config/db_connect.php");
        $blogID = $_GET['postID'];
        $author = $_POST['author'];
        $title = $_POST['title'];
        $image = $_POST['image'];
        $content = $_POST['content'];

        $query = "UPDATE blogs SET(`id`='$blogID', `author`='$author', `title`=' $title', `image`='$image', `content`='$content') WHERE `id`='$blogID'";

        $result = mysqli_query($conn, $query);
        if ($result) {
            $response = "Sửa thành công";
        } else {
            $response = "Lỗi: " . $conn->error;
        }
        mysqli_close($conn);
    }
    // DELETE BLOG
    if ($_GET['action'] == 'delete_blog') {
        include("../config/db_connect.php");
        $blogID = $_GET['postID'];

        $query = "UPDATE FROM blogs WHERE `id`='$blogID'";
        $result = mysqli_query($conn, $query);
        if ($result) {
            $response = "Xóa thành công";
        } else {
            $response = "Lỗi: " . $conn->error;
        }
        mysqli_close($conn);
    }
}
