<?php

//Todo: auto import 
if (isset($_SERVER["HTTP_ORIGIN"])) {
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
} else {
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");    // cache for 10 minutes

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); //Make sure you remove those you do not want to support

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}
spl_autoload_register(function ($class) {
    $path = __DIR__ . '\\' . lcfirst($class) . '.php';
    require $path;
});

define('VIEW_PATH', __DIR__ . '\\views');
define('STORAGE_PATH', __DIR__ . '\\..\\FrontEnd\\public\\avatar\\');
session_start();

include_once 'app/Routes/index.php';

use App\Exception\RouterNotFoundException;
use App\Router;
use App\View;
use App\Routes;

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$router = new Router();

configRoutes($router);

try {
    echo $router->resolve($_SERVER['REQUEST_URI'], strtolower($_SERVER['REQUEST_METHOD']));
} catch (RouterNotFoundException $e) {
    http_response_code(404);
    $messages['message'] = $e->getMessage();
    $messages['status'] = 404;
    echo json_encode($messages);
}
