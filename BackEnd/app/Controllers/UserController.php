<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Exception\RouterNotFoundException;
use Exception;
use \PDO;

class  UserController
{
    private $select = "SELECT loginName,nameUser,birthday,isAdmin,avatar,phone,id FROM users";

    public function checkAccess()
    {
        if (isset($_SESSION['id'])) {
            $response = ['id' => $_SESSION['id'], 'status' => '200'];
            echo json_encode($response);
        } else {
            $response = ['status' => '401'];
            echo json_encode($response);
        }
    }
    public  function getAllUser()
    {
        global $conn;
        $sql = $this->select;
        $page = 1;
        if (isset($_GET['page'])) $page = $_GET['page'];
        $start = ($page - 1) * 10;
        $sql .= " limit $start,10";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $users = $stmt->fetchAll();
        echo json_encode($users);
    }

    public function login()
    {
        global $conn;
        $userInfo = json_decode(file_get_contents('php://input'));
        $sql = "SELECT loginName,nameUser,birthday,isAdmin,avatar,phone,id FROM users WHERE loginName= :loginName AND passwordUser= :passwordUser";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(':loginName', $userInfo->loginName);
        $password = md5($userInfo->passwordUser);
        $stmt->bindParam(':passwordUser', $password);
        try {
            $stmt->execute();
            $user = $stmt->fetch();
            if ($user == false)
                throw new Exception();
            $_SESSION['id'] = (string) $user['id'];
            $_SESSION['isAdmin'] = (string) $user['isAdmin'];
            echo json_encode($user);
        } catch (Exception $e) {
            $response = ['status' => 402, 'message' => 'Failed to register'];
            echo json_encode($response);
        }
    }

    public function logout()
    {
        session_destroy();
    }
    public function register()
    {
        global $conn;
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO users (loginName,nameUser,birthday,phone,passwordUser) VALUES (:loginName,:nameUser,:birthday,:phone,:passwordUser)";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        if (!isset($user->loginName) || !isset($user->nameUser) || !isset($user->passwordUser)  || !isset($user->phone)) {
            $response = ['status' => 401, 'message' => 'Lack of infomation'];
            echo json_encode($response);
            return;
        }
        $stmt->bindParam(':loginName', $user->loginName);
        $stmt->bindParam(':nameUser', $user->nameUser);
        $stmt->bindParam(':birthday', $user->birthday);
        $stmt->bindParam(':phone', $user->phone);
        $password = md5($user->passwordUser);
        $stmt->bindParam(':passwordUser', $password);
        try {
            $stmt->execute();
            $newUser = $stmt->fetch();
            echo json_encode($newUser);
        } catch (Exception $e) {
            $response = ['status' => 402, 'message' => 'Failed to register'];
            echo json_encode($response);
        }
    }

    public  function getUser()
    {
        global $conn;
        $sql = $this->select . " WHERE id = :id";
        $stmt = $conn->prepare($sql);
        if ((!isset($_SESSION['id']) | ((string)$_GET['id'] != $_SESSION['id']))) {
            if (!isset($_SESSION['isAdmin']) | $_SESSION['isAdmin'] != '1') throw new RouterNotFoundException();
        }
        $stmt->bindParam(':id', $_GET['id']);
        $stmt->execute();
        $user = $stmt->fetch();
        echo json_encode($user);
    }

    public  function searchUser()
    {
        global $conn;
        $sql = $this->select;
        $page = 1;
        if (isset($_GET['nameUser'])) {
            $sql .= ' WHERE nameUser like "%' . $_GET['nameUser'] . '%"';
        }
        if (isset($_GET['phone'])) {
            $sql .= ' WHERE phone like "%' . $_GET['phone'] . '%"';
        }
        if (isset($_GET['page'])) $page = $_GET['page'];

        $start = ($page - 1) * 10;
        $sql .= " limit $start,10";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $users = $stmt->fetchAll();
        echo json_encode($users);
    }



    public function updateUser()
    {
        global $conn;
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE users SET nameUser= :nameUser, loginName =:loginName, phone =:phone, birthday =:birthday WHERE id = :id";
        $stmt = $conn->prepare($sql);
        if (!isset($_SESSION['id']) | ((string)$user->id != $_SESSION['id']))
            throw new RouterNotFoundException();
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':nameUser', $user->nameUser);
        $stmt->bindParam(':loginName', $user->loginName);
        $stmt->bindParam(':phone', $user->phone);
        $stmt->bindParam(':birthday', $user->birthday);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
    }

    public  function deleteUser()
    {
        global $conn;
        $id = json_decode(file_get_contents('php://input'));
        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(':id', $id);
        try {
            $stmt->execute();
            $dog = $stmt->fetch();
            $response = ['status' => 200, 'message' => 'Succesful'];
            echo json_encode($response);
        } catch (Exception $e) {
            $response = ['status' => 402, 'message' => 'Failed to delele'];
            echo json_encode($response);
        }
    }

    public function upload()
    {
        global $conn;
        $file = $_FILES['file'];
        $id = $_POST['id'];
        $name = $file['name'];
        $pathImage = "/avatar/$name";
        $sql = "UPDATE users SET avatar = '$pathImage' WHERE id = $id";
        $stmt = $conn->prepare($sql);
        try {
            $stmt->execute();
            $filepath = STORAGE_PATH . $file['name'];
            move_uploaded_file($file['tmp_name'], $filepath);
            $response = ['status' => 200, 'message' => 'Succesful'];
            echo json_encode($response);
        } catch (Exception $e) {
            $response = ['status' => 402, 'message' => 'Failed to upload image'];
            echo json_encode($response);
        }
    }
}