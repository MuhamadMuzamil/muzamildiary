<?php
// Configuration
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'users';

// Connect to database
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

// Get username and password from request
$username = $_POST['username'];
$password = $_POST['password'];

// Check if user exists
$query = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
$user = $result->fetch_assoc();
if (password_verify($password, $user['password'])) {
echo json_encode(['success' => true, 'message' => 'Logged in successfully']);
} else {
echo json_encode(['success' => false, 'message' => 'Incorrect password']);
}
} else {
echo json_encode(['success' => false, 'message' => 'User not found']);
}

$conn->close();
?>
