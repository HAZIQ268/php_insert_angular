<?php

$connection = mysqli_connect("localhost","root","","php_angular");

$query =mysqli_query($connection,"select * from student");

while($data = mysqli_fetch_assoc($query)){
    $users[]=$data;
}
echo json_encode($users);

?>