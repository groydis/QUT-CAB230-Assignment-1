<?php
	//is it posted
	if (isset($_POST['submit'])){
		global $database;
	  	//get values from form
		$username = $_POST['user_email'];
		$password = $_POST['password_verify'];

	  	//is it valid
		if(validate_chars_only($username) || validate_email($username)){

	    	//Check against database
			$query = "SELECT password, salt FROM users WHERE email = :email OR username = :username";

	      	//Send user to index
			$stmt = $database->prepare($query);

			$stmt->bindParam(':username', $username);
			$stmt->bindParam(':email', $username);

			$stmt->execute();

			//Check if there is a response
			if($stmt->rowCount() > 0){
				$dbInfo = $stmt->fetch();

				//Salt the password
				$password += $dbInfo[1];
				$password = password_hash($password, PASSWORD_BCRYPT);

				//Check that $passthesalt matches $password
				if ($dbInfo[0] == $password) {
					session_start();
					$_SESSION['loggedIn'] = true;
					
					header("Location: {$_SERVER['HTTP_HOST']}/index.php");

				}
			}
		} 
	}
