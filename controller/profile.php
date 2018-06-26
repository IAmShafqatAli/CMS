<?php

session_start();

$username = $_SESSION['username'];

if (isset($username)) {
	echo "Welcome" . $username;
} else {
	header('location: login.php');
}

