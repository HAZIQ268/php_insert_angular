<?php
header('Access-Control-Allow-Origin :*');

$data = json_decode(file_get_contents("php://input"),true);

$connection = mysqli_connect("localhost", "root", "", "php_angular");


if ($_SERVER('REQUEST_METHOD') == 'post') {
    
}


$query = mysqli_query($connection, "insert into student (name,email,password) values ");
?>