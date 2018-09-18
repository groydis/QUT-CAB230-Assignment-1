/*MULTI-USE FUNCTIONs*/

//Removes the error messages and the red border on each input field
function removeError(inputField, inputErrorMessage){
	inputField.style.border = null;
	inputErrorMessage.innerHTML = null;
}

/*SIGN UP FORM JAVASCRIPT*/
function validateRegister() {
	var firstNameField = document.forms["register"]["first_name"];
	var lastNameField = document.forms["register"]["last_name"];
	var userNameField = document.forms["register"]["username"];
	var emailField = document.forms["register"]["email_address"];
	var passwordField = document.forms["register"]["password"];
	var confirmPasswordField = document.forms["register"]["password_confirm"];
	var postcodeField = document.forms["register"]["postcode"];

	var firstNameError = document.getElementById("first_name_error"); 
	var lastNameError = document.getElementById("last_name_error");
  	var userError = document.getElementById("username_error");
  	var emailError = document.getElementById("email_address_error");
	var passwordError = document.getElementById("password_error");
	var confirmPasswordError = document.getElementById("password_confirm_error");
	var postcodeError = document.getElementById("postcode_error");

	var fields = [firstNameField,
		lastNameField,
		userNameField,
		emailField,
		passwordField,
		confirmPasswordField,
		postcodeField
		];

	var values = ["First Name",
		"Last Name",
		"Username",
		"Email Address",
		"Password",
		"Confirm Password",
		"Postcode"];

	var errors = [firstNameError,
		lastNameError,
		userError,
		emailError,
		passwordError,
		confirmPasswordError,
		postcodeError
		];

	var error = false;
	for (var i = 0; i < fields.length; i++) {
		if (fields[i].value == '') {
			fields[i].style.border = "2px solid red";
			errors[i].innerHTML  = "<i>Please complete the " + values[i] + " field.";
			error = true;
		}
	}

	var nameReg = /[0-9]/g;
	if(nameReg.test(firstNameField.value)) {
		//User Regex to check if the first name has only letters, spaces and punctuation 
      	firstNameField.style.border = "2px solid red";
    	firstNameError.innerHTML = "<i>Last Name can only contain letters and spaces</i>";
    	error = true;
	}
	if(nameReg.test(lastNameField.value)) {
		//User Regex to check if the first name has only letters, spaces and punctuation 
      	lastNameField.style.border = "2px solid red";
    	lastNameError.innerHTML = "<i>Last Name can only contain letters and spaces</i>";
    	error = true;
	}

	var userNameReg = /^\w+$/;
	if (!userNameReg.test(userNameField.value)) {
		//User Regex to check if the username has no spaces and 
      	userNameField.style.border = "2px solid red";
    	userError.innerHTML = "<i>Username must only contain letters, numbers and underscores</i>";
    	error = true;

	}
	//Validate the email address entered by the user 
	if (validateEmail(emailField.value) === false){
		emailField.style.border = "2px solid red";
		emailError.innerHTML = "<i>Please enter a valid email address</i>";
		error = true;
	}

	//Check if the password match
	if (passwordField.value != confirmPasswordField.value){
		passwordField.style.border = "2px solid red";
		confirmPasswordField.style.border = "2px solid red";
		confirmPasswordError.innerHTML = "<i>These passwords do not match!</i>";
		error = true;
	} 

	//If they do match and one of the fields is not empty
	if (passwordField.value === confirmPasswordField.value && passwordField.value != ''){
		//Check if the password is 8 characters long enough
		if(passwordField.value.length < 8) {
			passsword.style.border = "2px solid red";
			confirmPasswordField.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must contain at least eight characters</i>";
	       	error = true;
	    }
	    //Check if the password is the same as the username
	    if(passwordField.value === username.value) {
			password.style.border = "2px solid red";
			confirmPasswordField.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must be different from Username</i>";
	        error = true;
	   	}
	   	//Use regex to check the password contains at least  one number
	    var passwordReg = /[0-9]/;
      	if(!passwordReg.test(passwordField.value)) {
			passwordField.style.border = "2px solid red";
			confirmPasswordField.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must contain at least one number (0-9)</i>";
	        error = true;
      	}
      	//Use regex to check the password contains at least one lower case character
      	var passwordReg = /[a-z]/;
      	if(!passwordReg.test(passwordField.value)) {
			passwordField.style.border = "2px solid red";
			confirmPasswordField.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must contain at least one lowercase letter (a-z)</i>";
	        error = true;
      	}
      	//Use regex to check the password contains at least one upper case character
      	var passwordReg = /[A-Z]/;
      	if(!passwordReg.test(passwordField.value)) {
			passwordField.style.border = "2px solid red";
			confirmPasswordField.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must contain at least one uppercase letter (A-Z)</i>";
	        error = true;
      	}
	}

	//Check if the postcode is not a number and not 4 digits long
	if (isNaN(postcodeField.value) || postcodeField.value.length != 4){
		postcodeField.style.border = "2px solid red";
		postcodeError.innerHTML = "<i>Please enter a valid postcode</i>";
		error = true;
	} 

	if (error) {
		return false;
	}
	return true;
}

