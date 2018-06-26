<?php
@include '../controller/connection.php';

if (isset($_POST['submit'])) {
	session_start();
	$username = $_POST['username'];
//	$new_username = $_POST['mysqli_real_escape_string($username)'];
	$password = $_POST['password'];
//	$new_password = mysqli_real_escape_string($password);
//	$new_password = $_POST['mysqli_real_escape_string($password)'];
	
	
	$q = "Select * from login where f_user = '" . $username . "' and f_pass = '" . $password . "' ";
	
	$result = $conn->query($q);
	
	if ($result->num_rows == 1) {
		
		while ($row = $result->fetch_array()) {
//			echo $row['f_user'];
//			exit();
			$_SESSION['name'] = $row['f_user'];
		}
		header('location: ../admin/dashboard.php');
	} else {
		header('location:../admin/login.php?error=Wrong Credentials Login again');
	}
} else {
//	echo "Wrong Credentials Login again" . header('location:../admin/login.php');
	header('location:../admin/login.php?error=Wrong Credentials Login again');
	
}

?>

