<?php

declare(strict_types=1);

namespace App\Controllers;

use Exception;
use PDO;

class  DogController
{
    private $select = "SELECT * FROM dogs";
    public  function getAllDogs()
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
        $dogs = $stmt->fetchAll();
        echo json_encode($dogs);
    }

    public function getNumberDogs()
    {
        global $conn;
        $sql = 'SELECT COUNT(*) as numberDogs FROM dogs';
        $min = (int)($_GET['min'] ?? '0');
        $max = (int) ($_GET['max'] ?? '100000');
        $sql .= " WHERE price between $min and $max  AND isSell = 0";
        if (isset($_GET['nameDog'])) {
            $sql .= ' AND nameDog like "%' . $_GET['nameDog'] . '%"';
        }
        if (isset($_GET['gender'])) {
            $sql .= ' AND gender = ' . $_GET['gender'];
        }
        if (isset($_GET['color'])) {
            $sql .= ' AND color = "' . $_GET['color'] . '"';
        }
        if (isset($_GET['breed'])) {
            $sql .= ' AND breed = "' . $_GET['breed'] . '"';
        }
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $var = $stmt->fetch();
        echo json_encode($var);
    }

    public  function getDog()
    {
        global $conn;
        $sql = "SELECT * FROM dogs WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(':id', $_GET['id']);
        $stmt->execute();
        $user = $stmt->fetch();
        echo json_encode($user);
    }

    public  function deleteDog()
    {
        global $conn;
        $id = json_decode(file_get_contents('php://input'));
        $sql = "DELETE FROM dogs WHERE id = :id";
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

    public  function searchDog()
    {
        global $conn;
        $sql = $this->select;
        $page = 1;
        $min = (int)($_GET['min'] ?? '0');
        $max = (int) ($_GET['max'] ?? '100000');
        $sql .= " WHERE price between $min and $max AND isSell = 0";
        if (isset($_GET['nameDog'])) {
            $sql .= ' AND nameDog like "%' . $_GET['nameDog'] . '%"';
        }
        if (isset($_GET['gender'])) {
            $sql .= ' AND gender = ' . $_GET['gender'];
        }
        if (isset($_GET['color'])) {
            $sql .= ' AND color = "' . $_GET['color'] . '"';
        }
        if (isset($_GET['breed'])) {
            $sql .= ' AND breed = "' . $_GET['breed'] . '"';
        }
        if (isset($_GET['page'])) $page = $_GET['page'];

        $start = ($page - 1) * 10;
        $sql .= " limit $start,10";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $dogs = $stmt->fetchAll();
        echo json_encode($dogs);
    }

    public  function getDogs()
    {
        global $conn;
        $sql = $this->select . " WHERE idOrder = :id";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':id', $_GET['idOrder']);
        $stmt->execute();
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($orders);
    }

    public function updateDog()
    {
        global $conn;
        $dog = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE dogs SET gender= :gender, price =:price, birthday =:birthday, isVaccinated =:isVaccinated, cert =:cert, microchip=:microchip, isSell=:isSell, informationMore=:informationMore, age=:age, nameDog=:nameDog, breed=:breed, color=:color WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $dog->id);
        $stmt->bindParam(':gender', $dog->gender);
        $stmt->bindParam(':price', $dog->price);
        $stmt->bindParam(':birthday', $dog->birthday);
        $stmt->bindParam(':isVaccinated', $dog->isVaccinated);
        $stmt->bindParam(':cert', $dog->cert);
        $stmt->bindParam(':microchip', $dog->microchip);
        $stmt->bindParam(':isSell', $dog->isSell);
        $stmt->bindParam(':informationMore', $dog->informationMore);
        $stmt->bindParam(':age', $dog->age);
        $stmt->bindParam(':nameDog', $dog->nameDog);
        $stmt->bindParam(':breed', $dog->breed);
        $stmt->bindParam(':color', $dog->color);

        echo json_encode($dog);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
    }

    public function addDog()
    {
        global $conn;
        $dog = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO dogs (gender,price,birthday,isVaccinated,cert,microchip,informationMore,age,nameDog,breed,color) VALUES (:gender,:price,:birthday,:isVaccinated,:cert,:microchip,:informationMore,:age,:nameDog,:breed,:color)";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(':gender', $dog->gender);
        $stmt->bindParam(':price', $dog->price);
        $stmt->bindParam(':birthday', $dog->birthday);
        $stmt->bindParam(':isVaccinated', $dog->isVaccinated);
        $stmt->bindParam(':cert', $dog->cert);
        $stmt->bindParam(':microchip', $dog->microchip);
        $stmt->bindParam(':informationMore', $dog->informationMore);
        $stmt->bindParam(':age', $dog->age);
        $stmt->bindParam(':nameDog', $dog->nameDog);
        $stmt->bindParam(':breed', $dog->breed);
        $stmt->bindParam(':color', $dog->color);

        echo json_encode($dog);
        try {
            $stmt->execute();
            $response = ['status' => 1, 'message' => 'Add dog successfully.'];
        } catch (Exception $e) {
            $response = ['status' => 0, 'message' => 'Failed to add dog.'];
        }
        echo json_encode($response);
    }
}