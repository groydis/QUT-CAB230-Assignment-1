<?php
	// Validate Text Only
	function validate_chars_only($string){
		if (!preg_match("/^[a-zA-Z ]*$/", $string)){
			return false;
		}
		return true;
	}
	// Validate Email
	function validate_email($email){
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
			return false;
		}	
		return true;
	}

	// Validate Postcode
	function validate_postcode($postcode){
		if (strlen($postcode) > 4 || strlen($postcode) < 4){
			return false;
		} 
		return true;
	}

	// Get the users role from the DB
	function get_role($role_name){
		global $database;
		$getrolequery = "SELECT id FROM roles WHERE role = :roleName";

		$stmt = $database->prepare($getrolequery);

		$stmt->bindParam(':roleName', $role_name);

		$stmt->execute();

		return $stmt->fetch();
	}

	// Assign the user a role
	function assign_user_role($userId, $roleId) {
		global $database;
		$assignrolequery = "INSERT INTO user_in_rules (user_id, role_id) VALUES (:userId, :roleId)";

		$stmt = $database->prepare($assignrolequery);

		$stmt->bindParam(':userId', $userId);
		$stmt->bindParam(':roleId', $roleId);

		$stmt->execute();
	}

	// Check if username exists
	function username_exists($username){
		$userexistsql = "SELECT username FROM users WHERE username = :username";

		$stmt = $database->prepare();

		$stmt->bindParam(':username', $username);

		$stmt->execute();

		if ($stmt->rowCount() > 0){
			echo("Username Exists");
			return true;
		}
	}

	// Check if email exists
	function email_exists($email){
		$emailexistsql = "SELECT email FROM users WHERE email = :email";

		$stmt = $database->prepare();

		$stmt->bindParam(':email', $email);

		$stmt->execute();

		if ($stmt->rowCount() > 0){
			echo("Email Exists");
			return true;
		}
	}

?>