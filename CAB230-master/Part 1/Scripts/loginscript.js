//Checks if the username input box is empty
function checkUsername(){
	var usernameEmail = document.getElementById("user_email");
	var usernameEmailError = document.getElementById("user_email_error");

	if (usernameEmail.value === ''){
		//If there is an error put a red border on and add a message
		usernameEmail.style.border = "2px solid red";
		usernameEmailError.innerHTML = "<i>Please enter a Username or Email Address</i>"
		return false;
	}
	return true;
}

//Removes the error messages and the red border
function undoUsernameError(){
	var usernameEmail = document.getElementById("user_email");
	var usernameEmailError = document.getElementById("user_email_error");

	//Remove the message and border values
	usernameEmail.style.border = null;
	usernameEmailError.innerHTML = null;
}

//Checks if the password is empty
function checkPassword(){
	var password = document.getElementById("password_verify");
	var passwordError = document.getElementById("verify_password_error");

	if (password.value === ''){
		//If there is an error put a red border on and add a message
		password.style.border = "2px solid red";
	    passwordError.innerHTML = "<i>Please enter a password</i>";
	    return false;
	}
	return true;
}

//Removes the error message and the red border
function undoPasswordError(){
	var password = document.getElementById("password_verify");
	var passwordError = document.getElementById("verify_password_error");

	//Remove the message and border values
	password.style.border = null;
	passwordError.innerHTML = null;
}

//Validates the username and password in the form
//and matches it with existing username or password
function validateLoginForm(){
	var usernameEmail = document.getElementById("user_email");
	var verifyPassword = document.getElementById("password_verify");
	var loginError = document.getElementById("verify_password_error");

	//A Username or Email Address can be used to sign in 
	//They are both unique to others
	//The password is longer than 8 characters and 
	//has one upper casecharacter, one lower case character 
	//and one number
	if ((usernameEmail.value === 'jackoSmith' ||
		usernameEmail.value === 'smithjacko@mail.com') && 
		(verifyPassword.value === 'Wannabe365')){
		//Let the user know they have successfully logged in.
		//Later there will be actual values in the nav bar 
		//showing your logged in
		alert("Successful Login");
		window.location.href='index.php';
		return true;
	}
	//Otherwise show an error and error message
	usernameEmail.style.border = "2px solid red";
	verifyPassword.style.border = "2px solid red";
	loginError.innerHTML = "<i>The Username or Password is Incorrect</i>";
	return false;
}