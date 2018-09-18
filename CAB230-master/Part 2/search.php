<!-- DO NOT TOUCH -->
<html>
	<head>
		<!-- Font Awesome Icons -->
		<link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">
		<!-- Style Sheet -->
		<link href="css/design.css" rel="stylesheet" type="text/css"/>
		<script type="text/javascript" src="scripts/searchscripts.js"></script>
		<script type="text/javascript" src="scripts/starratingscript.js"></script>
		<!-- Webpage Title -->
		<title>BNE Wi-Fi Search</title>
	</head>
	<body>
		<!-- Container for entire page -->
		<!-- Navigation Bar -->
		<?php include 'navbar.php'; ?>
		<div id="body_content">
			<div class="content">
				<div class="header">
					<h1 id="static_title">Search</h1>
				</div>
				<!-- A searchield div for the form to sit in this form has multiple inputs which is used to search by Name, Suburb, Postcode and Rating -->
				<div id='searchfield'>
					<form name="searchfield">
						<label>Please enter your search parameters:</label>
						</br></br>
						<!--Name input that is validated on blur-->
						<label for="Name">Name:</label>
						<input type="text" id="sname" onblur="validateName()" onfocus="undoNameError()">
						<!--Error message area for the name-->
						<div class="error_message" id="name_error"></div>
						<!--Suburb input-->
						<label for="Suburb"> Suburb:</label>
						<input type="text" id="ssuburb" onblur="validateSuburb()" onfocus="undoSuburbError()">
						<!--Suburb Error-->
						<div class="error_message" id="suburb_error"></div>
						<!--Postcode input-->
						<label for="Postcode"> Postcode:</label>
						<input type="text" id="spostcode" onblur="validatePostcode()" onfocus="undoPostcodeError()">
						<!--Postcode error-->
						<div class="error_message" id="postcode_error"></div>
						<!--Rating Input.-->
						<div id=ratingselector>
							Select a rating:
							<div class="enter_rating_star">
								<!--The 5 stars and their respective functions to fill, empty and select a rating-->
								<i id="one" class="far fa-star" onmouseover="starOneOver()" onmouseout="starOneOut()" onclick="starOneClicked()"></i><i id="two" class="far fa-star" onmouseover="starTwoOver()" onmouseout="starTwoOut()" onclick="starTwoClicked()"></i><i id="three" class="far fa-star" onmouseover="starThreeOver()" onmouseout="starThreeOut()" onclick="starThreeClicked()"></i><i id="four" class="far fa-star" onmouseover="starFourOver()" onmouseout="starFourOut()" onclick="starFourClicked()"></i><i id="five" class="far fa-star" onmouseover="starFiveOver()" onmouseout="starFiveOut()" onclick="starFiveClicked()"></i>
							</div>
							<!--Submit button-->
							<input type="button" id="button" name="search_submit" value="Search" onclick="searchByRating()">
						</div>
					</form>
				</div>
			</div>
		</div>
<?php  require "./scripts/includes/footer.inc";?>
