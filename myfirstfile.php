<?php
require 'PHPMailer/PHPMailerAutoload.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$name =  $request->inputUsername; 
$email_address = $request->inputEmail; 
$message = $request->inputContent;
$phone = $request->inputPhone; 
$projecType = $request->inputProjectType; 
$budget = $request->inputBudget; 

if(!empty($name) && !empty($email_address) && !empty($message)){


$mail = new PHPMailer;
                               
$mail->SMTPDebug = 4;
$mail->IsMail();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'krishnakumar4315@gmail.com';                 // SMTP username
$mail->Password = 'livehappily2013';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('krishnakumar4315@gmail.com', 'Krishna');
 
$mail->addAddress('krishnasinbox@outlook.com', 'Krishna');               // Name is optional

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Message From: '.$name.'<br><br>';
$mail->Body    = $message ." <b>Email: </b>".$email_address." <br>Phone Number: ".$phone."<br> Project Type: ".$projecType." <br>Budget: ".$budget;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
echo 'success';
}
?>