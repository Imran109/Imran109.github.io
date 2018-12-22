<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Post Email</title>
</head>
<body>
<?php
    $myemailaddress="mohamedaadil.aadil@gmail.com";
    $subject="First Webpage of PSMI !";
    $name=$_POST['Name'];
    $email=$_POST['Email'];
    $message=$_POST['Message'];
    $header="from: $name <$email>";
    mail($myemailaddress,$subject,$message,$header);       
?>
    <p>Thanks for sending. If you have any problem We will get in touch with you in next 24 hours</p>


</body>
</html>