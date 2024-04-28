<!DOCTYPE html>
<html lang="en">

<head>
    <title>Form Submission Confirmation</title>
    
</head>

<body>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $name = $_POST['your_name'];
        $email = $_POST['your_email'];
        $message = $_POST['your_message'];

        
        echo "<h1>Thank You for Your Submission!</h1>";
        echo "<p>Name: $name</p>";
        echo "<p>Email: $email</p>";
        echo "<p>Message: $message</p>";
    }
    ?>

</body>

</html>
