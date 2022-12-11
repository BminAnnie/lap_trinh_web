<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Exception\RouterNotFoundException;
use Exception;
use \PDO;

class  OrderController
{
    private $select = "SELECT * FROM orders";
    public  function getAllOrder()
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

    public function getNumberOrders()
    {
        global $conn;
        $sql = 'SELECT COUNT(*) as numberOrders FROM orders';
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $var = $stmt->fetch();
        echo json_encode($var);
    }

    public  function getOrder()
    {
        global $conn;
        // if (!isset($_SESSION['id']) | ((string)$_GET['idOwner'] != $_SESSION['id']))
        //     throw new RouterNotFoundException();
        $sql = $this->select . " WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $_GET['id']);
        $stmt->execute();
        $orders = $stmt->fetch();
        echo json_encode($orders);
    }


    public  function getOrders()
    {
        global $conn;
        if (!isset($_SESSION['id']) | ((string)$_GET['idOwner'] != $_SESSION['id']))
            throw new RouterNotFoundException();
        $sql = $this->select . " WHERE idOwner = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $_GET['idOwner']);
        $stmt->execute();
        $orders = $stmt->fetchAll();
        echo json_encode($orders);
    }

    public  function sentOrder()
    {
        global $conn;
        $order = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO orders (address,methodPayment,idOwner,phone,totalValue,numberDogs) VALUES (:address,:methodPayment,:idOwner,:phone,:totalValue,:numberDogs)";
        $stmt = $conn->prepare($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(':address', $order->address);
        $stmt->bindParam(':methodPayment', $order->methodPayment);
        $stmt->bindParam(':idOwner', $order->idOwner);
        $stmt->bindParam(':phone', $order->phone);
        $stmt->bindParam(':totalValue', $order->totalValue);
        $stmt->bindParam(':numberDogs', $order->numberDogs);
        try {
            $a = $stmt->execute();
            $newOrder = $stmt->fetch();
            $sql1 = "SELECT * FROM orders ORDER BY id DESC LIMIT 1";
            $stmt1 = $conn->prepare($sql1);
            $stmt1->setFetchMode(PDO::FETCH_ASSOC);
            $stmt1->execute();
            $order1 = $stmt1->fetch();
            $id = $order1['id'];
            foreach ($order->dogs as $dog) {
                $id_dog = $dog->id;
                $sql2 = "UPDATE dogs SET isSell = 1, idOrder = $id WHERE id = $id_dog";
                $stmt2 = $conn->prepare($sql2);
                $stmt2->execute();
            }
            $response = ['status' => -1, 'message' => 'Success'];
            echo json_encode($response);
        } catch (Exception $e) {
            $response = ['status' => 402, 'message' => 'Failed to order'];
            echo json_encode($e);
        }
    }
}