<?php
	// If script recieves post request from submit
	if(isset($_POST['submit'])){
		global $database;
		// Stash values to variables
		$firstname = $_POST["first_name"];
		$lastname = $_POST["last_name"];
		$username = $_POST["username"];
		$email = $_POST["email_address"];
		$password = $_POST["password_confirm"];
		$postcode = $_POST["postcode"];

		// Perform validation 
		if(validate_email($email) &&  
			validate_chars_only($firstname) && 
			validate_chars_only($lastname) &&
			validate_chars_only($username) &&
			validate_postcode($postcode)) {

			// Check if user exists via username and email
			if (username_exists($username) || email_exists($email)){
				return false;
			}

			// Salt the password
			$salt = substr(md5(uniqid()), 0, 20);
    		$password += $salt;
			
			// Inject variables into SQL query
			$query = "INSERT INTO users(firstname, lastname, username, email, password, salt) VALUES (:firstname, :lastname, :username, :email, :password, :salt)";

			// Prepare SQL
			$stmt = $database->prepare($query);

			$stmt->bindParam(":firstname", $firstname);
			$stmt->bindParam(":lastname", $lastname);
			$stmt->bindParam(":username", $username);
			$stmt->bindParam(":email", $email);
			$stmt->bindParam(":password", password_hash($password, PASSWORD_BCRYPT));
			$stmt->bindParam(":salt", $salt);

			// Exectue SQL
			$stmt->execute();

			$role = "user";

			if($stmt->rowCount() > 0){
				echo("working");
				$userId = $database->lastInsertId();

				$roleId = get_role($role);
				assign_user_role($userId, $roleId);
				session_start();
				$_SESSION["loggedIn"] = true;
				$redirect = "index.php";
				header("Location: " . $redirect);
			}

			header("Location: index.php");
		}
	}
?>