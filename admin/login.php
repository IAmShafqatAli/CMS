<?php include('../layout/header.php'); ?>
	<link href="../login-system/css/style.css" rel="stylesheet">
	
	<style>
		body {
			padding-bottom: 40px;
			/*margin-top: 50%;*/
			/*background-color: #eee;*/
		}
		
		.form-signin {
			max-width: 330px;
			padding: 15px;
			margin: 0 auto;
		}
		
		.form-signin .form-signin-heading,
		.form-signin .checkbox {
			margin-bottom: 10px;
		}
		
		.form-signin .checkbox {
			font-weight: normal;
		}
		
		.form-signin .form-control {
			position: relative;
			height: auto;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			padding: 10px;
			font-size: 16px;
		}
		
		.form-signin .form-control:focus {
			z-index: 2;
		}
		
		.form-signin input[type="email"] {
			margin-bottom: -1px;
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		}
		
		.form-signin input[type="password"] {
			margin-bottom: 10px;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
		::-webkit-input-placeholder { /* Chrome/Opera/Safari */
			color: pink;
		}
		::-moz-placeholder { /* Firefox 19+ */
			color: pink;
		}
		:-ms-input-placeholder { /* IE 10+ */
			color: pink;
		}
		:-moz-placeholder { /* Firefox 18- */
			color: pink;
		}
	
	</style>
	<body>

<div class="container">
	
	<?php
	if (isset($_GET['error'])) {
		echo $_GET['error'];
	}
	?>
<!--	<script>alert($_GET['error']);</script>-->
	
	<form class="form-signin" action="../controller/login_script.php" method="post">
		<h2 class="form-signin-heading"></h2>
<!--		<label for="inputEmail" class="sr-only">Email address</label>-->
		<input type="text" name="username" id="inputEmail" class="form-control" placeholder="Email" required
		       autofocus>
		<br>
<!--		<label for="inputPassword" class="sr-only">Password</label>-->
		<input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
		<button style="color: black" class="btn btn-lg btn-primary "  name="submit" type="submit">Login</button>
	</form>


</div> <!-- /container -->

<?php include('../layout/footer.php'); ?>