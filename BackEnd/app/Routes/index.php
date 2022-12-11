<?php

function configRoutes($router)
{

    //* Route for everyone
    $router
        ->get('/dogs', [App\Controllers\DogController::class, 'getAllDogs'])
        ->get('/dogs/search', [App\Controllers\DogController::class, 'searchDog'])
        ->get('/dogs/getNumber', [App\Controllers\DogController::class, 'getNumberDogs'])
        ->get('/dog', [App\Controllers\DogController::class, 'getDog'])
        ->post('/user/login', [App\Controllers\UserController::class, 'login'])
        ->get('/user/logout', [App\Controllers\UserController::class, 'logout'])
        ->post('/user/register', [App\Controllers\UserController::class, 'register'])
        ->get('/user/checkAccess', [App\Controllers\UserController::class, 'checkAccess']);
    //* Router for host and admin
    if (!isset($_SESSION['id']) || !$_SESSION['id']) {
        return;
    }
    $router
        ->get('/dogs/order', [App\Controllers\DogController::class, 'getDogs'])
        ->get('/users/search', [App\Controllers\UserController::class, 'searchUser'])
        ->get('/user', [App\Controllers\UserController::class, 'getUser'])
        ->post('/user/edit', [App\Controllers\UserController::class, 'updateUser'])
        ->post('/user/upload', [App\Controllers\UserController::class, 'upload'])
        ->get('/orders/user', [App\Controllers\OrderController::class, 'getOrders'])
        ->post('/order/sentOrder', [App\Controllers\OrderController::class, 'sentOrder']);

    //* Router for admin
    if (!isset($_SESSION['isAdmin']) || !$_SESSION['isAdmin'])
        return;
    $router
        ->post('/dog/upload', [App\Controllers\DogController::class, 'upload'])
        ->post('/dogs/delete', [App\Controllers\DogController::class, 'deleteDog'])
        ->post('/users/delete', [App\Controllers\UserController::class, 'deleteUser'])
        ->get('/users', [App\Controllers\UserController::class, 'getAllUser'])
        ->post('/dog/edit', [App\Controllers\DogController::class, 'updateDog'])
        ->get('/orders', [App\Controllers\OrderController::class, 'getAllOrder'])
        ->post('/dog/add', [App\Controllers\DogController::class, 'addDog']);
}