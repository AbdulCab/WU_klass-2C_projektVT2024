<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "abdulmannan.cabdalla@elev.ga.ntig.se"; // Replace with your email address
    $subject = "Message from $name";
    $body = "Name: $name\nEmail: $email\n\n$message";

    // Send email
    if(mail($to, $subject, $body)) {
        echo "<script>alert('Your message has been sent.');</script>";
    } else {
        echo "<script>alert('There was an error sending your message. Please try again later.');</script>";
    }
}
?>
