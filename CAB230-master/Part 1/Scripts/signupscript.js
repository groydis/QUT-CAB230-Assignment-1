//Check if the first name input box is empty
function checkFirstName(){
	var firstName = document.getElementById("first_name");
	var firstNameError = document.getElementById("first_name_error");

	if (firstName.value === ''){
		//If there is an error put a red border on and add a message		
		firstName.style.border = "2px solid red";
		firstNameError.innerHTML = "<i>Please enter a name</i>";
		return false;
	}
	var reg = /[0-9]/g;
    if(reg.test(firstName.value)) {
    	//User Regex to check if the first name has only letters, spaces and punctuation 
      	firstName.style.border = "2px solid red";
    	firstNameError.innerHTML = "<i>First Name can only contain letters and spaces</i>";
    	return false;
    }
	return true;
}

//Remove the border and the error message of the first name
function undoFirstNameError(){
	var firstName = document.getElementById("first_name");
	var firstNameError = document.getElementById("first_name_error");

	//Remove the message and border values
	firstName.style.border = null;
	firstNameError.innerHTML = null;
}

//Check if the last name input box is empty
function checkLastName(){
	var lastName = document.getElementById("last_name");
	var lastNameError = document.getElementById("last_name_error");

	if (lastName.value === ''){
		//If there is an error put a red border on and add a message		
		lastName.style.border = "2px solid red";
		lastNameError.innerHTML = "<i>Please enter a name</i>";
		return false;
	}
	var reg = /[0-9]/g;
    if(reg.test(lastName.value)) {
    	//User Regex to check if the first name has only letters, spaces and punctuation 
      	lastName.style.border = "2px solid red";
    	lastNameError.innerHTML = "<i>Last Name can only contain letters and spaces</i>";
    	return false;
    }
	return true;
}

//Remove the border and the error message of the last name
function undoLastNameError(){
	var lastName = document.getElementById("last_name");
	var lastNameError = document.getElementById("last_name_error");

	//Remove the message and border values
	lastName.style.border = null;
	lastNameError.innerHTML = null;
}

//Check if the username input box is empty
function checkUsername() {
  	var username = document.getElementById("username");
  	var userError = document.getElementById("username_error");

  	if (username.value === ''){
		//If there is an error put a red border on and add a message		  		
    	username.style.border = "2px solid red";
    	userError.innerHTML = "<i>Please enter a username</i>";
    	return false;
  	}
  	var re = /^\w+$/;
    if(!re.test(username.value)) {
    	//User Regex to check if the username has no spaces and 
      	username.style.border = "2px solid red";
    	userError.innerHTML = "<i>Username must only contain letters, numbers and underscores</i>";
    	return false;
    }
  	return true;
}

//Remove the border and the error message of the username
function undoUsernameError(){
	var username = document.getElementById("username");
	var userError = document.getElementById("username_error");

	//Remove the message and border values
	username.style.border = null;
	userError.innerHTML = null;
}

//Validate the email address with regex
function validateEmail(str) {
   var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   return pattern.test(str);
}

//Check the email address 
function checkEmailAddress(){
	var email = document.getElementById("email_address");
	var emailError = document.getElementById("email_error");

	//Check if the email input box is empty
	if (email.value === ''){
		email.style.border = "2px solid red";
		emailError.innerHTML = "<i>Please enter an email address</i>";
		return false;
	}
	//Validate the email address entered by the user 
	if (validateEmail(email.value) === false){
		email.style.border = "2px solid red";
		emailError.innerHTML = "<i>Please enter a valid email address</i>";
		return false;
	}
	return true;
}

//Remove the border and error messsage of the email address
function undoEmailError(){
	var email = document.getElementById("email_address");
	var emailError = document.getElementById("email_error");	

	//Remove the message and border values	
	email.style.border = null;
	emailError.innerHTML = null;

}

//Check if the password input box is empty
function checkPassword(){
	var password = document.getElementById("password");
	var passwordError = document.getElementById("password_error");

	//Check is the password input box is empty
	if (password.value === ''){
		password.style.border = "2px solid red";
	    passwordError.innerHTML = "<i>Please enter a password</i>";
	    return false;
	}
	return true;
}

//Remove the border and error message of the password input box
function undoPasswordError(){
	var password = document.getElementById("password");
	var passwordError = document.getElementById("password_error");
	
	//Remove the message and border values	
	password.style.border = null;
	passwordError.innerHTML = null;	
}

//Check if the confirm password input box is empty
function checkConfirmPassword(){
	var confirmPassword = document.getElementById("confirm_password");
	var confirmPasswordError = document.getElementById("confirm_password_error");

	//Check if the confirm password input box is empty
	if (confirmPassword.value === ''){
		confirmPassword.style.border = "2px solid red";
    	confirmPasswordError.innerHTML = "<i>Please enter a matching password</i>";
    	return false;
	}
	return true;
}

//Remove the border and error message of the confirm password inpout box
function undoConfirmPasswordError(){
	var confirmPassword = document.getElementById("confirm_password");
	var confirmPasswordError = document.getElementById("confirm_password_error");

	//Remove the message and border values
	confirmPassword.style.border = null;
	confirmPasswordError.innerHTML = null;
}

