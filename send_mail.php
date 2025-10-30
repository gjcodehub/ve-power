<?php
// Define the email address where you want to receive the messages
$receiving_email_address = 'venkateshwaraenterprises16@gmail.com'; // **CHANGE THIS to YOUR actual email address**

// Check if the form was submitted using the POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Sanitize and collect form data
    // Use filter_input for security (prevents basic injection)
    $name    = filter_input(INPUT_POST, 'fullName', FILTER_SANITIZE_STRING);
    $email   = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $mobile  = filter_input(INPUT_POST, 'mobile', FILTER_SANITIZE_STRING);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Basic validation: ensure essential fields aren't empty
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        // Redirect back to the contact section with an error status
        header("Location: index.html#contact?status=error");
        exit;
    }

    // 2. Format the email content
    $email_subject = "New Website Inquiry: " . $subject;
    
    $email_body = "You have received a new message from your website contact form.\n\n";
    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Mobile: " . $mobile . "\n";
    $email_body .= "Subject: " . $subject . "\n\n";
    $email_body .= "Message:\n" . $message . "\n";

    // 3. Set email headers
    $headers = "From: " . $name . " <" . $email . ">" . "\r\n";
    // Add a Reply-To header so you can just hit 'reply' in your mail client
    $headers .= "Reply-To: " . $email . "\r\n";

    // 4. Send the email using PHP's mail() function
    if (mail($receiving_email_address, $email_subject, $email_body, $headers)) {
        // Success: Redirect back to the contact section with a success status
        header("Location: index.html#contact?status=success");
    } else {
        // Failure: Redirect back with an error status
        header("Location: index.html#contact?status=mail_error");
    }
    
} else {
    // If someone tries to access this file directly, redirect them
    header("Location: index.html");
}
exit;
?>