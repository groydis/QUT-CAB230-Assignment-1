<?php require "./scripts/includes/header.inc";?>
<?php require "./scripts/includes/scripts/signUp.inc"; ?>
<?php include "navbar.php"; ?>
<body onload="loadedSignUp()">
	<div id="body_content">
		<div class="content">
			<div class="header">
				<h1 id="static_title">Sign Up</h1>
			</div>
			<form action= "signUp.php" name="register" id="input_table" onsubmit="return validateRegister()" method="POST">
				<?php
					require "forms.php";

					input_builder('text', 'first_name_div', 'first_name', 'First Name');

					input_builder('text', 'last_name_div', 'last_name', 'Last Name');

					input_builder('text', 'user_name', 'username', 'Username');

					input_builder('email', 'email_div', 'email_address', 'Email Address');

					input_builder('password', 'password_div', 'password', 'Password');

					input_builder('password', 'password_confirm_div', 'password_confirm', 'Confirm Password');
					
					input_builder('text', 'postcode_div', 'postcode', 'Postcode');
				?>
				<!--Submit Button for Validation and Entering into the Website as a Signed in User-->
				<div class="sign_up_and_login_buttons">
					<!--Submit Button of the Form-->
					<input type="submit" id= "register_button" name="submit" value="Sign Up">
					<p>Already Signed Up?</p>
					<!--Alex did this-->
					<!--Button that takes you to the Login Page if you are Already Signed Up-->
					<input type="button" id= "button" name="go_to_login_page" value="Login"  onclick="window.location.href='login.php'">
				</div>
			</form>
		</div>
	</div>

<?php  require "./scripts/includes/footer.inc";?>