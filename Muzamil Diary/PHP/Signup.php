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

// Get username, email, and password from request
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Check if user already exists
$query = "SELECT * FROM users WHERE username = '$username' OR email = '$email'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
echo json_encode(['success' => false, 'message' => 'User already exists']);
} else {
// Hash password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
// Insert user into database
$query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";
if ($conn->query($query) === TRUE) {
echo json_encode(['success' => true, 'message' => 'Signed up successfully']);
} else {
echo json_encode(['success' => false, 'message' => 'Error signing up']);
}
}

$conn->close();
?>
```
_