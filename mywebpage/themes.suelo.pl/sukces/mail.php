<?php
extract($_POST);
$to = "chauhan.riddhi1999@gmail.com";
$subject = "Website Inquiry";
$txt = "Hi! I am $name, $msg, my email id is $email";

$headers = "From: admin@silverwingtechnologies.com";

mail($to,$subject,$txt,$headers);
header("location:index.html");
?>
