<?php

if (!isset($_SESSION))
{
	session_start();
}

session_destroy();
header('location:../admin/login.php?error=you are now logged out');
?>