function loadedSignUp(){ 
	var firstNameField = document.forms["register"]["first_name"];
	var lastNameField = document.forms["register"]["last_name"];
	var userNameField = document.forms["register"]["username"];
	var emailField = document.forms["register"]["email_address"];
	var passwordField = document.forms["register"]["password"];
	var confirmPasswordField = document.forms["register"]["password_confirm"];
	var postcodeField = document.forms["register"]["postcode"];

	var firstNameError = document.getElementById("first_name_error"); 
	var lastNameError = document.getElementById("last_name_error");
  	var userError = document.getElementById("username_error");
  	var emailError = document.getElementById("email_address_error");
	var passwordError = document.getElementById("password_error");
	var confirmPasswordError = document.getElementById("password_confirm_error");
	var postcodeError = document.getElementById("postcode_error");

	firstNameField.addEventListener('input', function(){
		removeError(firstNameField, firstNameError);
	});

	lastNameField.addEventListener('input', function() {
		removeError(lastNameField, lastNameError);
	});

	userNameField.addEventListener('input', function() {
		removeError(userNameField, userError);
	});

	emailField.addEventListener('input', function() {
		removeError(emailField, emailError);
	});

	passwordField.addEventListener('input', function() {
		removeError(passwordField, passwordError);
	});

	confirmPasswordField.addEventListener('input', function() {
		removeError(passwordField, confirmPasswordError)
		removeError(confirmPasswordField, confirmPasswordError);
	});

	postcodeField.addEventListener('input', function() {
		removeError(postcodeField, postcodeError);
	});

	firstNameField.addEventListener('blur', function() {
		var nameReg = /[0-9]/g;

		if (firstNameField.value == '') {
			firstNameField.style.border = "2px solid red";
			firstNameError.innerHTML = "<i>Field cannot be empty</i>";
		} else if(nameReg.test(firstNameField.value)) {
			//User Regex to check if the first name has only letters, spaces and punctuation 
	      	firstNameField.style.border = "2px solid red";
	    	firstNameError.innerHTML = "<i>Last Name can only contain letters and spaces</i>";
		}
	});

	lastNameField.addEventListener('blur', function() {
		var nameReg = /[0-9]/g;

		if (lastNameField.value == '') {
			lastNameField.style.border = "2px solid red";
			lastNameError.innerHTML = "<i>Field cannot be empty</i>";
		} else if(nameReg.test(lastNameField.value)) {
			//User Regex to check if the first name has only letters, spaces and punctuation 
      		lastNameField.style.border = "2px solid red";
    		lastNameError.innerHTML = "<i>Last Name can only contain letters and spaces</i>";
		}
	});

	userNameField.addEventListener('blur', function() {
		var userNameReg = /^\w+$/;

		if (userNameField.value == '') {
			userNameField.style.border = "2px solid red";
			userError.innerHTML = "<i>Field cannot be empty</i>";
		} else if (!userNameReg.test(userNameField.value)) {
			//User Regex to check if the username has no spaces and 
	      	userNameField.style.border = "2px solid red";
	    	userError.innerHTML = "<i>Username must only contain letters, numbers and underscores</i>";
	    	error = true;
		}
	});

	emailField.addEventListener('blur', function() {
		if (emailField.value == '') {
			emailField.style.border = "2px solid red";
			emailError.innerHTML = "<i>Field cannot be empty</i>";
		} else if (validateEmail(emailField.value) === false){
			emailField.style.border = "2px solid red";
			emailError.innerHTML = "<i>Please enter a valid email address</i>";
		}	
	});

	passwordField.addEventListener('blur', function() {
		if (passwordField.value == '') {
			passwordField.style.border = "2px solid red";
			passwordError.innerHTML = "<i>Field cannot be empty</i>";
		}
		if(passwordField.value.length < 8) {
			passwordField.style.border = "2px solid red";
	        passwordError.innerHTML = "<i>Password must contain at least eight characters</i>";
	    } else if(passwordField.value === username.value) {
			password.style.border = "2px solid red";
	        passwordError.innerHTML = "<i>Password must be different from Username</i>";
	   	} else {
		   	//Use regex to check the password contains at least  one number
		    var passwordReg = /[0-9]/;
	      	if(!passwordReg.test(passwordField.value)) {
				passwordField.style.border = "2px solid red";
		        passwordError.innerHTML = "<i>Password must contain at least one number (0-9)</i>";
	      	}
	      	//Use regex to check the password contains at least one lower case character
	      	var passwordReg = /[a-z]/;
	      	if(!passwordReg.test(passwordField.value)) {
				passwordField.style.border = "2px solid red";
		        passwordError.innerHTML = "<i>Password must contain at least one lowercase letter (a-z)</i>";
	      	}
	      	//Use regex to check the password contains at least one upper case character
	      	var passwordReg = /[A-Z]/;
	      	if(!passwordReg.test(passwordField.value)) {
				passwordField.style.border = "2px solid red";
		        passwordError.innerHTML = "<i>Password must contain at least one uppercase letter (A-Z)</i>";
	      	}
	   	}
	});

	confirmPasswordField.addEventListener('blur', function() {
		if (confirmPasswordField.value == '') {
			confirmPasswordField.style.border = "2px solid red";
			confirmPasswordError.innerHTML = "<i>Field cannot be empty</i>"
		} else if (confirmPasswordField.value != passwordField.value) {
			passwordField.style.border = "2px solid red";
			confirmPasswordField.style.border = "2px solid red";
			confirmPasswordError.innerHTML = "<i>The passwords do not match!</i>";
		}
	});

	postcodeField.addEventListener('blur', function() {
		if (postcodeField.value == '') {
			postcodeField.style.border = "2px solid red";
			postcodeError.innerHTML = "<i>Field cannot be empty</i>";
		} else if (isNaN(postcodeField.value) || postcodeField.value.length != 4) {
			postcodeField.style.border = "2px solid red";
			postcodeError.innerHTML = "<i>Please enter a valid postcode</i>";
		} 
	});
};

