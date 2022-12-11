<?php

namespace App\Exception;

class RouterNotFoundException extends \Exception
{
    protected $message = '404 Not Found';
};