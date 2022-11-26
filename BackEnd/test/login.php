<?php
$errors = array("username" => "", "password" => "");
$isSuccess = true; // FLAG NOTIFY
include "../services/users/auth.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
    <style>
        .container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 12px;
            margin: 0 auto;
        }

        .form-wrapper {
            width: 300px;
            padding: 12px;
            border: 1px solid #333;
            border-radius: 4px;
        }

        .title {
            text-align: center;
        }

        .btn {
            display: block;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="form-wrapper">
            <form action="<?php echo $_SERVER['PHP_SELF'] ?>?action=login" method="POST">
                <h2 class="title">Login</h2>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" name="username">
                    <span class="text-danger"><?php echo $errors['username'] ?></span>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password">
                    <span class="text-danger"><?php echo $errors['password'] ?></span>
                </div>
                <button type="submit" class="btn btn-primary" name="submit">Login</button>
            </form>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>

</html>