<?php

define("DB_HOST", "localhost");
define("DB_USER", "n10000569");
define("DB_PASS", "DatabasesAreGreat"); // password would be 'root' if using XAMP
define("DB_NAME", "n10000569");

// Create connection
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>