//Check if the passwords match each other and
//they are valid with the specifications chosen
function checkPasswordMatch(){
	var password = document.getElementById("password");
	var passwordError = document.getElementById("password_error");	
	var confirmPassword = document.getElementById("confirm_password");
	var confirmPasswordError = document.getElementById("confirm_password_error");
	var username = document.getElementById("username");

	//Check if the password match
	if (password.value != confirmPassword.value){
		password.style.border = "2px solid red";
		confirmPassword.style.border = "2px solid red";
		confirmPasswordError.innerHTML = "<i>These passwords do not match!</i>";
		return false;
	} 
	//If they do match and one of the fields is not empty
	if (password.value === confirmPassword.value && password.value != ''){
		//Check if the password is 8 characters long enough
		if(password.value.length < 8) {
			passsword.style.border = "2px solid red";
			confirmPassword.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must contain at least eight characters</i>";
	        return false;
	    }
	    //Check if the password is the same as the username
	    if(password.value === username.value) {
			password.style.border = "2px solid red";
			confirmPassword.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must be different from Username</i>";
	        return false;
	   	}
	   	//Use regex to check the password contains at least  one number
	    var reg = /[0-9]/;
      	if(!reg.test(password.value)) {
			password.style.border = "2px solid red";
			confirmPassword.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must contain at least one number (0-9)</i>";
	        return false;
      	}
      	//Use regex to check the password contains at least one lower case character
      	var reg = /[a-z]/;
      	if(!reg.test(password.value)) {
			password.style.border = "2px solid red";
			confirmPassword.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must contain at least one lowercase letter (a-z)</i>";
	        return false;
      	}
      	//Use regex to check the password contains at least one upper case character
      	var reg = /[A-Z]/;
      	if(!reg.test(password.value)) {
			password.style.border = "2px solid red";
			confirmPassword.style.border = "2px solid red";
	        confirmPasswordError.innerHTML = "<i>Password must contain at least one uppercase letter (A-Z)</i>";
	        return false;
      	}
  		//Remove the error message and border values
      	password.style.border = null;
      	password.innerHTML = null;
		confirmPassword.style.border = null;
	    confirmPasswordError.innerHTML = null;
		return true;
	}
}

//Check if the date of birth input box is empty
function checkDOB(){
	var birthDate = document.getElementById("dob");
	var birthDateError = document.getElementById("DOB_error");
	
	//Check if the birthdate input box is empty
	if(birthDate.value === ''){
		birthDate.style.border = "2px solid red";
		birthDateError.innerHTML = "<i>Please enter a date of birth</i>";
		return false;
	}
	return true;
}

//Remove the border and error message of the date of birth
function undoDOBError(){
	var birthDate = document.getElementById("dob");
	var birthDateError = document.getElementById("DOB_error");

	//Remove the message and border values
	birthDate.style.border = null;
	birthDateError.innerHTML = null;
}

//Check if the postcode input box is empty
function checkPostcode(){
	var postcode = document.getElementById("postcode");
	var postcodeError = document.getElementById("postcode_error");

	//Check if the postcode input box is empty
	if (postcode.value === '') {
		postcode.style.border = "2px solid red";
		postcodeError.innerHTML = "<i>Please enter a postcode</i>";
		return false;
	}
	return true;
}

//Remove the border and error message of the postcode
function undoPostcodeError(){
	var postcode = document.getElementById("postcode");
	var postcodeError = document.getElementById("postcode_error");

	//Remove the message and border values
	postcode.style.border = null;
	postcodeError.innerHTML = null;
	
}

//Validate the postcode for it being 4 digits long and
//only numbers
function validatePostcode(){
	var postcode = document.getElementById("postcode");
	var postcodeError = document.getElementById("postcode_error");

	//Check if the postcode is not a number and not 4 digits long
	if (isNaN(postcode.value) || postcode.value.length != 4){
		postcode.style.border = "2px solid red";
		postcodeError.innerHTML = "<i>Please enter a valid postcode</i>";
		return false;
	} 
	//Check if the postcode is a number and exactly 4 digits long
	if (!isNaN(postcode.value) && postcode.value.length === 4){
		postcode.style.border = null;
		postcodeError.innerHTML = null;
		return true;
	}
}

//Check that all the values on the form are entered and entered correctly
function validateForm(){
	if (checkFirstName() &&	checkLastName() &&
		checkUsername() &&	checkEmailAddress() &&
		checkPasswordMatch() &&	checkDOB() && 
		validatePostcode()){
		//Let the user know they successfully signed up
		alert("Successful Sign Up");
		window.location.href='index.php';
		return true;
	} else {
		//Let the user know they have unsuccessfully signed up
		alert("Unsuccessful Sign Up");
		checkFirstName();
		checkLastName();
		checkUsername();
		checkEmailAddress() &&
		checkPasswordMatch() &&	checkDOB() && 
		validatePostcode()
		return false;
	}
}