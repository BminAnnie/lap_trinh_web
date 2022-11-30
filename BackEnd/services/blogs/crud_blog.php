
<?php
include("../../config/db_connect.php");

switch ($method) {
    case 'GET':
        if (isset($_GET['action'])) {
            // GET ALL BLOGS
            if ($_GET['action'] == 'get_all') {
                $result = mysqli_query($conn, "SELECT * FROM blogs");
            }
            $result = mysqli_fetch_all($result);
            mysqli_close($conn);
            echo json_encode($result);
        }
        break;
    case 'POST':
        if (isset($_POST['action'])) {
            // ADD BLOG
            if ($_POST['action'] == 'add') {
                if (!isset($_POST['username']) || !isset($_POST['title']) || !isset($_POST['image']) || !isset($_POST['content'])) {
                    echo json_encode("Wrong nlog");
                    return;
                }

                $username = $_POST['username'];
                $title = $_POST['title'];
                $image = $_POST['image'];
                $content = $_POST['content'];

                $query = "INSERT INTO contacts(username, title, image, content) VALUES('$username','$title','$image','$content')";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }

                mysqli_close($conn);
            }
            // EDIT BLOG
            if ($_POST['action'] == 'edit') {
                if (!isset($_POST['username']) || !isset($_POST['title']) || !isset($_POST['image']) || !isset($_POST['content'])) {
                    echo json_encode("Wrong blog");
                    return;
                }

                $username = $_POST['username'];
                $title = $_POST['title'];
                $image = $_POST['image'];
                $content = $_POST['content'];

                $query = "UPDATE blogs SET title='$title', image='$image', content='$content' WHERE username='$username'";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    echo json_encode(array("status" => 200));
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
                mysqli_close($conn);
            }
            // DELETE BLOG
            if ($_POST['action'] == 'delete') {
                $id = $_POST['id'];
                $sql = "DELETE FROM `blogs` WHERE id=$id";
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
