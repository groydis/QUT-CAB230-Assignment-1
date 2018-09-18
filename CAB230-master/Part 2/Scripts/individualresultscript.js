//Checks if there is a value in the textbox or not
function checkText(){
	var textbox = document.getElementById("entered_review");
	var textboxError = document.getElementById("review_error");

	//if there isn't a value in the text box show an error message
	if (textbox.value ===''){
		//Changes the border of the textbox to red and displays a small message
		textbox.style.border = "2px solid red";
		textboxError.innerHTML = "<i>Please enter a review</i>";
		return false;
	}
	return true;
}	

//Removes the error message and the red border
function undoTextError(){
	var textbox = document.getElementById("entered_review");
	var textboxError = document.getElementById("review_error");

	textbox.style.border = null;
	textboxError.innerHTML = null;
}

//runs the validation of the review 
function validateReview(){
	//Yet to add in star rating checks
	//And yet to add in review creation on the page
	if (checkText()){
		return true;
	}
	return false;
}