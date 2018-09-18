//The validate functions are checking the user's input
//validateForm() checks all 3 inputs on the table
function validateForm() {
  validateName();
  validateSuburb();
  validatePostcode();
    return false;
}
//Validate Functions checks if the input is blank or is a numbers
//if it is, it changes the surrounding box to red and displays
//an italic error message.
function validateName() {
  var name = document.getElementById('sname');
  var nameError = document.getElementById("name_error");
  if (name.value == "" || (!isNaN(name.value))) {
    name.style.border = "2px solid red";
    nameError.innerHTML = "<i>Please enter a name</i>";
  } else {
    nameError.innerHTML = '';
  }
  return false;
}

function validateSuburb() {
  var suburb = document.getElementById('ssuburb');
  var suburbError = document.getElementById('suburb_error');
  if (suburb.value == "" || (!isNaN(suburb.value))) {
    suburb.style.border = "2px solid red";
    suburbError.innerHTML = "<i>Please enter a suburb</i>";
  } else {
    suburbError.innerHTML = '';
  }
  return false;
}

function validatePostcode() {
  var postcode = document.getElementById('spostcode');
  var postcodeError = document.getElementById('postcode_error');
  if (postcode.value == "" || (isNaN(postcode.value))) {
    postcode.style.border = "2px solid red";
    postcodeError.innerHTML = "<i>Please enter a valid postcode</i>";
  } else {
    postcodeError.innerHTML = '';
  }
  return false;
}

//These undoError functions remove the red box and error message
function undoNameError(){
	var name = document.getElementById("sname");
	var nameError = document.getElementById("name_error");

	name.style.border = null;
	nameError.innerHTML = null;
}

function undoSuburbError(){
	var suburb = document.getElementById("ssuburb");
	var suburb_error = document.getElementById("suburb_error");

	suburb.style.border = null;
	suburb_error.innerHTML = null;
}

function undoPostcodeError(){
	var postcode = document.getElementById("spostcode");
	var postcode_error = document.getElementById("postcode_error");

	postcode.style.border = null;
	postcode_error.innerHTML = null;
}
