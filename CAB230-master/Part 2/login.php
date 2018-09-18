<?php require "./scripts/includes/header.inc";?>
<?php require "./scripts/includes/scripts/login.inc";?>
<?php include "navbar.php"; ?>
<body onload="loadedLogin()">
	<div id="body_content">
		<div class="content">
			<div class="header">
				<h1 id="static_title">Login</h1>
			</div>
			<!--Login Table Incased in Form Tags-->
			<form action="login.php" name="login" id="login_table" onsubmit="return validateLogin()" method="POST">
				<?php 
					require 'forms.php';

					input_builder('text', 'login_user_email', 'user_email', 'Username or Email Address');

					input_builder('password', 'login_password', 'password_verify', 'Password');
				?>
				<!--Buttons for the Login Page-->
				<div class="sign_up_and_login_buttons">
					<!--Submit Login Details for Checking of Validity-->
					<input type="Submit" id="login_button" name="submit" value="Login">
					<p>Not Signed Up Yet?</p>
					<!--Alex did this-->
					<!--Button to go To Sign Up Page if the Person is not Signed Up-->
					<input type="button" id="button" name="go_to_sign_up" value="Register"  onclick="window.location.href='signUp.php'">
				</div>
			</form>
		</div>
	</div>
<?php  require "./scripts/includes/footer.inc";?>