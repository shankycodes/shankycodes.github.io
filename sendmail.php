<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = "ksankarui@gmail.com";
$subject= "New ncontact form";

$txt = "Name =" . $name . "\r\n Email = " . $email . "\r\n Phone = " . $phone . "\r\n Message = " . $message ;
$headers = "From: noreply@shankycodes.com";

if($email!null){
    mail($to,$subject,$txt,$headers);
}

header("Location:thankyou.html")
?> 