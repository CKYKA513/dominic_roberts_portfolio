<?php
require 'vendor/autoload.php'; // Inclure la bibliothèque PHPMailer (assurez-vous de l'installer via Composer)

// Paramètres SMTP de SendGrid
$smtpUsername = 'emailDominic'; // Utilisez 'apikey' comme nom d'utilisateur
$smtpPassword = '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'; // Remplacez par votre clé API SendGrid
$smtpHost = 'smtp.sendgrid.net';
$smtpPort = 587;

// Destinataire et contenu de l'e-mail
$name = $_POST['name'];
$email = $_POST['emailaddress'];
$subject = $_POST['subject'];
$message = $_POST['message'];


// Configuration de PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP();
$mail->Host = $smtpHost;
$mail->Port = $smtpPort;
$mail->SMTPAuth = true;
$mail->Username = $smtpUsername;
$mail->Password = $smtpPassword;
$mail->SMTPSecure = 'tls'; // Vous pouvez utiliser 'ssl' à la place si nécessaire

// Expéditeur
$mail->setFrom($email, $name);

// Destinataire
$mail->addAddress('d.robberts911@gmail.com', 'Dominic Roberts');

// Sujet et contenu
$mail->Subject = $subject;
$mail->Body = $message;

// Envoyer l'e-mail
if ($mail->send()) {
    echo 'E-mail envoyé avec succès.';
} else {
    echo 'Erreur lors de l\'envoi de l\'e-mail : ' . $mail->ErrorInfo;
}
?>