//Validate the email address with regex
function validateEmail(str) {
   var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   return pattern.test(str);
}


/*LOGIN FORM JAVASCRIPT*/
function validateLogin() {
	var userNameField = document.forms["login"]["user_email"];
	var passwordField = document.forms["login"]["password_verify"];

	var usernameEmailError = document.getElementById("user_email_error");
	var passwordError = document.getElementById("password_verify_error");

	var errors = false;
	 if (userNameField.value == "") {
        userNameField.style.border = "2px solid red";
		usernameEmailError.innerHTML = "<i>Please enter a Username or Email Address</i>"
        errors = true;
    }
    if (passwordField.value == "") {
		passwordField.style.border = "2px solid red";
		passwordError.innerHTML = "<i>Please enter a password</i>";
		errors = true;
    }
	if (userNameField.value == "" && passwordField.value == "") {
    	userNameField.style.border = "2px solid red";
		usernameEmailError.innerHTML = "<i>Please enter a Username or Email Address</i>"

    	passwordField.style.border = "2px solid red";
		passwordError.innerHTML = "<i>Please enter a password</i>";

		errors = true;
    } 
    if (errors) {
    	return false;
    }
    return true;
}

function loadedLogin(){
	var userNameField = document.forms["login"]["user_email"];
	var passwordField = document.forms["login"]["password_verify"];

	var usernameEmailError = document.getElementById("user_email_error");
	var passwordError = document.getElementById("password_verify_error");

	userNameField.addEventListener('input', function(event) {
		removeError(userNameField, usernameEmailError);
	});

	passwordField.addEventListener('input', function(event) {
		removeError(passwordField,  passwordError);
	});

};